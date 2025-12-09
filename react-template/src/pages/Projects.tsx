import { GitHubCalendar } from "react-github-calendar";

const Projects = () => {
  const projects = [
    {
      title: "quote-randomizer-RESTAPI",
      description: "RESTful API for generating random quotes with full CRUD operations",
      url: "https://github.com/jaurund/quote-randomizer-RESTAPI",
      tags: ["REST", "API", "Node.js"],
    },
    {
      title: "learning-project-RESTAPI-OAuth-SQL",
      description: "REST API, OAuth authentication, SQL databases, and containerization",
      url: "https://github.com/jaurund/learning-project-for-RESTAPI-OAuth-SQL-Container",
      tags: ["OAuth", "SQL", "Docker"],
    },
    {
      title: "bird-strikes-linq-database",
      description: "Database project analyzing bird strike incidents using LINQ",
      url: "https://github.com/jaurund/bird-strikes-linq-database-project",
      tags: ["LINQ", "C#", "Database"],
    },
    {
      title: "C-basic-oppgave-programflyt",
      description: "Fundamental C# exercises focusing on program control flow",
      url: "https://github.com/jaurund/C-basic-oppgave-programflyt",
      tags: ["C#", "Basics"],
    },
    {
      title: "bergenapp",
      description: "Collaborative application for Bergen city",
      url: "https://github.com/Balxkodehodet/bergenapp",
      tags: ["Collab", "React"],
    },
    {
      title: "printforge",
      description: "Modern printing solution with advanced features",
      url: "https://github.com/MariusREL/printforge",
      tags: ["Collab", "Full-stack"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p>
          <span className="text-terminal-prompt">$ </span>
          <span className="text-terminal-command">ls -la projects/</span>
        </p>
        <h1 className="text-3xl font-bold text-accent terminal-glow">
          # PROJECTS
        </h1>
      </div>

      {/* GitHub Calendar */}
      <div className="space-y-2">
        <p className="text-muted-foreground">## git activity</p>
        <div className="border border-border bg-card/30 p-4 rounded overflow-x-auto">
          <GitHubCalendar
            username="jaurund"
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-2">
        <p className="text-muted-foreground">## repositories</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-card/30 p-4 rounded hover:border-primary transition-all hover:bg-primary/5 group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-primary group-hover:terminal-glow font-semibold">
                  {project.title}
                </span>
                <span className="text-muted-foreground">→</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted text-secondary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
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
          className="inline-block border border-border hover:border-primary bg-card hover:bg-primary/10 px-6 py-3 rounded transition-all"
        >
          <span className="text-primary hover:terminal-glow">→ View Full GitHub Profile</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
