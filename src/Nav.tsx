import { useState, useEffect, useRef } from "react";

function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

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

  return (
    <div
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* Desktop nav — unchanged */}
      <nav className="hidden md:flex gap-5 items-center justify-center max-w-fit mx-auto px-6 py-3 rounded-full bg-neutral-900/75 backdrop-blur-md border border-white/10">
        <a
          href="#hero"
          className="text-neutral-100 no-underline font-bold text-lg mr-2"
        >
          Tanmay Nag
        </a>
        <a
          href="/Resume.pdf"
          className="text-neutral-100 no-underline px-4 py-2 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg"
        >
          Resume
        </a>
        <a
          href="mailto:nagtanmay01@gmail.com"
          className="text-neutral-100 no-underline px-4 py-2 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg"
        >
          nagtanmay01@gmail.com
        </a>
        <a
          href="tel:+917619613856"
          className="text-neutral-100 no-underline px-4 py-2 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg"
        >
          +91 7619613856
        </a>
        <a
          href="https://linkedin.com/in/tanmay-nag"
          className="text-neutral-100 no-underline px-4 py-2 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/tanmaynag12"
          className="text-neutral-100 no-underline px-4 py-2 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg"
        >
          GitHub
        </a>
      </nav>

      {/* Mobile nav */}
      <nav className="md:hidden w-full max-w-sm rounded-2xl bg-neutral-900/75 backdrop-blur-md border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <a
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
            className="text-neutral-100 no-underline font-bold text-base"
          >
            Tanmay Nag
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-neutral-100"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
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
              <a
                href="/Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-100 no-underline text-center px-4 py-2.5 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
              >
                Resume
              </a>
              <a
                href="mailto:nagtanmay01@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-100 no-underline text-center px-4 py-2.5 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
              >
                nagtanmay01@gmail.com
              </a>
              <a
                href="tel:+917619613856"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-100 no-underline text-center px-4 py-2.5 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
              >
                +91 7619613856
              </a>
              <a
                href="https://linkedin.com/in/tanmay-nag"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-100 no-underline text-center px-4 py-2.5 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tanmaynag12"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-100 no-underline text-center px-4 py-2.5 rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
