import cmritPhoto from "./assets/CMRIT.jpg";
import narayanaPhoto from "./assets/Narayana.jpg";
import baldwinPhoto from "./assets/baldwin_boys.jpg";

function Education() {
    return (
<section id="education">
    <h2>Education</h2>

    <article>
        <h3>B.E. in Artificial Intelligence and Data Science</h3>
        <p>CMR Institute of Technology, Bengaluru</p>
        <span>2022–2026</span>
        <img src={cmritPhoto} alt="CMR Institute of Technology" width="300" />
    </article>
    <article>
        <h3>Pre-University (Science)</h3>
        <p>Narayana PU College, Bengaluru</p>
        <span>2020–2022</span>
        <img src={narayanaPhoto} alt="Narayana PU College" width="300" />
    </article>
    <article>
        <h3>High School</h3>
        <p>Baldwin Boys High School, Bengaluru</p>
        <span>2008–2020</span>
        <img src={baldwinPhoto} alt="Baldwin Boys High School" width="300" />
    </article>
</section>
    );
}   

export default Education;