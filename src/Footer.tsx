function Footer() {
  return (
    <footer
      id="footer"
      className="flex justify-between items-center px-8 py-6 mt-6 border-t border-white/10"
    >
      <p className="text-neutral-400">&copy; 2026 Tanmay Nag</p>
      <div className="flex gap-6">
        <a
          href="https://linkedin.com/in/tanmay-nag"
          className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/tanmaynag12"
          className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
