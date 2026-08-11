import tanmayPhoto from "./assets/Tanmay.jpg";

function Hero() {
  return (
    <div>
      <img src={tanmayPhoto} alt="Tanmay Nag" width="150" />
      <h1>Tanmay Nag</h1>
      <span>Software Engineer</span>
      <p>
        Hello! I'm Tanmay, an Artificial Intelligence and Data Science Graduate.
        I enjoy turning ideas into full working applications.
      </p>
    </div>
  );
}

export default Hero;
