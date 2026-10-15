import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Code2, Smartphone,
  BrainCircuit, Workflow, Palette, Megaphone, ReceiptText,
  Users, Calculator, Menu, X, MessageCircle
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    icon: Code2,
    description: 'Responsive business websites, landing pages and web applications.',
    points: ['Business websites and conversion-focused landing pages', 'Web applications and custom dashboards', 'Lead capture and enquiry workflows', 'Responsive design, technical SEO and performance foundations']
  },
  {
    title: 'Mobile Applications',
    slug: 'mobile-apps',
    icon: Smartphone,
    description: 'Focused mobile experiences designed around customer and team needs.',
    points: ['MVP planning and feature prioritisation', 'Customer and team mobile experiences', 'Backend, API and authentication integration', 'Device testing and release-readiness planning']
  },
  {
    title: 'AI & Automation',
    slug: 'ai-automation',
    icon: BrainCircuit,
    description: 'Practical AI assistants and automated workflows with sensible human oversight.',
    points: ['AI assistants for business information and tasks', 'Workflow automation and repetitive-task reduction', 'LLM, API and existing-tool integration', 'Human review, privacy and usage-cost controls']
  },
  {
    title: 'Custom Software',
    slug: 'custom-software',
    icon: Workflow,
    description: 'CRM, ERP, dashboards and business tools for real operational workflows.',
    points: ['Business process analysis and requirements', 'Custom CRM, ERP and operational modules', 'Reports, dashboards and system integrations', 'Phased delivery with testing and documentation']
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: Palette,
    description: 'Clear interfaces and consistent design systems for digital products.',
    points: ['Information architecture and user journeys', 'Wireframes, prototypes and interaction design', 'Reusable responsive design systems', 'Accessibility and usability improvements']
  },
  {
    title: 'Digital Growth',
    slug: 'digital-marketing',
    icon: Megaphone,
    description: 'SEO, local visibility, useful content and focused digital campaigns.',
    points: ['Technical SEO and on-page optimisation', 'Local SEO and Google Business Profile support', 'Search-focused content and social campaigns', 'Analytics, lead tracking and campaign measurement']
  }
];

const products = [
  {
    name: 'BillZen',
    slug: 'billzen',
    tag: 'BUSINESS MANAGEMENT',
    icon: ReceiptText,
    description: 'Billing, inventory and business management for everyday business operations.',
    status: 'Live product; feature availability may evolve.',
    url: 'https://billzen.aarunyawebsolutions.com/landing.html',
    points: ['GST billing and invoice workflows', 'Inventory and expense tracking', 'Customer records and business workflows'],
    color: 'product-orange'
  },
  {
    name: 'Omni Lead',
    slug: 'omni-lead',
    tag: 'BUSINESS DISCOVERY',
    icon: Users,
    description: 'A developing platform for business discovery, listings and lead-generation workflows.',
    status: 'In development.',
    url: 'https://omnilead.aarunyawebsolutions.com',
    points: ['Business discovery and listing concepts', 'Lead-generation workflow exploration', 'Business opportunity discovery'],
    color: 'product-blue'
  },
  {
    name: 'ArthaZen',
    slug: 'arthazen',
    tag: 'FINANCE & TAX TECHNOLOGY',
    icon: Calculator,
    description: 'An early-stage concept exploring AI-assisted financial workflows and tax technology.',
    status: 'Concept and early planning.',
    url: 'mailto:info@aarunyawebsolutions.com?subject=ArthaZen%20enquiry',
    points: ['AI-assisted financial workflow concepts', 'Tax and compliance information organisation', 'Human review for important decisions'],
    color: 'product-dark'
  }
];


function InnerBrand() {
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

function InnerHeader() {
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
          <InnerBrand />

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="inner-primary-navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav
            id="inner-primary-navigation"
            className={menuOpen ? 'nav-links nav-open' : 'nav-links'}
          >
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
    </>
  );
}

