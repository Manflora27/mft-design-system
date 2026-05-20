// Projects.jsx — image tiles
function ProjectTile({ size, src, title, blurb, href }) {
  return (
    <article className={`tile tile-${size}`}>
      <div className="tile-img-wrap"><img src={src} alt={title} loading="lazy" /></div>
      <div className="tile-body">
        <h3>{title}</h3>
        <p>{blurb}</p>
        <a className="tile-link" href={href || '#'}>Learn more →</a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" data-section="projects" data-screen-label="06 Projects" className="section-block fade-in">
      <p className="section-label">Projects</p>
      <h2 className="section-title">Work I'm proud of.</h2>
      <div className="tile-grid">
        <ProjectTile size="large"
          src="../../assets/project-arduino-rain.jpg"
          title="Arduino Rain Detection System"
          blurb="A hardware-software integration that detects rainfall and triggers automated responses using Arduino Uno sensors." />
        <ProjectTile size="small"
          src="../../assets/project-data-collection.png"
          title="Data Collection Tool"
          blurb="Automated data gathering and analysis pipeline for structured research workflows." />
      </div>
    </section>
  );
}

window.ProjectTile = ProjectTile;
window.Projects = Projects;
