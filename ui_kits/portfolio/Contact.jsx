// Contact.jsx — form + socials column
function ContactForm({ onSent }) {
  const [name,    setName]    = React.useState('');
  const [email,   setEmail]   = React.useState('');
  const [message, setMessage] = React.useState('');

  function submit(e) {
    e.preventDefault();
    if (!email.trim()) return onSent({ ok: false, msg: 'Please enter your email address.' });
    onSent({ ok: true, msg: 'Your message has been sent successfully!' });
    setName(''); setEmail(''); setMessage('');
  }

  return (
    <form className="contact-form" noValidate onSubmit={submit}>
      <div className="field-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your name" value={name}
               onChange={e => setName(e.target.value)} />
      </div>
      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="your@email.com" value={email}
               onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="field-group">
        <label htmlFor="TextArea">Message</label>
        <textarea id="TextArea" placeholder="What's on your mind?" value={message}
                  onChange={e => setMessage(e.target.value)} />
      </div>
      <button type="submit">Send message →</button>
    </form>
  );
}

function SocialColumn() {
  const links = [
    { src: '../../assets/Facebook.png',  href: 'https://www.facebook.com/blasterrsss',  label: 'Facebook profile'  },
    { src: '../../assets/Github.png',    href: 'https://github.com/Manflora27',          label: 'GitHub profile'   },
    { src: '../../assets/Instagram.png', href: 'https://www.instagram.com/blasterrsss/', label: 'Instagram profile' },
  ];
  return (
    <div className="social-col">
      <p className="social-heading">Find me on</p>
      <div className="social-links">
        {links.map(l => (
          <a key={l.label} href={l.href} aria-label={l.label} target="_blank" rel="noopener">
            <img className="Socials" src={l.src} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}

function Contact({ onSent }) {
  return (
    <section id="contact" data-section="contact" data-screen-label="07 Contact" className="section-block fade-in">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's connect.</h2>
      <div className="contact-grid">
        <ContactForm onSent={onSent} />
        <SocialColumn />
      </div>
    </section>
  );
}

window.ContactForm  = ContactForm;
window.SocialColumn = SocialColumn;
window.Contact      = Contact;
