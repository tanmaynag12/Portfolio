type Achievement = {
  title: string;
  detail: string;
  description: string;
  certificate: string;
};

const achievements: Achievement[] = [
  {
    title: "Manthan Business Plan Competition — 3rd Place",
    detail: "2023 · IIC and Startup Club, CMRIT Bengaluru",
    description:
      "Proposed Metro Mithra, an assistive transit solution designed for visually and hearing-impaired individuals.",
    certificate: "/Manthan.pdf",
  },
  {
    title: "Assistive Technology Hackathon",
    detail: "2024 · All India Institute of Speech and Hearing (AIISH), Mysuru",
    description:
      "Developed AAVAAS, a web-based tele-consultation platform connecting speech-language pathologists and audiologists with the people they support.",
    certificate: "/AAVAAS.pdf",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-white">Achievements</h2>
            <p className="mt-2 text-sm text-white/50">
              Competitions and hackathons I've taken part in.
            </p>
          </div>

          <div className="space-y-6 md:flex-1">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/40">
                  {item.detail}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>

                <div className="mt-5">
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-400 transition hover:bg-blue-400/20"
                  >
                    View Certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
