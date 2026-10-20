import { useState, useRef, useEffect } from 'react';
import InnerPage from './InnerPage.jsx';
import MarketplacePages from './MarketplacePages.jsx';
import ThemeToggle from './ThemeToggle.jsx';
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
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        Digital solutions for businesses ready to grow.
        <a href="/contact">Let's talk <ArrowRight size={13} /></a>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <ThemeToggle />
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

        <section className="marketplace-teaser-section section" id="marketplace-seller-support">
          <div className="container marketplace-teaser">
            <div className="marketplace-teaser-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> MARKETPLACE SELLER SUPPORT</div>
              <h2>Ready to sell online?<br /><span className="orange-text">Start with a clear plan.</span></h2>
              <p>Get practical help preparing for Amazon, Flipkart and Meesho seller onboarding, product catalogues and launch tasks. Approval remains with each marketplace.</p>
              <a className="button button-primary" href="/marketplace-seller-services">Explore seller services <ArrowRight size={17} /></a>
            </div>
            <div className="marketplace-teaser-platforms">
              <a href="/amazon-seller-services"><span>01</span><strong>Amazon seller support</strong><ArrowUpRight size={18}/></a>
              <a href="/flipkart-seller-services"><span>02</span><strong>Flipkart seller support</strong><ArrowUpRight size={18}/></a>
              <a href="/meesho-seller-services"><span>03</span><strong>Meesho seller support</strong><ArrowUpRight size={18}/></a>
              <a href="/blog"><span>04</span><strong>Seller guides & insights</strong><ArrowUpRight size={18}/></a>
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
    </>
  );
}

function App({ initialPath } = {}) {
  const currentPath = initialPath ??
    (typeof window !== 'undefined' ? window.location.pathname : '/');
  const path = currentPath.replace(/\/+$/, '') || '/';

  const marketplacePaths = ['/marketplace-seller-services', '/amazon-seller-services', '/flipkart-seller-services', '/meesho-seller-services', '/blog', '/blog/marketplace-seller-registration-checklist-india', '/blog/product-listing-readiness-checklist'];
  if (marketplacePaths.includes(path)) return <MarketplacePages path={path} />;
  return path === '/' ? <HomePage /> : <InnerPage path={path} />;
}

export default App;
