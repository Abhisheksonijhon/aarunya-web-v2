import { useState } from 'react';
import InnerPage from './InnerPage.jsx';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X,
  Code2, Smartphone, Palette, Megaphone, BrainCircuit,
  Workflow, ReceiptText, Users, Calculator, CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Web Development',
    description: 'Fast, responsive websites and web applications built around your business goals.'
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Mobile Applications',
    description: 'Intuitive mobile experiences that help customers connect with your business.'
  },
  {
    icon: BrainCircuit,
    number: '03',
    title: 'AI & Automation',
    description: 'Practical AI assistants, automated workflows and smarter business operations.'
  },
  {
    icon: Workflow,
    number: '04',
    title: 'Custom Software',
    description: 'Business tools, dashboards, CRM and ERP solutions designed for real workflows.'
  },
  {
    icon: Palette,
    number: '05',
    title: 'UI/UX Design',
    description: 'Clear, consistent digital experiences that make complex products easier to use.'
  },
  {
    icon: Megaphone,
    number: '06',
    title: 'Digital Growth',
    description: 'SEO, social media and digital campaigns to improve visibility and reach.'
  }
];

const products = [
  {
    tag: 'BUSINESS MANAGEMENT',
    name: 'BillZen',
    icon: ReceiptText,
    description: 'Billing, inventory and business management designed for everyday business operations.',
    link: '/products/billzen',
    className: 'product-orange'
  },
  {
    tag: 'LEAD GENERATION',
    name: 'Omni Lead',
    icon: Users,
    description: 'A developing platform concept for business discovery, lead generation and opportunities.',
    link: '/products/omni-lead',
    className: 'product-blue'
  },
  {
    tag: 'FINANCE & TAX TECHNOLOGY',
    name: 'ArthaZen',
    icon: Calculator,
    description: 'An evolving concept exploring AI-assisted financial workflows and tax technology.',
    link: '/products/arthazen',
    className: 'product-dark'
  }
];

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Aarunya Web Solutions home">
      <span className="brand-mark">A<span>.</span></span>
      <span className="brand-copy">
        <strong>AARUNYA</strong>
        <small>WEB SOLUTIONS</small>
      </span>
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        Digital solutions for businesses ready to grow.
        <a href="/contact">Let's talk <ArrowRight size={13} /></a>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            <a href="/services" onClick={closeMenu}>Services</a>
            <a href="/products" onClick={closeMenu}>Our Products</a>
            <a href="/about" onClick={closeMenu}>About</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="/contact" onClick={closeMenu}>
              Start a project <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                YOUR DIGITAL GROWTH PARTNER
              </div>
              <h1>
                Ideas into
                <br />
                <span className="gradient-text">digital impact.</span>
              </h1>
              <p className="hero-description">
                We build websites, business software and AI-powered solutions
                that help ambitious businesses work smarter and grow stronger.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="/contact">
                  Build something great <ArrowRight size={18} />
                </a>
                <a className="text-link" href="/services">
                  Explore our services <ArrowDownRight size={17} />
                </a>
              </div>
              <div className="hero-trust">
                <span className="trust-icon"><CheckCircle2 size={17} /></span>
                <span>Built around your goals. Designed for your growth.</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Abstract digital technology illustration">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-orbit orbit-three" />
              <div className="art-center">
                <span className="art-a">A<span>.</span></span>
                <span className="art-label">THINK. BUILD. GROW.</span>
              </div>
              <div className="float-card float-top">
                <span className="float-icon orange-icon"><Code2 size={19} /></span>
                <span><strong>Digital experiences</strong><small>Made for people</small></span>
              </div>
              <div className="float-card float-bottom">
                <span className="float-icon blue-icon"><BrainCircuit size={20} /></span>
                <span><strong>Smarter systems</strong><small>Powered by technology</small></span>
              </div>
              <div className="art-spark spark-one">✳</div>
              <div className="art-spark spark-two">✦</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>WEB & SOFTWARE</span><i />
            <span>AI & AUTOMATION</span><i />
            <span>DIGITAL GROWTH</span>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div>
                <h2>Technology that<br />moves you <span className="orange-text">forward.</span></h2>
              </div>
              <p>From your first website to smarter business systems, we help turn digital challenges into practical opportunities.</p>
            </div>

            <div className="services-grid">
              {services.map(({ icon: Icon, number, title, description }) => (
                <article className="service-card" key={number}>
                  <div className="service-top">
                    <span className="service-icon"><Icon size={23} /></span>
                    <span className="service-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="/contact" className="card-arrow" aria-label={`Enquire about ${title}`}>
                    <ArrowUpRight size={19} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products-section section" id="products">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> BUILT BY AARUNYA</div>
                <h2>Our ideas.<br /><span className="orange-text">Your next advantage.</span></h2>
              </div>
              <p>We are developing digital products to simplify business operations and explore new ways technology can create value.</p>
            </div>
            <div className="products-grid">
              {products.map(({ tag, name, icon: Icon, description, link, className }) => (
                <article className={`product-card ${className}`} key={name}>
                  <div className="product-card-top">
                    <span className="product-icon"><Icon size={25} /></span>
                    <span className="product-tag">{tag}</span>
                  </div>
                  <h3>{name}<span className="product-period">.</span></h3>
                  <p>{description}</p>
                  <a href={link} target={link.startsWith('http') ? '_blank' : undefined}
                     rel={link.startsWith('http') ? 'noreferrer' : undefined}>
                    Explore product <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
            <p className="product-note">Product features and availability may vary during development.</p>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-layout">
            <div className="about-visual">
              <div className="about-shape shape-one" />
              <div className="about-shape shape-two" />
              <div className="about-visual-content">
                <span className="about-monogram">A<span>.</span></span>
                <span className="about-visual-caption">THOUGHTFUL TECHNOLOGY.<br />MEANINGFUL RESULTS.</span>
              </div>
              <span className="about-badge">DESIGNED FOR GROWTH ↗</span>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> WHO WE ARE</div>
              <h2>Good technology<br />starts with <span className="orange-text">understanding.</span></h2>
              <p>
                Aarunya Web Solutions is a digital solutions business focused on
                building useful, accessible and thoughtful technology for modern businesses.
              </p>
              <p>
                We combine development, design and automation to solve practical
                problems—not add unnecessary complexity.
              </p>
              <div className="about-points">
                <div><CheckCircle2 size={18} /><span>Solutions shaped around your needs</span></div>
                <div><CheckCircle2 size={18} /><span>Clear communication and practical execution</span></div>
                <div><CheckCircle2 size={18} /><span>Technology designed to evolve with you</span></div>
              </div>
              <a href="/contact" className="button button-dark">Let's work together <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container contact-panel">
            <div className="contact-glow" />
            <div className="contact-content">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> HAVE A PROJECT IN MIND?</div>
              <h2>Let's turn your<br />next idea into <span>reality.</span></h2>
              <p>Tell us what you're working on. Let's explore the right digital solution for your business.</p>
              <a className="button button-white" href="mailto:info@aarunyawebsolutions.com?subject=Project%20Enquiry">
                Discuss your project <ArrowRight size={18} />
              </a>
            </div>
            <div className="contact-details">
              <div><span className="contact-label">EMAIL US</span><a href="mailto:info@aarunyawebsolutions.com">info@aarunyawebsolutions.com</a></div>
              <div><span className="contact-label">CALL US</span><a href="tel:+918770607203">+91 8770607203</a></div>
              <div><span className="contact-label">LOCATION</span><span>Panna, Madhya Pradesh, India</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Brand />
            <p>Building digital experiences and smarter business solutions.</p>
          </div>
          <div className="footer-links">
            <span>EXPLORE</span>
            <a href="/services">Services</a>
            <a href="/products">Our products</a>
            <a href="/about">About us</a>
          </div>
          <div className="footer-links">
            <span>GET IN TOUCH</span>
            <a href="mailto:info@aarunyawebsolutions.com">Email us</a>
            <a href="tel:+918770607203">Call us</a>
            <a href="/contact">Start a project</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Aarunya Web Solutions. All rights reserved.</span>
          <span>Built with purpose. Powered by ideas.</span>
        </div>
      </footer>
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/' ? <HomePage /> : <InnerPage path={path} />;
}

export default App;
