import { User } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";
import githubLogo from "@/assets/github-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <div className="max-w-4xl w-full space-y-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center border-4 border-accent">
            <User className="w-32 h-32 text-muted-foreground" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-center">
            <span className="text-foreground">Jørund</span>{" "}
            <span className="text-header-text">Vatle Sandgren</span>
          </h1>
        </div>

        {/* Typewriter Section */}
        <div className="text-center px-4">
          <TypewriterText />
        </div>

        {/* GitHub Button */}
        <div className="flex justify-center">
          <a
            href="https://github.com/jaurund"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#24292e] hover:bg-[#1a1e22] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <img
              src={githubLogo}
              alt="GitHub"
              className="w-32 h-auto group-hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Bio Section */}
        <div className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          <p>
            Samfunnsengasjert og kreativ type med stort hjerte, og flink til å ta vare på
            medmenneskje. Romfartsnerd, motorhovud, tekstgalning, trommis, gamer og teiknar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
