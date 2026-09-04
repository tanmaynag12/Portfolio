type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  tech: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Bringway Solutions",
    companyUrl: "https://www.bringway.co.in/",
    period: "Jul 2026 – Present",
    description:
      "Designed and built an Inventory Management System after finding the company had no reliable way to track who held an asset or its current status, bringing assignments, returns, repairs, and history into one centralized system.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeScript",
      "Prisma",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "",
    period: "Apr 2026 – Present",
    description:
      "Developing custom full-stack web solutions for clients primarily across the US and Europe, from frontend interfaces and REST APIs to database integration and cloud deployment, including proof-of-concepts and MVPs and third-party API integrations to meet client requirements.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Bock AI",
    companyUrl: "https://bockbharath.org/",
    period: "Jan 2026 – Jun 2026",
    description:
      "Worked on BockStore, a private, in-house app store built for Bock AI's internal suite of applications, allowing employees to browse, download, and receive updates for internal tools without going through the public Play Store or App Store.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "AWS S3"],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-[#E8E5DB] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Experience
            </h2>

            <p className="mt-2 text-base text-neutral-500">
              Where I've put what I know to work.
            </p>
          </div>

          <div className="space-y-6 md:flex-1">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.period}`}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-7"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {experience.role}
                  </h3>

                  <span className="text-sm text-neutral-500">
                    {experience.period}
                  </span>
                </div>

                {experience.company &&
                  (experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block text-base font-medium text-blue-600 underline decoration-transparent underline-offset-4 transition hover:decoration-blue-600"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    <span className="mt-0.5 inline-block text-base font-medium text-neutral-500">
                      {experience.company}
                    </span>
                  ))}

                <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;