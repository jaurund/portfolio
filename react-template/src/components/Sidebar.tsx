import { Home, Briefcase, Code, Github } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { GitHubCalendar } from "react-github-calendar";

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Briefcase, label: "CV", path: "/cv" },
    { icon: Code, label: "Projects", path: "/projects" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 bg-sidebar transition-all duration-300 ease-out z-40 ${
          isExpanded ? "w-60" : "w-16"
        } overflow-hidden`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Rounded corner at top */}
        <div className="absolute -top-16 right-0 w-16 h-16 bg-sidebar">
          <svg className="absolute top-0 right-0 w-16 h-16" viewBox="0 0 64 64">
            <path
              d="M 64 0 L 64 64 Q 64 0 0 0 Z"
              fill="hsl(var(--nav-bg))"
            />
          </svg>
        </div>

        {/* Navigation items */}
        <nav className="flex flex-col gap-2 p-2 pt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex items-center gap-4 px-3 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              activeClassName="bg-sidebar-accent"
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              <span
                className={`whitespace-nowrap transition-opacity duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          ))}

          {/* GitHub Link */}
          <a
            href="https://github.com/jaurund"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-3 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <Github className="w-6 h-6 flex-shrink-0" />
            <span
              className={`whitespace-nowrap transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              GitHub
            </span>
          </a>
        </nav>

        {/* GitHub Calendar - only shown when expanded */}
        {isExpanded && (
          <div className="px-2 mt-6">
            <div className="text-xs text-sidebar-foreground mb-2 px-3 font-semibold">
              Contributions
            </div>
            <div className="overflow-x-auto">
              <GitHubCalendar
                username="jaurund"
                colorScheme="dark"
                fontSize={10}
                blockSize={8}
              />
            </div>
          </div>
        )}

        {/* Rounded corner at bottom */}
        <div className="absolute -bottom-16 right-0 w-16 h-16 bg-sidebar">
          <svg className="absolute bottom-0 right-0 w-16 h-16" viewBox="0 0 64 64">
            <path
              d="M 64 64 L 64 0 Q 64 64 0 64 Z"
              fill="hsl(var(--nav-bg))"
            />
          </svg>
        </div>
      </aside>

      {/* Spacer for content */}
      <div className="w-16 flex-shrink-0" />
    </>
  );
};
