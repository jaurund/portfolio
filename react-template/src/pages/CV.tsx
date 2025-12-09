import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CV = () => {
  const location = useLocation();
  const [expandedJobs, setExpandedJobs] = useState<string[]>([]);

  const toggleJob = (jobId: string) => {
    setExpandedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const mainJobs = [
    {
      id: "jobloop",
      title: "Kursdeltaker - Kodehode",
      company: "Jobloop",
      period: "Current",
      description: "Learning full-stack development with focus on backend technologies",
    },
    {
      id: "tfbank",
      title: "Kundeservicemedarbeidar",
      company: "TF BANK",
      period: "jan 2021 - apr 2023",
      description:
        "Postansvarleg. Jobbar med innkommande telefonsamtalar og e-post. Rettleiar kundar i finanstenester og forsikring. Utforming av standardsvar for kundeservice.",
    },
    {
      id: "sykes",
      title: "Salskonsulent",
      company: "SYKES - Telenor og Nordea Liv",
      period: "okt 2019 - des 2020",
      description:
        "Innkommande henvendingar frå kundar. Sal av mobilabonnement, forsikring og diverse oppsal. Blei utmerka med særs god kvalitet av sal i mai 2020.",
    },
  ];

  const otherJobs = [
    {
      id: "skeidar",
      title: "Lagermedarbeider",
      company: "Skeidar",
      period: "apr 2023 - aug 2024",
      description: "Tok trucklappen - T1, T2 og T4",
    },
    {
      id: "isbilen",
      title: "Seljar",
      company: "Isbilen",
      period: "mai 2018 - des 2023",
      description: "Jobba annakvar helg 30% saman med 100% i TF Bank.",
    },
  ];

  const isSubPage = location.pathname !== "/cv";

  if (isSubPage) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <p>
          <span className="text-terminal-prompt">$ </span>
          <span className="text-terminal-command">cat cv.txt</span>
        </p>
        <h1 className="text-3xl font-bold text-accent terminal-glow">
          # CURRICULUM VITAE
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <Link
          to="/cv/education"
          className="border border-border hover:border-secondary px-4 py-2 rounded transition-all hover:bg-secondary/10"
        >
          <span className="text-secondary">→ education.txt</span>
        </Link>
        <Link
          to="/cv/hobbies"
          className="border border-border hover:border-secondary px-4 py-2 rounded transition-all hover:bg-secondary/10"
        >
          <span className="text-secondary">→ hobbies.txt</span>
        </Link>
      </div>

      {/* Main Jobs */}
      <div className="space-y-2">
        <p className="text-muted-foreground">## Work Experience (Primary)</p>
        <div className="space-y-4">
          {mainJobs.map((job) => (
            <div key={job.id} className="border border-border bg-card/30 p-4 rounded">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <span className="text-primary font-semibold">{job.title}</span>
                  <span className="text-muted-foreground"> @ </span>
                  <span className="text-accent">{job.company}</span>
                </div>
                <span className="text-muted-foreground text-sm bg-muted px-2 py-1 rounded">
                  {job.period}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Jobs */}
      <div className="space-y-2">
        <p className="text-muted-foreground">## Other Experience</p>
        <div className="space-y-2">
          {otherJobs.map((job) => (
            <div key={job.id} className="border border-border bg-muted/30 rounded">
              <button
                onClick={() => toggleJob(job.id)}
                className="w-full px-4 py-3 text-left hover:bg-primary/10 transition-all flex justify-between items-center"
              >
                <div>
                  <span className="text-primary">{job.title}</span>
                  <span className="text-muted-foreground"> @ {job.company}</span>
                </div>
                <span className="text-accent">
                  {expandedJobs.includes(job.id) ? "[-]" : "[+]"}
                </span>
              </button>
              {expandedJobs.includes(job.id) && (
                <div className="px-4 pb-3 border-t border-border">
                  <p className="text-muted-foreground text-sm pt-2">{job.period}</p>
                  <p className="text-muted-foreground text-sm">{job.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
