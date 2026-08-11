type SkillCategory = {
  label: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express.js", "Flask"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools & Cloud",
    skills: ["AWS S3", "Render", "Cloudinary", "Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
            <p className="mt-2 text-sm text-white/50">
              Tools I reach for regularly.
            </p>
          </div>

          <div className="space-y-6 md:flex-1">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {category.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
