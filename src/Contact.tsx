import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("nagtanmay01@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="bg-[#F0EEE6] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-neutral-900">Contact</h2>

            <p className="mt-2 text-sm text-neutral-500">
              Have something to build?
            </p>
          </div>

          <div className="md:flex-1">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-semibold text-neutral-900">
                Let's Talk
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                I build software that solves real problems. If you have an idea,
                a project, or an opportunity worth discussing, feel free to
                reach out.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="rounded-full border border-black/10 bg-black/5 px-5 py-2.5 text-xs font-semibold text-neutral-700 transition hover:bg-black/10 hover:text-neutral-900"
                >
                  {copied ? "Copied!" : "nagtanmay01@gmail.com"}
                </button>

                <a
                  href="https://linkedin.com/in/tanmay-nag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 bg-black/5 px-5 py-2.5 text-xs font-semibold text-neutral-700 no-underline transition hover:bg-black/10 hover:text-neutral-900"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/tanmaynag12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 bg-black/5 px-5 py-2.5 text-xs font-semibold text-neutral-700 no-underline transition hover:bg-black/10 hover:text-neutral-900"
                >
                  GitHub
                </a>

                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-blue-600/30 bg-blue-600/10 px-5 py-2.5 text-xs font-semibold text-blue-600 no-underline transition hover:bg-blue-600/20"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
