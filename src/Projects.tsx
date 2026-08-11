function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Here are some of the projects I've worked on:</p>
      <article className="project-card">
        <h3>Medicate - AI Healthcare Platform</h3>
        <p>
          Medicate is a healthcare platform designed to bring multiple health
          services together in one place. It uses Generative AI to let users
          interact with a chatbot for general health queries first, before
          deciding whether to consult a doctor, book an appointment, or locate a
          nearby pharmacy.
        </p>
        <p>
          Tech Stack: Flask, MongoDB, Python, Generative AI, Gunicorn, Render
        </p>
        <a href="https://github.com/tanmaynag12/Medicate-Healthcare">GitHub</a>
        <br />
        <a href="https://medicate-healthcare-platform.onrender.com/">
          Live Demo
        </a>
      </article>

      <article className="project-card">
        <h3>JobPortal</h3>
        <p>
          Developed a job portal website to manage the job search and hiring
          process for both seekers and recruiters — making it easier to find and
          apply to relevant roles, and to post and manage listings without the
          usual back-and-forth.
        </p>
        <p>
          Tech Stack: React (Vite), Node.js, Express.js, MongoDB Atlas,
          Cloudinary
        </p>
        <a href="https://github.com/tanmaynag12/JobPortal-Website">GitHub</a>
        <br />
        <a href="https://jobportal-fx7j.onrender.com/">Live Demo</a>
      </article>
      <article className="project-card">
        <h3>Assistive Communication App</h3>
        <p>
          Built an application to help people with speech impairments
          communicate without needing to type full sentences. Users select from
          preset phrases, which are converted to speech instantly, making
          everyday conversation quicker and more efficient.
        </p>
        <p>Tech Stack: Python, Tkinter, gTTS, Pygame</p>
        <a href="https://github.com/tanmaynag12/AUGMENTATIVE-AND-ALTERNATIVE-COMMUNICATION-SOFTWARE">
          GitHub
        </a>
      </article>
    </section>
  );
}

export default Projects;
