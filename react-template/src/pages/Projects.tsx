import { ExternalLink, Github } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const Projects = () => {
  const projects = [
    {
      title: "Quote Randomizer REST API",
      description: "RESTful API for generating random quotes with full CRUD operations",
      url: "https://github.com/jaurund/quote-randomizer-RESTAPI",
      tags: ["REST API", "Backend", "Node.js"],
    },
    {
      title: "Learning Project - REST API & OAuth",
      description: "Comprehensive learning project covering REST API, OAuth authentication, SQL databases, and containerization",
      url: "https://github.com/jaurund/learning-project-for-RESTAPI-OAuth-SQL-Container",
      tags: ["OAuth", "SQL", "Docker", "REST API"],
    },
    {
      title: "Bird Strikes LINQ Database",
      description: "Database project analyzing bird strike incidents using LINQ queries",
      url: "https://github.com/jaurund/bird-strikes-linq-database-project",
      tags: ["LINQ", "C#", "Database"],
    },
    {
      title: "C# Basic Program Flow",
      description: "Fundamental C# exercises focusing on program control flow and logic",
      url: "https://github.com/jaurund/C-basic-oppgave-programflyt",
      tags: ["C#", "Basics", "Logic"],
    },
    {
      title: "BergenApp",
      description: "Collaborative application for Bergen city information and services",
      url: "https://github.com/Balxkodehodet/bergenapp",
      tags: ["Collaboration", "React", "TypeScript"],
    },
    {
      title: "PrintForge",
      description: "Modern printing solution with advanced features",
      url: "https://github.com/MariusREL/printforge",
      tags: ["Collaboration", "Full-stack"],
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-header-text">Projects</span>
        </h1>

        {/* GitHub Activity */}
        <div className="mb-12 bg-card p-6 rounded-lg shadow-md border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Github className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-foreground">GitHub Activity</h2>
          </div>
          <div className="overflow-x-auto">
            <GitHubCalendar
              username="jaurund"
              colorScheme="light"
              fontSize={12}
              blockSize={12}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-all hover:scale-105 duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-accent">
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/jaurund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#24292e] hover:bg-[#1a1e22] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            <Github className="w-6 h-6" />
            View Full GitHub Profile
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
