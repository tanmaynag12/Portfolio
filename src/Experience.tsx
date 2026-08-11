const techStack = ["Node.js", "Express.js", "PostgreSQL", "AWS S3"];

function Experience() {
  return (
    <section id="experience" className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
            <p className="mt-2 text-sm text-white/50">
              Where I've put what I know to work.
            </p>
          </div>

          <div className="md:flex-1">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Software Development Engineer Intern
                </h3>
                <span className="text-sm text-white/50">
                  Jan 2026 – May 2026
                </span>
              </div>
              <a
                href="https://bockbharath.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-block text-sm font-medium text-blue-400 underline decoration-transparent underline-offset-4 transition hover:decoration-blue-400"
              >
                Bock AI
              </a>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                BockStore is a private, in-house app store built for Bock AI's
                internal suite of applications, letting employees browse,
                download, and receive updates for internal tools without going
                through the public Play Store or App Store.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
