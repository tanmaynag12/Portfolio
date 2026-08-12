import { useState } from "react";
import cmritPhoto from "./assets/CMRIT.jpg";
import narayanaPhoto from "./assets/Narayana.jpg";
import baldwinPhoto from "./assets/baldwin_boys.jpg";

type EducationEntry = {
  years: string;
  degree: string;
  institution: string;
  image: string;
  alt: string;
};

const education: EducationEntry[] = [
  {
    years: "2022 – 2026",
    degree: "B.E. in Artificial Intelligence and Data Science",
    institution: "CMR Institute of Technology, Bengaluru",
    image: cmritPhoto,
    alt: "CMR Institute of Technology",
  },
  {
    years: "2020 – 2022",
    degree: "Pre-University (Science)",
    institution: "Narayana PU College, Bengaluru",
    image: narayanaPhoto,
    alt: "Narayana PU College",
  },
  {
    years: "2008 – 2020",
    degree: "High School",
    institution: "Baldwin Boys High School, Bengaluru",
    image: baldwinPhoto,
    alt: "Baldwin Boys High School",
  },
];

function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="education" className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-white">Education</h2>

        <ol className="relative mt-8 border-l border-white/10 pl-6">
          {education.map((entry, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={entry.degree} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-white" />

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="block w-full text-left"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    {entry.years}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {entry.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/60">
                    {entry.institution}
                  </p>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl">
                    <img src={entry.image} alt={entry.alt} width="300"></img>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Education;
