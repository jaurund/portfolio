import { Briefcase, GraduationCap, Heart } from "lucide-react";
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
        "Innkommande henvendingar frå kundar. Sal av mobilabonnement, forsikring og diverse oppsal. Blei utmerka med særs god kvalitet av sal i mai 2020. Plukka ut til å bli med på sideprosjekt med Nordea Liv.",
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
      description:
        "Jobba annakvar helg 30% saman med 100% i TF Bank. Lagt godt grunnalg for salskompetanse.",
    },
  ];

  const isSubPage = location.pathname !== "/cv";

  return (
    <div className="min-h-screen p-6 md:p-12 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* CV Navigation */}
        {!isSubPage && (
          <>
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-header-text">Curriculum Vitae</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/cv/education"
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  Education
                </Link>
                <Link
                  to="/cv/hobbies"
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Hobbies
                </Link>
              </div>
            </div>

            {/* Work Experience */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-foreground">Work Experience</h2>
              </div>

              {/* Main Jobs */}
              <div className="space-y-6 mb-8">
                {mainJobs.map((job) => (
                  <div key={job.id} className="bg-card p-6 rounded-lg shadow-md border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{job.title}</h3>
                        <p className="text-xl text-accent font-medium">{job.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                ))}
              </div>

              {/* Other Jobs - Collapsible */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-muted-foreground mb-3">Other Experience</h3>
                {otherJobs.map((job) => (
                  <div key={job.id} className="bg-muted rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full px-6 py-4 text-left hover:bg-muted/80 transition-colors flex justify-between items-center"
                    >
                      <div>
                        <span className="font-semibold text-foreground">{job.title}</span>
                        <span className="text-muted-foreground"> - {job.company}</span>
                      </div>
                      <span className="text-2xl text-accent">
                        {expandedJobs.includes(job.id) ? "−" : "+"}
                      </span>
                    </button>
                    {expandedJobs.includes(job.id) && (
                      <div className="px-6 pb-4">
                        <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default CV;
