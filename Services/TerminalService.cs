using Microsoft.AspNetCore.Components;

namespace portfolio.Services;

public class TerminalService
{
    private readonly NavigationManager _navigationManager;
    private readonly List<TerminalLine> _lines = new();
    private readonly List<string> _commandHistory = new();
    private int _historyIndex = -1;

    public event Action? OnStateChanged;

    public IReadOnlyList<TerminalLine> Lines => _lines.AsReadOnly();
    public IReadOnlyList<string> CommandHistory => _commandHistory.AsReadOnly();
    public int HistoryIndex => _historyIndex;
    public string CurrentPath => _navigationManager.ToBaseRelativePath(_navigationManager.Uri);

    private static readonly Dictionary<string, RouteConfig> Routes = new()
    {
        { "", new RouteConfig { Name = "home", Type = "file", Content = "Welcome to my portfolio. Type 'help' for available commands." } },
        { "cv", new RouteConfig { Name = "cv", Type = "dir", Children = new[] { "education", "hobbies" } } },
        { "cv/education", new RouteConfig { Name = "education", Type = "file" } },
        { "cv/hobbies", new RouteConfig { Name = "hobbies", Type = "file" } },
        { "projects", new RouteConfig { Name = "projects", Type = "file" } },
    };

    public TerminalService(NavigationManager navigationManager)
    {
        _navigationManager = navigationManager;

        // Load from localStorage would go here in a real implementation
        AddLine(new TerminalLine
        {
            Type = TerminalLineType.Output,
            Content = $"Last login: {DateTime.Now:g}"
        });
    }

    public void AddLine(TerminalLine line)
    {
        line.Id = $"line-{DateTime.Now.Ticks}-{Random.Shared.Next()}";
        _lines.Add(line);
        NotifyStateChanged();
    }

    public void ClearTerminal()
    {
        _lines.Clear();
        NotifyStateChanged();
    }

    public string NavigateHistory(string direction)
    {
        if (_commandHistory.Count == 0) return "";

        if (direction == "up")
        {
            _historyIndex = _historyIndex == -1 ? _commandHistory.Count - 1 : Math.Max(0, _historyIndex - 1);
        }
        else
        {
            if (_historyIndex == -1) return "";
            _historyIndex = Math.Min(_commandHistory.Count - 1, _historyIndex + 1);
            if (_historyIndex == _commandHistory.Count - 1 && _historyIndex != -1)
            {
                _historyIndex = -1;
            }
        }

        return _historyIndex == -1 ? "" : _commandHistory[_historyIndex];
    }

