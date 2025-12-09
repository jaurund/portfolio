import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  const education = [
    {
      institution: "Universitetet i Stavanger",
      degree: "Bachelor i journalistikk",
      period: "2015 - 2018",
      description: "Comprehensive journalism program with focus on media ethics and storytelling",
    },
    {
      institution: "San Diego State University",
      degree: "Utveksling 5. semester - bachelor journalistikk",
      period: "2017",
      description: "International exchange program focusing on American journalism practices",
    },
    {
      institution: "Kvam Videregående Skule",
      degree: "Studiespesialisering - Realfag",
      period: "2012 - 2015",
      description: "Focus on mathematics and sciences",
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
          <GraduationCap className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-6xl font-bold text-header-text">Education</h1>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{edu.degree}</h2>
                  <p className="text-xl text-accent font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded">
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Skills & Qualifications */}
        <div className="mt-12 bg-card p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Kvalifikasjoner</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-muted-foreground">Trucklappen - T1, T2, T4</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-muted-foreground">Førarkort klasse B</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-muted-foreground">Full-stack utvikling (pågående)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
