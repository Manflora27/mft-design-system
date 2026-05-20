// App.jsx — wires the whole portfolio together with interactive niceties:
//   · dark / light toggle
//   · per-section color-mood gradient (CSS stand-in for the Three.js torus knot)
//   · scroll fade-in via IntersectionObserver
//   · mute / unmute audio button
//   · success toast on form submit

const SECTION_MOODS = {
  hero:       { c1: '#0a24e0', c2: '#660fe5' },
  about:      { c1: '#400a9e', c2: '#0f1a85' },
  experience: { c1: '#008594', c2: '#0a40c7' },
  education:  { c1: '#b86605', c2: '#851a52' },
  skills:     { c1: '#0a9e52', c2: '#005cb3' },
  projects:   { c1: '#c7420a', c2: '#9e0a66' },
  contact:    { c1: '#0a24e0', c2: '#660fe5' },
};

function App() {
  const [isDark, setIsDark] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [muted, setMuted] = React.useState(true);
  const [toast, setToast] = React.useState(null);
  const audioRef = React.useRef(null);

  // body theme class
  React.useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  // Track which section is in view via IntersectionObserver
  React.useEffect(() => {
    const ids = Object.keys(SECTION_MOODS);
    const els = ids.map(id => document.querySelector(`[data-section="${id}"]`)).filter(Boolean);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.dataset.section;
          setActiveSection(id);
          const mood = SECTION_MOODS[id];
          if (mood) {
            document.documentElement.style.setProperty('--mood-c1', mood.c1);
            document.documentElement.style.setProperty('--mood-c2', mood.c2);
          }
        }
      });
    }, { threshold: 0.3, rootMargin: '-20% 0px -40% 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Fade-in observer
  React.useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Subtle mouse-driven mood movement
  React.useEffect(() => {
    const onMove = e => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mx', x + '%');
      document.documentElement.style.setProperty('--my', y + '%');
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  function navTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function toggleMute() {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.muted = false;
      a.play().catch(() => {});
      setMuted(false);
    } else {
      a.muted = true;
      setMuted(true);
    }
  }

  function handleSent({ ok, msg }) {
    setToast({ ok, msg });
    setTimeout(() => setToast(null), 3200);
  }

  return (
    <React.Fragment>
      <div id="mood-bg"></div>

      <Nav isDark={isDark} onToggleTheme={() => setIsDark(d => !d)}
           activeSection={activeSection} onNav={navTo} />

      <main>
        <Hero onPrimary={() => navTo('projects')} onSecondary={() => navTo('about')} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact onSent={handleSent} />
      </main>

      <SiteFooter />

      <audio ref={audioRef} src="../../assets/Arc.mp3" loop preload="auto" muted />
      <button id="muteBtn" aria-label="Toggle background music" onClick={toggleMute}>
        {muted ? '🔇' : '🔊'}
      </button>

      <div id="toast" className={toast ? 'show' : ''}>{toast && toast.msg}</div>
    </React.Fragment>
  );
}

window.App = App;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
