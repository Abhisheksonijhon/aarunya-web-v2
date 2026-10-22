import { useState, useRef, useEffect } from 'react';
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
    title: 'Website Development',
    description: 'Business websites, landing pages and web applications with responsive layouts, clear calls to action and SEO-ready foundations.'
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Mobile App Development',
    description: 'Customer-facing and internal mobile experiences planned around user needs, essential features and a realistic MVP scope.'
  },
  {
    icon: Palette,
    number: '03',
    title: 'UI/UX Design',
    description: 'User flows, wireframes and consistent interface systems that make digital products easier to understand and use.'
  },
  {
    icon: Megaphone,
    number: '04',
    title: 'Digital Marketing & SEO',
    description: 'Technical and on-page SEO, local search visibility, social media content and focused digital campaigns.'
  },
  {
    icon: Workflow,
    number: '05',
    title: 'E-commerce Solutions',
    description: 'Online storefronts and shopping workflows covering product discovery, orders, inventory and payment integration.'
  },
  {
    icon: Users,
    number: '06',
    title: 'CRM & Business Dashboards',
    description: 'Customer management, reporting dashboards and workflow tools to organise information and support better decisions.'
  },
  {
    icon: BrainCircuit,
    number: '07',
    title: 'AI & Automation',
    description: 'Practical AI assistants and repeatable workflow automation, with attention to privacy, cost and human review.'
  },
  {
    icon: ReceiptText,
    number: '08',
    title: 'Custom Business Software',
    description: 'Purpose-built tools for operational workflows, integrations and business processes that off-the-shelf software cannot fit.'
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

function Hero3D() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const art = stage?.parentElement;
    if (!stage || !art) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (reduceMotion || coarsePointer) return;

    const onMove = (e) => {
      const rect = art.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.transform = `rotateY(${(px * 16).toFixed(2)}deg) rotateX(${(py * -12).toFixed(2)}deg)`;
    };
    const onLeave = () => { stage.style.transform = ''; };

    art.addEventListener('pointermove', onMove);
    art.addEventListener('pointerleave', onLeave);
    return () => {
      art.removeEventListener('pointermove', onMove);
      art.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="hero-art" aria-label="Abstract 3D technology illustration">
      <div className="hero-stage" ref={stageRef}>
        <div className="hero-scene">
          <div className="scene-ring" />
          <div className="scene-ring scene-ring-two" />
          <div className="art-center scene-core">
            <img src="/logo-icon.png" alt="" className="art-logo" />
            <span className="art-label">THINK. BUILD. GROW.</span>
          </div>
          <div className="float-card scene-node node-one">
            <span className="float-icon orange-icon"><Code2 size={18} /></span>
            <span><strong>Web & Software</strong><small>Built to perform</small></span>
          </div>
          <div className="float-card scene-node node-two">
            <span className="float-icon blue-icon"><BrainCircuit size={18} /></span>
            <span><strong>AI & Automation</strong><small>Smarter workflows</small></span>
          </div>
          <div className="float-card scene-node node-three">
            <span className="float-icon dark-icon"><Megaphone size={16} /></span>
            <span><strong>Digital Growth</strong><small>Built to scale</small></span>
          </div>
          <div className="scene-dot dot-one" />
          <div className="scene-dot dot-two" />
          <div className="scene-dot dot-three" />
        </div>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Aarunya Web Solutions home">
      <img className="brand-mark" src="/logo-icon.png" alt="" width="39" height="39" />
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
    <div className="homepage-shell">
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
            aria-controls="home-primary-navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav id="home-primary-navigation" className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            <a href="/services" onClick={closeMenu}>Services</a>
            <a href="/products" onClick={closeMenu}>Our Products</a>
            <a href="/work" onClick={closeMenu}>Work</a>
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
                Based in Panna, Madhya Pradesh, we build websites, business software and practical AI-powered solutions for businesses in India and remote projects internationally.
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

            <Hero3D />
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

        <section className="intro-band section" id="studio">
          <div className="container intro-band-inner">
            <p className="intro-kicker">AARUNYA WEB SOLUTIONS · DIGITAL STUDIO</p>
            <h2>One team for the way your business <span className="orange-text">works, looks and grows.</span></h2>
            <p className="intro-summary">We connect strategy, design and technology to build useful digital experiences—from your first website to the systems that help your business run better.</p>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK & PRODUCTS</div>
                <h2>Ideas made <span className="orange-text">useful.</span></h2>
              </div>
              <div className="work-heading-side">
                <p>A closer look at digital products, websites and platforms we are building.</p>
                <a className="text-link" href="/work">Explore work <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <div className="work-rail" aria-label="Selected projects">
              <article className="work-card work-card-featured">
                <div className="work-art work-art-billzen">
                  <span className="work-art-label">BUSINESS SOFTWARE / SAAS</span>
                  <div className="mock-dashboard">
                    <div className="mock-sidebar"><b>B.</b><i /><i /><i /><i /></div>
                    <div className="mock-main"><span className="mock-line mock-line-short" /><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart"><b /><b /><b /><b /><b /><b /><b /></div></div>
                  </div>
                  <span className="work-orbit" />
                </div>
                <div className="work-card-copy"><span className="work-category">SaaS · Billing & inventory</span><h3>BillZen</h3><p>A simpler way for small businesses to manage billing, stock and everyday operations.</p><a href="/products/billzen">Explore BillZen <ArrowUpRight size={16} /></a></div>
              </article>
              <article className="work-card">
                <div className="work-art work-art-education">
                  <span className="work-art-label">EDUCATION / WEB</span>
                  <div className="mock-browser"><div className="mock-browser-top"><i /><i /><i /></div><div className="mock-school-hero"><b>Learning<br/>for tomorrow.</b><span /></div><div className="mock-school-cards"><i /><i /><i /></div></div>
                </div>
                <div className="work-card-copy"><span className="work-category">Education · Website experience</span><h3>School Website Refresh</h3><p>A clearer digital experience for school information, academics, activities and admissions.</p><a href="/work">View project approach <ArrowUpRight size={16} /></a></div>
              </article>
              <article className="work-card">
                <div className="work-art work-art-omni">
                  <span className="work-art-label">DISCOVERY / LEAD GENERATION</span>
                  <div className="omni-orbit"><span>O</span><i /><i /><i /><i /></div>
                  <div className="omni-chip omni-chip-one">Find opportunities</div><div className="omni-chip omni-chip-two">Organise leads</div>
                </div>
                <div className="work-card-copy"><span className="work-category">Platform concept</span><h3>Omni Lead</h3><p>A developing platform concept for business discovery, lead generation and opportunity workflows.</p><a href="/products/omni-lead">Explore Omni Lead <ArrowUpRight size={16} /></a></div>
              </article>
              <article className="work-card">
                <div className="work-art work-art-arthazen">
                  <span className="work-art-label">FINANCE / AI CONCEPT</span>
                  <div className="artha-symbol">A<span>z</span></div><div className="artha-lines"><i /><i /><i /></div>
                </div>
                <div className="work-card-copy"><span className="work-category">Product concept</span><h3>ArthaZen</h3><p>An evolving concept for AI-assisted tax, finance and business compliance workflows.</p><a href="/products/arthazen">Explore ArthaZen <ArrowUpRight size={16} /></a></div>
              </article>
            </div>
            <div className="work-rail-note"><span>01 — 04</span><span>Scroll or swipe to explore projects <ArrowRight size={14} /></span></div>
          </div>
        </section>

        <section className="industries-section section" id="industries">
          <div className="container industries-inner">
            <div className="industries-intro"><div className="eyebrow"><span className="eyebrow-line" /> INDUSTRIES & USE CASES</div><h2>Different industries.<br/><span className="orange-text">Purpose-built solutions.</span></h2></div>
            <div className="industry-list">
              <span>Education & schools</span><span>Retail & trading</span><span>Professional services</span><span>Hospitality</span><span>Startups & SaaS</span><span>Local businesses</span><span>Operations & teams</span><span>Growing brands</span>
            </div>
          </div>
        </section>

        <section className="case-section section" id="case-studies">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> HOW WE SOLVE PROBLEMS</div><h2>Clear thinking.<br/><span className="orange-text">Useful outcomes.</span></h2></div>
              <p>Good digital work starts with the problem, not a preset template. Here is how we frame selected work.</p>
            </div>
            <div className="case-grid">
              <article className="case-card"><span className="case-number">01 / PRODUCT</span><h3>Making everyday billing easier</h3><div className="case-row"><span>Challenge</span><p>Small businesses need a more organised way to handle billing, inventory and daily records.</p></div><div className="case-row"><span>Approach</span><p>Bring core workflows into one focused product experience with clear navigation and practical tools.</p></div><div className="case-row"><span>Direction</span><p>BillZen continues to evolve around usability, reliability and business needs.</p></div><a href="/products/billzen">Explore BillZen <ArrowUpRight size={16}/></a></article>
              <article className="case-card"><span className="case-number">02 / EDUCATION</span><h3>Making school information easier to find</h3><div className="case-row"><span>Challenge</span><p>Families need a clear way to navigate academics, campus life, facilities and admissions information.</p></div><div className="case-row"><span>Approach</span><p>Organise content into a consistent page system with responsive layouts and clearer navigation.</p></div><div className="case-row"><span>Direction</span><p>A more cohesive website foundation designed for mobile visitors and ongoing updates.</p></div><a href="/work">Explore our work <ArrowUpRight size={16}/></a></article>
            </div>
          </div>
        </section>

        <section className="process-section section" id="approach">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> HOW WE WORK</div>
                <h2>From first conversation<br />to <span className="orange-text">useful delivery.</span></h2>
              </div>
              <p>A clear, collaborative process keeps the work focused on the business problem—not just the technology.</p>
            </div>
            <div className="process-grid">
              <article className="process-card">
                <span>01</span>
                <h3>Understand the goal</h3>
                <p>We discuss your business, users, priorities and constraints before recommending a solution.</p>
              </article>
              <article className="process-card">
                <span>02</span>
                <h3>Define the right scope</h3>
                <p>We organise requirements into practical deliverables, identify dependencies and prioritise what matters first.</p>
              </article>
              <article className="process-card">
                <span>03</span>
                <h3>Build and improve</h3>
                <p>We develop in focused stages, review the outcome with you and refine the work using feedback.</p>
              </article>
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
              <p>BillZen is our flagship business software product. We are also developing new concepts for business discovery and AI-assisted financial workflows.</p>
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
                Aarunya Web Solutions is a founder-led technology business based in Panna, Madhya Pradesh, India. We build websites, software and digital solutions around practical business needs.
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

        <section className="faq-section section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line" /> GOOD QUESTIONS</div><h2>Before we <span className="orange-text">get building.</span></h2><p>A few useful answers about working with Aarunya Web Solutions.</p><a className="text-link" href="/contact">Have another question? Let's talk <ArrowUpRight size={16}/></a></div>
            <div className="faq-list">
              <details open><summary>What can Aarunya help my business build?<span>+</span></summary><p>We work across website development, mobile apps, UI/UX, e-commerce, custom software, CRM-style tools, SEO and practical AI automation.</p></details>
              <details><summary>Can you improve an existing website?<span>+</span></summary><p>Yes. We can review the current structure, user experience, mobile behaviour, performance and search foundations before recommending improvements.</p></details>
              <details><summary>Do you work with businesses outside Madhya Pradesh?<span>+</span></summary><p>Yes. Aarunya is based in Panna, Madhya Pradesh, and can collaborate remotely with businesses in other parts of India and internationally.</p></details>
              <details><summary>How does a project usually begin?<span>+</span></summary><p>We start by understanding your goals, audience, timeline and constraints, then agree on a practical scope and next steps.</p></details>
              <details><summary>Can you maintain or improve the solution after launch?<span>+</span></summary><p>Support and ongoing improvements can be discussed based on the project scope and the type of solution being delivered.</p></details>
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
          <a href="/work">Portfolio</a>
            <a href="/about">About us</a>
            <a href="/website-development-panna">Website Development in Panna</a>
          </div>
          <div className="footer-links">
            <span>POLICIES</span>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
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
    </div>
  );
}

function App({ initialPath } = {}) {
  const currentPath = initialPath ??
    (typeof window !== 'undefined' ? window.location.pathname : '/');
  const path = currentPath.replace(/\/+$/, '') || '/';

  return path === '/' ? <HomePage /> : <InnerPage path={path} />;
}

export default App;
