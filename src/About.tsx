function About() {
  return (
    <section id="about" className="bg-[#F0EEE6] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-neutral-900">
              About Me
            </h2>
            <p className="mt-2 text-base text-neutral-500">
              A bit about how I work and what I care about.
            </p>
          </div>

          <div className="space-y-4 md:flex-1">
            <p className="text-lg leading-relaxed text-neutral-700">
              I've always wanted to know how things work, and that's basically
              why I ended up in AI and software. Outside of code I'm usually
              gaming, out on some trip, or singing.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              I mostly work on backend and full-stack stuff, and I like picking
              projects that actually solve something real. So far that's meant
              an AI healthcare platform and a communication app for people with
              speech impairments, I want to keep building in that direction.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              Before touching any tech stack, I try to figure out who I'm
              building for and what the actual problem is. I keep things simple,
              ask for feedback a lot, and I'd rather have a UI that works well
              than one that just looks cool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;