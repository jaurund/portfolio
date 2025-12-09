import { User } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";
import { GitHubCalendar } from "react-github-calendar";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Profile */}
      <div className="border border-border bg-card/30 p-6 rounded">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded border-2 border-border flex items-center justify-center bg-muted">
            <User className="w-20 h-20 text-muted-foreground" />
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="text-terminal-user">Jørund</span>{" "}
              <span className="text-terminal-host">Vatle Sandgren</span>
            </h1>
            <p className="text-muted-foreground text-sm">// Backend Developer in Training</p>
          </div>
        </div>
      </div>

      {/* Typewriter */}
      <div className="py-4">
        <TypewriterText />
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <p>
          <span className="text-terminal-prompt">$ </span>
          <span className="text-terminal-command">cat about.txt</span>
        </p>
        <div className="border-l-2 border-primary/50 pl-4 text-muted-foreground">
          <p>Samfunnsengasjert og kreativ type med stort hjerte,</p>
          <p>og flink til å ta vare på medmenneskje.</p>
          <p>Romfartsnerd, motorhovud, tekstgalning, trommis, gamer og teiknar.</p>
        </div>
      </div>

      {/* GitHub Link */}
      <div className="space-y-2">
        <p>
          <span className="text-terminal-prompt">$ </span>
          <span className="text-terminal-command">open https://github.com/jaurund</span>
        </p>
        <a
          href="https://github.com/jaurund"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-border hover:border-terminal-user bg-card hover:bg-terminal-user/10 px-6 py-3 rounded transition-all group"
        >
          <span className="text-terminal-user">→ View GitHub Profile</span>
        </a>
      </div>

      {/* GitHub Calendar */}
      <div className="space-y-2">
        <p>
          <span className="text-terminal-prompt">$ </span>
          <span className="text-terminal-command">git log --oneline --graph</span>
        </p>
        <div className="border border-border bg-card/30 p-4 rounded overflow-x-auto">
          <GitHubCalendar
            username="jaurund"
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