function InnerFooter() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <InnerBrand />
          <p>Building digital experiences and smarter business solutions.</p>
        </div>

        <div className="footer-links">
          <span>EXPLORE</span>
          <a href="/services">Services</a>
          <a href="/products">Our products</a>
          <a href="/about">About us</a>
          <a href="/website-development-panna">Website Development in Panna</a>
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
  );
}

export default function InnerPage({ path }) {
  const parts = path.split('/').filter(Boolean);
  const section = parts[0] || '';
  const slug = parts[1] || '';
  const service = section === 'services' ? services.find(x => x.slug === slug) : null;
  const product = section === 'products' ? products.find(x => x.slug === slug) : null;
  const isServices = path === '/services';
  const isProducts = path === '/products';
  const isAbout = path === '/about';
  const isContact = path === '/contact';
  const isPannaLanding = path === '/website-development-panna';

  let eyebrow = 'AARUNYA WEB SOLUTIONS';
  let title = 'Let’s find the right digital solution.';
  let description = 'Explore our services and products.';
  let points = [];

  if (service) {
    eyebrow = service.title.toUpperCase();
    title = service.title + ' built around your business.';
    description = service.description;
    points = service.points;
  } else if (product) {
    eyebrow = product.tag;
    title = product.name + ': technology for practical needs.';
    description = product.description;
    points = product.points;
  } else if (isServices) {
    eyebrow = 'OUR SERVICES';
    title = 'Practical digital services for real business goals.';
    description = 'From websites and interfaces to custom software and automation, choose the support that fits your next step.';
  } else if (isProducts) {
    eyebrow = 'OUR PRODUCTS';
    title = 'Digital products built to solve practical problems.';
    description = 'Explore products developed by Aarunya, with a clear distinction between available products and concepts still in development.';
  } else if (isAbout) {
    eyebrow = 'ABOUT AARUNYA';
    title = 'Useful technology. Clear priorities. Meaningful progress.';
    description = 'Aarunya Web Solutions combines development, design and practical automation to help businesses move forward.';
  } else if (isContact) {
    eyebrow = 'CONTACT';
    title = 'Tell us what you want to build.';
    description = 'Share your goals, the problem you want to solve and what a successful outcome looks like.';
  }

  if (isPannaLanding) {
    eyebrow = 'WEB DEVELOPMENT IN PANNA';
    title = 'Website Development Company in Panna, Madhya Pradesh';
    description = 'Business websites, e-commerce stores and custom web applications planned around your goals, customers and budget.';
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const notFound = !service && !product && !isServices && !isProducts && !isAbout && !isContact && !isPannaLanding;

  return (
    <>
      <InnerHeader />
      <main className="inner-page">
      <section className="inner-hero">
        <div className="inner-hero-grid" />
        <div className="container inner-hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</div>
          {product && <div className="inner-product-name">{product.name}<span>.</span></div>}
          <h1>{notFound ? 'We couldn’t find that page.' : title}</h1>
          <p>{notFound ? 'Use the navigation to continue exploring our website.' : description}</p>
          <div className="inner-actions">
            <a className="button button-primary" href="/contact">Discuss a project <ArrowRight size={17} /></a>
            <a className="text-link" href={section === 'products' || isProducts ? '/products' : '/services'}>
              Explore {section === 'products' || isProducts ? 'products' : 'services'} <ArrowUpRight size={17} />
            </a>
          </div>
          {(service || product) && (
            <div className="inner-status"><span /> {product ? product.status : 'Scope tailored to your requirements'}</div>
          )}
        </div>
        <div className="inner-orbit inner-orbit-one" />
        <div className="inner-orbit inner-orbit-two" />
        <div className="inner-orbit inner-orbit-three" />
      </section>

      {(isServices || isProducts) && (
        <section className="section inner-content-section">
          <div className="container">
            {isServices && (
              <div className="section-heading">
                <div>
                  <div className="eyebrow"><span className="eyebrow-line" /> CAPABILITIES</div>
                  <h2>Choose the right<br /><span className="orange-text">starting point.</span></h2>
                </div>
                <p>Start with a focused project, validate the essentials and expand when it makes sense.</p>
              </div>
            )}
            <div className={isServices ? 'services-grid' : 'products-grid'}>
              {(isServices ? services : products).map((item, index) => {
                const Icon = item.icon;
                return isServices ? (
                  <article className="service-card" key={item.slug}>
                    <div className="service-top">
                      <span className="service-icon"><Icon size={23} /></span>
                      <span className="service-number">0{index + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a className="card-arrow" href={'/services/' + item.slug} aria-label={'Explore ' + item.title}>
                      <ArrowUpRight size={19} />
                    </a>
                  </article>
                ) : (
                  <article className={'product-card ' + item.color} key={item.slug}>
                    <div className="product-card-top">
                      <span className="product-icon"><Icon size={25} /></span>
                      <span className="product-tag">{item.tag}</span>
                    </div>
                    <h3>{item.name}<span className="product-period">.</span></h3>
                    <p>{item.description}</p>
                    <a href={'/products/' + item.slug}>Product details <ArrowUpRight size={17} /></a>
                  </article>
                );
              })}
            </div>
            {isProducts && <p className="product-note">Product availability and features may evolve during development.</p>}
          </div>
        </section>
      )}

      {(service || product) && (
        <section className="section inner-content-section">
          <div className="container detail-layout">
            <div className="detail-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> {product ? 'OVERVIEW' : 'WHAT THIS CAN INCLUDE'}</div>
              <h2>{product ? 'Designed around practical needs.' : service ? 'What we deliver for your business.' : 'A clear scope. A useful outcome.'}</h2>
              <p>{product
                ? 'Capabilities and availability should be confirmed before making important operational decisions.'
                : service ? service.description + ' We align the scope, priorities and delivery plan with your business goals.' : 'Every engagement starts by understanding the goal, users and constraints. We define a realistic scope and build in focused iterations.'}</p>
              <a className="button button-dark" href="/contact">Talk through your requirements <ArrowRight size={17} /></a>
            </div>
            <div className="detail-list">
              {points.map(point => (
                <div key={point}><CheckCircle2 size={19} /><span>{point}</span></div>
              ))}
              {product?.slug === 'billzen' && (
                <a
                  className="button button-primary detail-external"
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit BillZen <ArrowUpRight size={17} />
                </a>
              )}

              {product && product.slug !== 'billzen' && (
                <a className="button button-primary detail-external" href="/contact">
                  Discuss this product <ArrowRight size={17} />
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {isPannaLanding && (
        <section className="section inner-content-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> LOCAL DIGITAL SERVICES</div>
                <h2>Build a stronger<br /><span className="orange-text">digital presence.</span></h2>
              </div>
              <p>Practical web solutions for businesses in Panna and nearby areas of Madhya Pradesh.</p>
            </div>
            <div className="services-grid">
              <article className="service-card"><div className="service-top"><span className="service-number">01</span></div><h3>Business Websites</h3><p>Professional, mobile-friendly websites that explain your services and help customers contact your business.</p></article>
              <article className="service-card"><div className="service-top"><span className="service-number">02</span></div><h3>E-commerce Websites</h3><p>Online stores with product pages and customer-friendly browsing and enquiry options.</p></article>
              <article className="service-card"><div className="service-top"><span className="service-number">03</span></div><h3>Custom Software and CRM</h3><p>Web applications, customer-management tools and workflow software planned around your needs.</p></article>
              <article className="service-card"><div className="service-top"><span className="service-number">04</span></div><h3>Technical SEO</h3><p>Search-friendly page structure, metadata, internal links, mobile usability and indexing essentials.</p></article>
              <article className="service-card"><div className="service-top"><span className="service-number">05</span></div><h3>AI and Automation</h3><p>Explore practical automation to reduce repetitive work and improve business workflows.</p></article>
              <article className="service-card"><div className="service-top"><span className="service-number">06</span></div><h3>WhatsApp Enquiries</h3><p>Clear contact options that help prospective customers enquire about your services.</p></article>
            </div>
            <div className="detail-list">
              <a className="text-link" href="/services/web-development">Explore web development <ArrowRight size={17} /></a>
              <a className="text-link" href="/services/custom-software">Explore custom software and CRM <ArrowRight size={17} /></a>
              <a className="text-link" href="/services/digital-marketing">Explore digital marketing and SEO <ArrowRight size={17} /></a>
              <a className="text-link" href="/contact">Contact Aarunya Web Solutions <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>
      )}

      {isAbout && (
        <section className="section inner-content-section">
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
              <div className="eyebrow"><span className="eyebrow-line" /> HOW WE WORK</div>
              <h2>Useful first.<br /><span className="orange-text">Complexity second.</span></h2>
              <p>Aarunya Web Solutions is a digital solutions business based in Panna, Madhya Pradesh, India. We work across websites, software, design and digital growth.</p>
              <p>Our approach is practical: understand the business problem, choose a suitable solution, validate it and improve through feedback.</p>
              <div className="about-points">
                <div><CheckCircle2 size={18} /><span>Honest scope and clear priorities</span></div>
                <div><CheckCircle2 size={18} /><span>Incremental development and iteration</span></div>
                <div><CheckCircle2 size={18} /><span>Responsible use of AI and automation</span></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isContact && (
        <section className="section inner-content-section">
          <div className="container contact-page-grid">
            <div className="contact-page-intro">
              <div className="eyebrow"><span className="eyebrow-line" /> START A CONVERSATION</div>
              <h2>Good projects begin<br />with a <span className="orange-text">clear brief.</span></h2>
              <p>Tell us what you want to build, who it is for and what you want to achieve. Choose whichever contact method works best for you.</p>

              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="mailto:info@aarunyawebsolutions.com?subject=Project%20Enquiry%20-%20Aarunya%20Web%20Solutions&body=Hello%20Aarunya%20team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%0A%0AProject%20or%20service%3A%0ABusiness%20or%20industry%3A%0ABudget%20range%3A%0ATarget%20timeline%3A%0AAdditional%20details%3A%0A%0AThank%20you."
                >
                  Email your project brief <ArrowRight size={17} />
                </a>
                <a
                  className="button button-dark"
                  href="https://wa.me/918770607203?text=Hello%20Aarunya%20Web%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
              </div>

              <div className="contact-brief-points">
                <span>HELP US UNDERSTAND YOUR PROJECT</span>
                <ul>
                  <li>What do you need: a website, software, an app or digital marketing?</li>
                  <li>Who will use it, and what problem should it solve?</li>
                  <li>Do you have a budget range or target launch date?</li>
                </ul>
              </div>
            </div>

            <div className="contact-page-card">
              <div>
                <span className="contact-label">EMAIL</span>
                <a href="mailto:info@aarunyawebsolutions.com">info@aarunyawebsolutions.com</a>
              </div>
              <div>
                <span className="contact-label">PHONE</span>
                <a href="tel:+918770607203">+91 8770607203</a>
              </div>
              <div>
                <span className="contact-label">LOCATION</span>
                <span>Panna, Madhya Pradesh, India</span>
              </div>
              <div>
                <span className="contact-label">WHAT WE DO</span>
                <span>Websites · Software · AI automation · Digital growth</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {notFound && (
        <section className="section inner-content-section">
          <div className="container"><a className="button button-primary" href="/">Return home <ArrowRight size={17} /></a></div>
        </section>
      )}

      <section className="inner-bottom-cta">
        <div className="container">
          <div><span>HAVE A PROJECT IN MIND?</span><h2>Let’s build something useful.</h2></div>
          <a className="button button-white" href="/contact">Start a conversation <ArrowUpRight size={17} /></a>
        </div>
      </section>
      </main>
      <InnerFooter />
    </>
  );
}
