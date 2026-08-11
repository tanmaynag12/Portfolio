import { useState } from "react";
import medicateHome from "./assets/Medicate_home.jpeg";
import medicateChatbot from "./assets/Medicate_chatbot.jpeg";
import medicateLogin from "./assets/Medicate_login.jpeg";
import JobPortalHome from "./assets/JobPortal_home.jpeg";
import JobPortalSignup from "./assets/Jobportal_signup.jpeg";
import JobPortaljob from "./assets/JobPortal_job.jpeg";
import AACHOME from "./assets/AAC_home.jpeg";
import AACPHRASES from "./assets/AAC_phrases.jpeg";
import AACLANG from "./assets/AAC_languages.jpeg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    title: "Medicate — AI Healthcare Platform",
    description:
      "Medicate is a healthcare platform designed to bring multiple health services together in one place. It uses Generative AI to let users interact with a chatbot for general health queries first, before deciding whether to consult a doctor, book an appointment, or locate a nearby pharmacy.",
    tech: ["Flask", "MongoDB", "Python", "Generative AI", "Gunicorn", "Render"],
    github: "https://github.com/tanmaynag12/Medicate-Healthcare",
    live: "https://medicate-healthcare-platform.onrender.com/",
    images: [medicateHome, medicateChatbot, medicateLogin],
  },
  {
    title: "JobPortal",
    description:
      "Developed a job portal website to manage the job search and hiring process for both seekers and recruiters — making it easier to find and apply to relevant roles, and to post and manage listings without the usual back-and-forth.",
    tech: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Cloudinary",
    ],
    github: "https://github.com/tanmaynag12/JobPortal-Website",
    live: "https://jobportal-fx7j.onrender.com/",
    images: [JobPortalHome, JobPortaljob, JobPortalSignup],
  },
  {
    title: "Assistive Communication App",
    description:
      "Built an application to help people with speech impairments communicate without needing to type full sentences. Users select from preset phrases, which are converted to speech instantly, making everyday conversation quicker and more efficient.",
    tech: ["Python", "Tkinter", "gTTS", "Pygame"],
    github:
      "https://github.com/tanmaynag12/AUGMENTATIVE-AND-ALTERNATIVE-COMMUNICATION-SOFTWARE",
    images: [AACHOME, AACPHRASES, AACLANG],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [slide, setSlide] = useState(0);
  const images = project.images ?? [];

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm md:flex">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-white/10 bg-white/[0.02] md:aspect-auto md:w-2/5 md:border-b-0 md:border-r">
        {images.length > 0 ? (
          <>
            <img
              src={images[slide]}
              alt={`${project.title} screenshot ${slide + 1}`}
              className="h-full w-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSlide((s) => (s - 1 + images.length) % images.length)
                  }
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/80 backdrop-blur-sm transition hover:bg-black/70 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setSlide((s) => (s + 1) % images.length)}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/80 backdrop-blur-sm transition hover:bg-black/70 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Show screenshot ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === slide
                          ? "w-4 bg-white"
                          : "w-1.5 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span className="text-xs uppercase tracking-widest text-white/30"></span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-7 md:p-9">
        <h3 className="text-xl font-semibold text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 md:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-blue-400 transition hover:bg-blue-400/20"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>
        <p className="mt-2 text-sm text-white/50">
          Here are some of the projects I've worked on.
        </p>

        <div className="mt-8 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
