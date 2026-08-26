import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const lastScrollY = useRef(0);

  // Hide/show nav on scroll direction
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let isScrolling = false;

    function handleScroll() {
      isScrolling = true;
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDifference) >= 10) {
        if (scrollDifference > 0) {
          setIsVisible(false);
          setIsMenuOpen(false);
        } else {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = window.setTimeout(() => {
        isScrolling = false;
        scrollTimeout = null;
      }, 300);
    }

    function handleMouseMove(event: MouseEvent) {
      if (!isScrolling && event.clientY < 100) {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);

      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Scroll-spy: highlight active section
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  function handleLinkClick(id: string) {
    setIsMenuOpen(false);
    setActiveSection(id);
  }

  return (
    <div
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center justify-center gap-1.5 rounded-full border border-black/10 bg-[#DCD9CF] p-2 shadow-sm backdrop-blur-md">
        {NAV_LINKS.filter((link) => link.id !== "hero").map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => handleLinkClick(link.id)}
            className={`no-underline rounded-full px-5 py-3 text-base font-medium transition-all duration-300 ${
              activeSection === link.id
                ? "bg-blue-600 text-white shadow-sm"
                : "text-neutral-600 hover:bg-black/5 hover:text-neutral-900"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile nav */}
      <nav className="md:hidden w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-[#DCD9CF] shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <a
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
            className="text-base font-bold text-neutral-900 no-underline"
          >
            Tanmay Nag
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 text-neutral-700 transition hover:bg-black/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 px-4 pb-4">
              {NAV_LINKS.filter((link) => link.id !== "hero").map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`no-underline rounded-full px-4 py-3 text-center text-base font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-blue-600 text-white"
                      : "bg-black/5 text-neutral-600 hover:bg-black/10 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;