import { Heart, ArrowLeft, Rocket, Car, Music, Gamepad2, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Rocket,
      title: "Romfartsnerd",
      description: "Passionate about space exploration and astronomy",
    },
    {
      icon: Car,
      title: "Motorhovud",
      description: "Enthusiast for cars and mechanical engineering",
    },
    {
      icon: Pencil,
      title: "Tekstgalning",
      description: "Love for writing and creative storytelling",
    },
    {
      icon: Music,
      title: "Trommis",
      description: "Drummer with passion for rhythm and percussion",
    },
    {
      icon: Gamepad2,
      title: "Gamer",
      description: "Gaming enthusiast across various platforms and genres",
    },
    {
      icon: Pencil,
      title: "Teiknar",
      description: "Drawing and visual arts as creative outlet",
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 pt-24">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/cv"
          className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to CV
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-6xl font-bold text-header-text">Hobbies & Interests</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-all hover:scale-105 duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{hobby.title}</h3>
                    <p className="text-muted-foreground">{hobby.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Traits */}
        <div className="mt-12 bg-card p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Eigenskapar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Lærar fort", "Auge for detaljar", "Kreativ og idérik", "Pådrivar", "Analytisk", "Samfunnsengasjert"].map(
              (trait) => (
                <div
                  key={trait}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-center font-medium"
                >
                  {trait}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
