type Certification = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
};

const certifications: Certification[] = [
  {
    title: "React Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    url: "https://www.linkedin.com/learning/certificates/be683fa7de72e32dc2a6076639fdd70ae01fb98e28291ed04e1886432990b7c8?trk=share_certificate",
  },
  {
    title: "TypeScript for JavaScript Developers",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    url: "https://www.linkedin.com/learning/certificates/fb758ab083f45956116ae52264a0a6d249c2a99753c4d0ecb98e472a8594b391?trk=share_certificate",
  },
  {
    title: "JavaScript Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    url: "https://www.linkedin.com/learning/certificates/7ad352d55a149bbefcbe9948baf7011260ec3ffec6b538bd7e8129b76fb40214?trk=share_certificate",
  },
  {
    title: "Learning Functional Programming with JavaScript ES6+",
    issuer: "LinkedIn Learning",
    date: "Aug 2026",
    url: "https://www.linkedin.com/learning/certificates/2afc7d37c474cf9baa0d9061dbea18a40d3c14783657317010825937e2b22ebc?trk=share_certificate",
  },
  {
    title: "Learning REST APIs",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    url: "https://www.linkedin.com/learning/certificates/d26229d06f47e2d5e4aa5c20725ffcdbe9b490216227ca96cee7401fe38d6380?trk=share_certificate",
  },
  {
    title: "Database Design Fundamentals",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    url: "https://www.linkedin.com/learning/certificates/6bae3e6e7507a05d7a72fc5d496e711c9433fba366f6f2af724cc5b97a0a4c16?trk=share_certificate",
  },
  {
    title: "HTML Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    url: "https://www.linkedin.com/learning/certificates/1c889ba7fc4e6422eda6746d040dffba694866bfb8ca2c9f838592efee5b0c0e?trk=share_certificate",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="bg-[#E8E5DB] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-48 md:shrink-0">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Certifications
            </h2>

            <p className="mt-2 text-base text-neutral-500">
              Courses I've completed.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:flex-1">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="flex flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                  {cert.title}
                </h3>

                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {cert.date} · {cert.issuer}
                </p>

                {cert.url && (
                  <div className="mt-auto pt-4">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600 transition hover:bg-blue-600/20"
                    >
                      View certificate
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
