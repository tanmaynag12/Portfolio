function About() {
  return (
    <section id="about" className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="mt-2 text-sm text-white/50">
              A bit about how I work and what I care about.
            </p>
          </div>

          <div className="space-y-5 md:flex-1">
            <p className="text-base leading-relaxed text-white/80">
              I've always been curious about how things work, and that curiosity
              is what first pulled me toward AI and software. It's still what
              keeps me interested today. Outside of code, I enjoy adventuring,
              gaming, and singing.
            </p>
            <p className="text-base leading-relaxed text-white/80">
              I build backend systems and full-stack applications, and I'm drawn
              to projects that solve real problems. I've worked on an AI-powered
              healthcare platform and an assistive communication app for people
              with speech impairments, and I'd like to keep building things in
              that space.
            </p>
            <p className="text-base leading-relaxed text-white/80">
              When I start something new, I try to first understand who I'm
              building for and what problem I'm actually solving, before
              deciding on the tech stack. I keep my code simple, I ask for
              feedback often, and I generally prefer a UI that's easy to use
              over one that just looks flashy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
