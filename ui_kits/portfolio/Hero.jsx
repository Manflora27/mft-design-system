// Hero.jsx — full-viewport intro section
function Hero({ onPrimary, onSecondary }) {
  return (
    <section id="hero" data-section="hero" data-screen-label="01 Hero">
      <p className="hero-eyebrow">AI Developer &amp; Software Engineer</p>
      <h1>Hi, I'm Manel.</h1>
      <p className="hero-sub">Designer of systems.<br />Solver of problems.</p>
      <div className="hero-ctas">
        <a className="btn-primary" onClick={onPrimary}>View work →</a>
        <a className="btn-ghost"   onClick={onSecondary}>About me →</a>
      </div>
      <div className="hero-photo-wrap">
        <div className="profile-photo">
          <img src="../../assets/Manel.jpg" className="main-img" alt="Manel F. Terrible" />
          <img src="../../assets/hover.jpg" className="hover-jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
