import tanmay from "./assets/Tanmay.jpg";

function Hero() {
  return (
    <header id="hero" className="px-6 pt-28 md:px-10 md:pt-32">
      <div className="hero-content mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-9">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <img
            src={tanmay}
            alt="Tanmay Nag"
            width="150"
            className="h-32 w-32 shrink-0 rounded-xl border border-white/10 object-cover sm:h-36 sm:w-36"
          />

          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">
              Tanmay Nag
            </h1>
            <span className="mt-1.5 block text-base font-medium text-white/50">
              Software Engineer
            </span>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Hello! I'm Tanmay, an Artificial Intelligence and Data Science
              Graduate. I enjoy turning ideas into full working applications.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