    public void ExecuteCommand(string input)
    {
        var trimmedInput = input.Trim();
        var currentPath = CurrentPath;
        var pathDisplay = string.IsNullOrEmpty(currentPath) || currentPath == "/" ? "~" : $"/{currentPath}";

        AddLine(new TerminalLine
        {
            Type = TerminalLineType.Input,
            Content = trimmedInput,
            Prompt = $"{pathDisplay} $"
        });

        if (!string.IsNullOrWhiteSpace(trimmedInput))
        {
            _commandHistory.Add(trimmedInput);
            _historyIndex = -1;
        }

        if (string.IsNullOrWhiteSpace(trimmedInput)) return;

        var parts = trimmedInput.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
        var command = parts[0].ToLower();
        var args = parts.Length > 1 ? parts[1..] : Array.Empty<string>();

        switch (command)
        {
            case "help":
                ShowHelp();
                break;
            case "clear":
                ClearTerminal();
                break;
            case "pwd":
                AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = $"/{currentPath}" });
                break;
            case "whoami":
                AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "jaurund" });
                break;
            case "ls":
                ListDirectory();
                break;
            case "cd":
                ChangeDirectory(args.Length > 0 ? args[0] : "");
                break;
            case "cat":
                Cat(args.Length > 0 ? args[0] : "");
                break;
            case "history":
                ShowHistory();
                break;
            case "neofetch":
                ShowNeofetch();
                break;
            case "sudo":
                AddLine(new TerminalLine { Type = TerminalLineType.Error, Content = "Nice try 😏" });
                break;
            case "rm":
                if (args.Length >= 2 && args[0] == "-rf" && args[1] == "/")
                {
                    AddLine(new TerminalLine { Type = TerminalLineType.Error, Content = "Deleting everything..." });
                    Task.Delay(500).ContinueWith(_ =>
                    {
                        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "Just kidding! 😄" });
                    });
                }
                else
                {
                    AddLine(new TerminalLine { Type = TerminalLineType.Error, Content = "rm: command not permitted" });
                }
                break;
            case "cowsay":
                Cowsay(string.Join(" ", args));
                break;
            default:
                AddLine(new TerminalLine { Type = TerminalLineType.Error, Content = $"{command}: command not found. Type 'help' for available commands." });
                break;
        }
    }

    private void ShowHelp()
    {
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "Available commands:" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  cd <path>    Navigate to a page (e.g., cd /cv, cd .., cd /)" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  ls           List contents of current directory" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  cat <file>   Display file content (navigates to page)" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  pwd          Print working directory" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  whoami       Display user information" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  clear        Clear terminal screen" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  history      Show command history" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "  neofetch     Display system information" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "" });
    }

    private void ListDirectory()
    {
        var currentPath = CurrentPath;
        var route = Routes.GetValueOrDefault(currentPath);

        if (route?.Type == "dir" && route.Children != null)
        {
            foreach (var child in route.Children)
            {
                AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = $"  {child}/" });
            }
        }
        else
        {
            var rootItems = Routes.Keys.Where(r => !string.IsNullOrEmpty(r) && !r.Contains('/')).ToList();
            foreach (var item in rootItems)
            {
                AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = $"  {item}/" });
            }
        }
    }

    private void ChangeDirectory(string target)
    {
        if (string.IsNullOrEmpty(target) || target == "~" || target == "/")
        {
            _navigationManager.NavigateTo("/");
            AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "Changed directory to /" });
        }
        else if (target == "..")
        {
            var currentPath = CurrentPath;
            var parts = currentPath.Split('/', StringSplitOptions.RemoveEmptyEntries);
            var parentPath = parts.Length > 1 ? string.Join("/", parts[..^1]) : "";
            _navigationManager.NavigateTo($"/{parentPath}");
            AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = $"Changed directory to /{parentPath}" });
        }
        else
        {
            var currentPath = CurrentPath;
            var newPath = target.StartsWith("/") ? target.TrimStart('/') :
                          string.IsNullOrEmpty(currentPath) ? target : $"{currentPath}/{target}";

            if (Routes.ContainsKey(newPath))
            {
                _navigationManager.NavigateTo($"/{newPath}");
                AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = $"Changed directory to /{newPath}" });
            }
            else
            {
                AddLine(new TerminalLine { Type = TerminalLineType.Error, Content = $"cd: {target}: No such file or directory" });
            }
        }
    }

    private void Cat(string target)
    {
        if (string.IsNullOrEmpty(target))
        {
            AddLine(new TerminalLine { Type = TerminalLineType.Error, Content = "cat: missing file operand" });
            return;
        }

        var currentPath = CurrentPath;
        var filePath = target.StartsWith("/") ? target.TrimStart('/') :
                      string.IsNullOrEmpty(currentPath) ? target : $"{currentPath}/{target}";

        if (Routes.ContainsKey(filePath))
        {
            _navigationManager.NavigateTo($"/{filePath}");
            AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = $"Opening /{filePath}..." });
        }
        else
        {
            AddLine(new TerminalLine { Type = TerminalLineType.Error, Content = $"cat: {target}: No such file or directory" });
        }
    }

    private void ShowHistory()
    {
        if (_commandHistory.Count == 0)
        {
            AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "No commands in history" });
        }
        else
        {
            for (int i = 0; i < _commandHistory.Count; i++)
            {
                AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = $"  {i + 1}  {_commandHistory[i]}" });
            }
        }
    }

    private void ShowNeofetch()
    {
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "        .--.         jaurund@portfolio" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "       |o_o |        -----------------" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "       |:_/ |        OS: Lovable Web Terminal" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "      //   \\ \\       Host: portfolio.jaurund.dev" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "     (|     | )      Kernel: Blazor .NET 9" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "    /'\\_   _/`\\      Shell: Terminal.razor" });
        AddLine(new TerminalLine { Type = TerminalLineType.Success, Content = "    \\___)=(___/      Theme: Git Bash Dark" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "" });
    }

    private void Cowsay(string message)
    {
        if (string.IsNullOrEmpty(message)) message = "Moo!";
        var borderLen = message.Length + 2;
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = $" {new string('_', borderLen)}" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = $"< {message} >" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = $" {new string('-', borderLen)}" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "        \\   ^__^" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "         \\  (oo)\\_______" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "            (__)\\       )\\/\\" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "                ||----w |" });
        AddLine(new TerminalLine { Type = TerminalLineType.Output, Content = "                ||     ||" });
    }

    private void NotifyStateChanged() => OnStateChanged?.Invoke();
}

public class TerminalLine
{
    public string Id { get; set; } = "";
    public TerminalLineType Type { get; set; }
    public string Content { get; set; } = "";
    public string? Prompt { get; set; }
}

public enum TerminalLineType
{
    Input,
    Output,
    Error,
    Success
}

public class RouteConfig
{
    public string Name { get; set; } = "";
    public string Type { get; set; } = "";
    public string? Content { get; set; }
    public string[]? Children { get; set; }
}
