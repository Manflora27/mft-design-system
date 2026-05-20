// Nav.jsx — top navigation bar with theme toggle
function Nav({ isDark, onToggleTheme, activeSection, onNav }) {
  const items = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav id="navbar" aria-label="Main navigation">
      <div className="nav-inner">
        <span className="nav-logo">MFT</span>
        <div className="nav-links">
          {items.map(i => (
            <a key={i.id}
               onClick={() => onNav(i.id)}
               style={{ opacity: activeSection === i.id ? 1 : 0.8 }}>{i.label}</a>
          ))}
        </div>
        <button id="theme-btn" aria-label="Toggle dark mode" onClick={onToggleTheme}>
          <img src="../../assets/icon-dark-mode.svg" className="dark-icon" alt="" />
          <img src="../../assets/icon-light-mode.svg" className="light-icon" alt="" />
        </button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
