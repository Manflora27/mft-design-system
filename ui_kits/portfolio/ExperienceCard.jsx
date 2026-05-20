// ExperienceCard.jsx — single glassmorphic work-history card
function ExperienceCard({ period, location, role, company, bullets }) {
  return (
    <article className="exp-card">
      <div className="exp-meta">
        <span className="exp-period">{period}</span>
        <span className="exp-dot">·</span>
        <span className="exp-location">{location}</span>
      </div>
      <h3 className="exp-role">{role}</h3>
      <p className="exp-company">{company}</p>
      {bullets && bullets.length > 0 && (
        <ul className="exp-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </article>
  );
}

function Experience() {
  const jobs = [
    {
      period: 'Jan 2031 – Present', location: 'Ang Mo Kio City, Singapore',
      role: 'Software Engineer', company: 'Apple',
      bullets: ['Optimized System Performance', 'Developed Cross-Platform Features', 'Engineered Scalable Solutions'],
    },
    {
      period: 'Jun 2029 – Dec 2030', location: 'Singapore',
      role: 'Software Engineer', company: 'Xiaomi',
      bullets: ['Enhanced UI Experience', 'Automated Testing Tools'],
    },
  ];
  return (
    <section id="experience" data-section="experience" data-screen-label="03 Experience" className="section-block fade-in">
      <p className="section-label">Experience</p>
      <h2 className="section-title">Where I've worked.</h2>
      <div className="exp-list">
        {jobs.map((j, i) => <ExperienceCard key={i} {...j} />)}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" data-section="education" data-screen-label="04 Education" className="section-block fade-in">
      <p className="section-label">Education</p>
      <h2 className="section-title">Academic background.</h2>
      <article className="exp-card">
        <div className="exp-meta">
          <span className="exp-period">2025</span>
          <span className="exp-dot">·</span>
          <span className="exp-location">Cabanatuan City, Philippines</span>
        </div>
        <h3 className="exp-role">B.S. Information Technology</h3>
        <p className="exp-company">Wesleyan University Philippines</p>
        <span className="edu-badge">Best Student</span>
      </article>
    </section>
  );
}

window.ExperienceCard = ExperienceCard;
window.Experience = Experience;
window.Education = Education;
