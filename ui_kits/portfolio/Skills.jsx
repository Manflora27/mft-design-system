// Skills.jsx — pill list
function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C++'];
  return (
    <section id="skills" data-section="skills" data-screen-label="05 Skills" className="section-block fade-in">
      <p className="section-label">Skills</p>
      <h2 className="section-title">Tools of the trade.</h2>
      <ul className="skills-pills" role="list">
        {skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}

window.Skills = Skills;
