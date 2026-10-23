#!/usr/bin/env bash
set -e
if [ ! -f src/App.jsx ]; then echo "Run from aarunya-web-v2 repo root, rebuild/phase-1 branch."; exit 1; fi
echo "Applying dark theme + WebGL hero + marquee + WhatsApp CTA + preloader..."
cat > "package.json" << 'AWEOF_package_json'
{
  "name": "aarunya-web-v2",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build && node scripts/prerender.mjs",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "vite": "^6.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.468.0",
    "three": "^0.160.0"
  },
  "devDependencies": {}
}

AWEOF_package_json
cat > "src/App.jsx" << 'AWEOF_src_App_jsx'
import { useState, useRef, useEffect } from 'react';
import InnerPage from './InnerPage.jsx';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X,
  Code2, Smartphone, Palette, Megaphone, BrainCircuit,
  Workflow, ReceiptText, Users, Calculator, CheckCircle2, MessageCircle
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

function HeroWallpaper() {
  return (
    <div className="hero-mesh" aria-hidden="true">
      <div className="blob blob-one" />
      <div className="blob blob-two" />
      <div className="blob blob-three" />
    </div>
  );
}

function HeroWebGL() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const art = canvas?.parentElement;
    if (!canvas || !art) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

    let renderer, scene, camera, group, outer, inner, points, raf;
    let disposed = false;

    import('three').then((THREE) => {
      if (disposed) return;

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 9);

      group = new THREE.Group();
      scene.add(group);

      function wireMesh(geo, color) {
        const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.65 });
        return new THREE.Mesh(geo, mat);
      }
      outer = wireMesh(new THREE.IcosahedronGeometry(2.1, 1), 0xf47721);
      inner = wireMesh(new THREE.IcosahedronGeometry(1.25, 0), 0x4da3ff);
      group.add(outer, inner);

      const count = 140;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const r = 3.3 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const pMat = new THREE.PointsMaterial({ color: 0xffd9b8, size: 0.05, transparent: true, opacity: 0.85 });
      points = new THREE.Points(pGeo, pMat);
      group.add(points);

      let targetRX = 0.25, targetRY = 0, curRX = 0.25, curRY = 0;

      function resize() {
        const w = art.clientWidth, h = art.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / (h || 1);
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener('resize', resize);

      let onMove;
      if (!coarsePointer && !reduceMotion) {
        onMove = (e) => {
          const rect = art.getBoundingClientRect();
          targetRY = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
          targetRX = 0.25 + ((e.clientY - rect.top) / rect.height - 0.5) * -0.4;
        };
        art.addEventListener('pointermove', onMove);
      }

      const clock = new THREE.Clock();
      function frame() {
        const t = clock.getElapsedTime();
        curRX += (targetRX - curRX) * 0.04;
        curRY += (targetRY - curRY) * 0.04;
        group.rotation.x = curRX + Math.sin(t * 0.15) * 0.05;
        group.rotation.y = curRY + t * 0.08;
        outer.rotation.y -= 0.0015;
        inner.rotation.x += 0.002;
        points.rotation.y += 0.0009;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(frame);
      }
      if (reduceMotion) {
        renderer.render(scene, camera);
      } else {
        raf = requestAnimationFrame(frame);
      }

      canvas._cleanup = () => {
        window.removeEventListener('resize', resize);
        if (onMove) art.removeEventListener('pointermove', onMove);
        if (raf) cancelAnimationFrame(raf);
        outer.geometry.dispose(); outer.material.dispose();
        inner.geometry.dispose(); inner.material.dispose();
        pGeo.dispose(); pMat.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      if (canvas._cleanup) canvas._cleanup();
    };
  }, []);

  return (
    <div className="hero-art" aria-label="Interactive 3D technology illustration">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="float-card tag-one">
        <span className="float-icon orange-icon"><Code2 size={18} /></span>
        <span><strong>Web & Software</strong><small>Built to perform</small></span>
      </div>
      <div className="float-card tag-two">
        <span className="float-icon blue-icon"><BrainCircuit size={18} /></span>
        <span><strong>AI & Automation</strong><small>Smarter workflows</small></span>
      </div>
      <div className="float-card tag-three">
        <span className="float-icon dark-icon"><Megaphone size={16} /></span>
        <span><strong>Digital Growth</strong><small>Built to scale</small></span>
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
          <a
            className="whatsapp-cta"
            href="https://wa.me/918770607203?text=Hi%20Aarunya%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
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
          <HeroWallpaper />
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

            <HeroWebGL />
          </div>
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {Array(2).fill(0).map((_, i) => (
                <span className="marquee-set" key={i}>
                  <b>WEB & SOFTWARE</b><i />
                  <b>AI & AUTOMATION</b><i />
                  <b>DIGITAL GROWTH</b><i />
                  <b>BUSINESS SOFTWARE</b><i />
                </span>
              ))}
            </div>
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

function Preloader() {
  const [state, setState] = useState('show');

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = false;
    try { seen = sessionStorage.getItem('aw-loaded') === '1'; } catch (e) {}
    if (seen || reduceMotion) { setState('hidden'); return; }
    try { sessionStorage.setItem('aw-loaded', '1'); } catch (e) {}
    const t1 = setTimeout(() => setState('fade'), 550);
    const t2 = setTimeout(() => setState('hidden'), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (state === 'hidden') return null;
  return (
    <div className={state === 'fade' ? 'preloader preloader-fade' : 'preloader'} role="presentation" aria-hidden="true">
      <img src="/logo-icon.png" alt="" className="preloader-logo" />
    </div>
  );
}

function App({ initialPath } = {}) {
  const currentPath = initialPath ??
    (typeof window !== 'undefined' ? window.location.pathname : '/');
  const path = currentPath.replace(/\/+$/, '') || '/';

  return (
    <>
      <Preloader />
      {path === '/' ? <HomePage /> : <InnerPage path={path} />}
    </>
  );
}

export default App;

AWEOF_src_App_jsx
cat > "src/styles.css" << 'AWEOF_src_styles_css'
:root {
  font-family: 'DM Sans', sans-serif;
  color: #eef2fa;
  background: #0a0f1c;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color-scheme: dark;
  --orange: #f47721;
  --orange-dark: #df5f0c;
  --blue: #4da3ff;
  --ink: #1a2440;
  --muted: #a8b4cf;
  --faint: #7684a3;
  --line: #ffffff1f;
  --soft: #0e1526;
  --bg: #0a0f1c;
  --surface: #121a2e;
  --text: #eef2fa;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 85px; }
body { margin: 0; min-width: 320px; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.container { width: min(1160px, calc(100% - 48px)); margin-inline: auto; }
.announcement { min-height: 36px; padding: 8px 20px; display: flex; align-items: center; justify-content: center; gap: 9px; background: var(--ink); color: var(--text); font-size: 11px; letter-spacing: .02em; }
.announcement-dot { width: 6px; height: 6px; background: #6bd6a5; border-radius: 50%; }
.announcement a { display: inline-flex; align-items: center; gap: 4px; color: #ffb278; margin-left: 8px; font-weight: 700; }
.header { height: 82px; background: rgba(10,15,28,.88); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 20; backdrop-filter: blur(14px); }
.nav-wrap { height: 100%; display: flex; align-items: center; justify-content: space-between; }
.brand { display: inline-flex; align-items: center; gap: 10px; flex-shrink: 0; }
.brand-mark { width: 39px; height: 39px; object-fit: contain; flex-shrink: 0; }
.brand-copy small { color: var(--orange); }
.brand-copy { display: flex; flex-direction: column; gap: 2px; }
.brand-copy strong { font: 800 15px Manrope, sans-serif; letter-spacing: .09em; }
.brand-copy small { font-size: 9px; font-weight: 700; letter-spacing: .2em; }
.nav-links { display: flex; align-items: center; gap: 32px; font-size: 12px; font-weight: 600; color: var(--muted); }
.nav-links > a:not(.nav-cta):hover, .footer-links a:hover { color: var(--orange); }
.nav-cta { display: inline-flex; align-items: center; gap: 9px; padding: 12px 17px; background: var(--ink); color: white; border-radius: 7px; transition: background .2s; }
.nav-cta:hover { background: var(--blue); }
.menu-toggle { display: none; border: 0; background: transparent; color: var(--text); }
.whatsapp-cta { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 10px; background: #25d36622; color: #3ddc84; border: 1px solid #25d36640; flex-shrink: 0; margin-left: auto; margin-right: 14px; transition: background .2s; }
.whatsapp-cta:hover { background: #25d36640; }
@media (max-width: 860px) { .whatsapp-cta { margin-right: 10px; } }
:focus-visible { outline: 3px solid var(--orange); outline-offset: 4px; }
.nav-links a:focus-visible, .menu-toggle:focus-visible { outline: 2px solid var(--orange); outline-offset: 4px; }

.hero { position: relative; overflow: hidden; background: var(--bg); }
.hero-mesh { position: absolute; inset: -15%; z-index: 0; filter: blur(70px); pointer-events: none; }
.blob { position: absolute; border-radius: 50%; mix-blend-mode: screen; }
.blob-one { width: 54vmax; height: 54vmax; left: -20%; top: -16%; background: radial-gradient(circle,var(--orange),transparent 70%); opacity: .55; animation: driftOne 24s ease-in-out infinite; }
.blob-two { width: 46vmax; height: 46vmax; right: -18%; top: -6%; background: radial-gradient(circle,var(--blue),transparent 70%); opacity: .5; animation: driftTwo 28s ease-in-out infinite; }
.blob-three { width: 40vmax; height: 40vmax; left: 8%; bottom: -26%; background: radial-gradient(circle,#6a4df4,transparent 70%); opacity: .4; animation: driftThree 32s ease-in-out infinite; }
@keyframes driftOne { 0%,100%{transform:translate(0,0)} 50%{transform:translate(8%,10%)} }
@keyframes driftTwo { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-10%,8%)} }
@keyframes driftThree { 0%,100%{transform:translate(0,0)} 50%{transform:translate(6%,-8%)} }
.hero-inner { position: relative; min-height: 560px; display: grid; grid-template-columns: 1.02fr .98fr; align-items: center; gap: 25px; padding-top: 44px; padding-bottom: 44px; }
.hero-copy { position: relative; z-index: 2; padding: 16px 0 24px; }
.eyebrow { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 10px; letter-spacing: .17em; font-weight: 800; }
.eyebrow-line { display: inline-block; width: 25px; height: 2px; background: var(--orange); }
.hero h1, .section-heading h2, .about-copy h2, .contact-content h2 { font-family: Manrope, sans-serif; font-weight: 800; letter-spacing: -.055em; }
.hero h1 { margin: 22px 0 19px; font-size: clamp(46px,5.5vw,72px); line-height: 1.08; }
.gradient-text { background: linear-gradient(100deg,var(--orange) 5%,#f4a044 42%,var(--blue) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-description { max-width: 470px; color: var(--muted); font-size: 15px; line-height: 1.9; }
.hero-actions { display: flex; align-items: center; gap: 25px; flex-wrap: wrap; margin-top: 29px; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 11px; padding: 14px 19px; border-radius: 7px; font-size: 12px; font-weight: 700; transition: transform .2s,background .2s; }
.button:hover { transform: translateY(-2px); }
.button-primary { background: var(--orange); color: var(--text); box-shadow: 0 8px 22px #f477212a; }
.button-primary:hover { background: var(--orange-dark); }
.text-link { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 700; }
.text-link:hover { color: var(--blue); }
.hero-trust { display: flex; align-items: center; gap: 8px; margin-top: 33px; font-size: 11px; color: var(--muted); }
.trust-icon { color: #21a46c; display: flex; }
.hero-art { min-height: 410px; position: relative; }
.hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.float-card { position: absolute; display: flex; align-items: center; gap: 10px; padding: 13px 15px; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; box-shadow: 0 15px 35px #00000038; }
.float-card span:last-child { display: flex; flex-direction: column; gap: 4px; }
.float-card strong { font-size: 10px; }
.float-card small { color: var(--faint); font-size: 9px; }
.float-icon { width: 35px; height: 35px; display: grid; place-items: center; border-radius: 10px; }
.orange-icon { color: var(--orange); background: #f477211a; }
.blue-icon { color: var(--blue); background: #4da3ff1a; }
.tag-one { top: 8%; right: 2%; animation: tagFloat 7s ease-in-out infinite; }
.tag-two { bottom: 20%; left: -2%; animation: tagFloat 8.5s ease-in-out infinite .6s; }
.tag-three { top: 48%; right: -4%; animation: tagFloat 6.5s ease-in-out infinite 1.1s; }
@keyframes tagFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }

.marquee { position: relative; z-index: 1; overflow: hidden; border-top: 1px solid var(--line); -webkit-mask-image: linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); mask-image: linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); }
.marquee-track { display: flex; width: max-content; animation: marqueeScroll 28s linear infinite; }
.marquee-set { display: flex; align-items: center; gap: 15px; padding: 20px 15px; color: var(--faint); font-size: 11px; letter-spacing: .16em; font-weight: 800; white-space: nowrap; }
.marquee-set i { width: 4px; height: 4px; background: var(--orange); border-radius: 50%; flex-shrink: 0; }
@keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.section { padding: 100px 0; }
.section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 35px; margin-bottom: 42px; }
.section-heading h2, .about-copy h2 { margin: 16px 0 0; font-size: clamp(34px,4.2vw,49px); line-height: 1.15; }
.section-heading > p { max-width: 370px; color: var(--muted); font-size: 13px; line-height: 1.9; margin: 0 0 5px; }
.orange-text { color: var(--orange); }
.services-section { background: var(--surface); }
.services-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.service-card { position: relative; min-height: 230px; padding: 25px 25px 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); transition: background .2s; }
.service-card:hover { background: #0e1526; }
.service-top { display: flex; justify-content: space-between; align-items: center; }
.service-icon { display: grid; place-items: center; width: 43px; height: 43px; color: var(--blue); background: #4da3ff1a; border-radius: 11px; }
.service-number { font-size: 10px; color: var(--faint); font-weight: 700; }
.service-card h3 { margin: 24px 0 9px; font: 800 16px Manrope,sans-serif; letter-spacing: -.025em; }
.service-card p { max-width: 280px; color: var(--muted); font-size: 12px; line-height: 1.8; margin: 0; }
.card-arrow { position: absolute; right: 22px; bottom: 22px; color: var(--faint); }
.card-arrow:hover { color: var(--orange); }
.process-section { background: #0e1526; }
.process-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
.process-card { padding: 27px; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; }
.process-card > span { display: inline-grid; place-items: center; width: 37px; height: 37px; border-radius: 10px; background: #f477211a; color: var(--orange); font-size: 11px; font-weight: 800; }
.process-card h3 { margin: 22px 0 10px; font: 800 16px Manrope,sans-serif; letter-spacing: -.025em; }
.process-card p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.9; }
.products-section { background: #0e1526; }
.products-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 17px; }
.product-card { min-height: 275px; border-radius: 13px; padding: 25px; border: 1px solid var(--line); background: var(--surface); display: flex; flex-direction: column; align-items: flex-start; }
.product-card-top { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 10px; }
.product-icon { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 12px; }
.product-orange .product-icon { color: var(--orange); background: #f477211a; }
.product-blue .product-icon { color: var(--blue); background: #4da3ff1a; }
.product-dark .product-icon { color: var(--text); background: var(--ink); }
.product-tag { font-size: 8px; font-weight: 800; letter-spacing: .12em; color: var(--faint); }
.product-card h3 { margin: 27px 0 10px; font: 800 25px Manrope,sans-serif; letter-spacing: -.05em; }
.product-period { color: var(--orange); }
.product-card p { margin: 0 0 20px; color: var(--muted); font-size: 12px; line-height: 1.8; flex: 1; }
.product-card > a { display: inline-flex; align-items: center; gap: 7px; font-size: 11px; font-weight: 800; }
.product-card > a:hover { color: var(--orange); }
.product-note { color: var(--faint); font-size: 10px; margin: 18px 0 0; }
.about-section { background: var(--surface); }
.about-layout { display: grid; grid-template-columns: .95fr 1.05fr; gap: 85px; align-items: center; }
.about-visual { position: relative; min-height: 405px; border-radius: 15px; overflow: hidden; background: #0e1526; display: grid; place-items: center; }
.about-visual::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(#2474df0c 1px,transparent 1px),linear-gradient(90deg,#2474df0c 1px,transparent 1px); background-size: 30px 30px; }
.about-shape { position: absolute; border-radius: 50%; }
.shape-one { width: 280px; height: 280px; background: linear-gradient(140deg,#f4772134,#f4772100); top: -85px; left: -65px; }
.shape-two { width: 300px; height: 300px; background: linear-gradient(140deg,#2474df2b,#2474df00); bottom: -115px; right: -75px; }
.about-visual-content { position: relative; width: 220px; height: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; background: #121a2eeb; border: 1px solid var(--line); border-radius: 30px; box-shadow: 0 20px 50px #00000045; transform: rotate(-5deg); }
.about-monogram { font: 800 115px/.9 Manrope,sans-serif; color: var(--blue); letter-spacing: -.12em; }
.about-monogram span { color: var(--orange); }
.about-visual-caption { font-size: 8px; line-height: 1.7; letter-spacing: .15em; text-align: center; font-weight: 800; color: var(--muted); }
.about-badge { position: absolute; right: 20px; bottom: 20px; padding: 11px 13px; border-radius: 6px; color: var(--text); background: var(--ink); font-size: 8px; letter-spacing: .13em; font-weight: 800; }
.about-copy h2 { margin-bottom: 22px; }
.about-copy > p { color: var(--muted); font-size: 13px; line-height: 1.9; }
.about-points { display: grid; gap: 14px; margin: 25px 0 28px; }
.about-points div { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 12px; }
.about-points svg { color: #1ba16a; flex-shrink: 0; }
.button-dark { color: var(--text); background: var(--ink); }
.button-dark:hover { background: var(--blue); }
.contact-section { padding-top: 20px; padding-bottom: 90px; }
.contact-panel { position: relative; display: grid; grid-template-columns: 1.15fr .85fr; gap: 55px; align-items: center; overflow: hidden; border-radius: 17px; padding: 58px 62px; background: var(--ink); color: var(--text); }
.contact-glow { position: absolute; width: 420px; height: 420px; border-radius: 50%; right: -120px; top: -220px; background: radial-gradient(circle,#2474df6b,transparent 68%); pointer-events: none; }
.contact-content, .contact-details { position: relative; }
.eyebrow-light { color: var(--faint); }
.contact-content h2 { font-size: clamp(36px,4.3vw,52px); line-height: 1.13; margin: 22px 0 15px; }
.contact-content h2 span { color: #ff9a51; }
.contact-content > p { max-width: 400px; color: var(--faint); font-size: 12px; line-height: 1.9; margin-bottom: 26px; }
.button-white { background: var(--surface); color: var(--ink); }
.button-white:hover { background: #f477211a; }
.contact-details { display: grid; gap: 24px; border-left: 1px solid #ffffff24; padding-left: 38px; }
.contact-details > div { display: flex; flex-direction: column; gap: 8px; }
.contact-label { color: var(--faint); font-size: 9px; letter-spacing: .16em; font-weight: 800; }
.contact-details a, .contact-details > div > span:last-child { color: var(--text); font-size: 12px; overflow-wrap: anywhere; }
.contact-details a:hover { color: #ffad73; }
.footer { background: var(--surface); }
.footer-main { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 50px; padding-top: 20px; padding-bottom: 45px; }
.footer-brand p { max-width: 250px; color: var(--faint); font-size: 11px; line-height: 1.8; margin-top: 16px; }
.footer-links { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
.footer-links > span { margin-bottom: 4px; color: var(--faint); font-size: 9px; letter-spacing: .14em; font-weight: 800; }
.footer-links a { color: var(--muted); font-size: 11px; }
.footer-bottom { min-height: 57px; display: flex; align-items: center; justify-content: space-between; gap: 15px; border-top: 1px solid var(--line); color: var(--faint); font-size: 9px; }

@media (min-width: 1200px) {
  .hero-inner { min-height: 590px; }
}
@media (max-width: 900px) {
  .nav-links { gap: 18px; }
  .hero-inner { grid-template-columns: 1fr 1fr; }
  .hero-art { transform: scale(.9); }
  .about-layout { gap: 40px; }
  .contact-panel { padding: 45px 35px; gap: 30px; }
}
@media (max-width: 700px) {
  .container { width: min(100% - 36px, 540px); }
  .announcement { font-size: 9px; gap: 6px; }
  .announcement a { margin-left: 2px; }
  .header { height: 70px; }
  .brand-mark { width: 36px; height: 36px; }
  .menu-toggle { display: grid; place-items: center; padding: 7px; }
  .nav-links { display: none; position: absolute; top: 69px; left: 0; right: 0; padding: 18px; background: var(--surface); border-bottom: 1px solid var(--line); box-shadow: 0 15px 25px #00000030; flex-direction: column; align-items: stretch; gap: 0; }
  .nav-links.nav-open { display: flex; }
  .nav-links > a:not(.nav-cta) { padding: 14px 8px; border-bottom: 1px solid var(--line); }
  .nav-cta { justify-content: center; margin-top: 12px; }
  .process-grid { grid-template-columns: 1fr; gap: 12px; }
  .process-card { padding: 22px; }
  .hero-inner { display: flex; flex-direction: column; align-items: stretch; gap: 0; padding-top: 57px; padding-bottom: 25px; }
  .hero-copy { padding: 0; }
  .hero h1 { font-size: clamp(43px,12vw,60px); margin-top: 20px; }
  .hero-description { font-size: 13px; }
  .hero-actions { gap: 17px; margin-top: 23px; }
  .button { padding: 13px 15px; }
  .hero-trust { margin-top: 23px; font-size: 10px; }
  .hero-art { width: 100%; min-height: 400px; margin: 6px 0 -4px; }
  .tag-one { top: 3%; right: 2%; }
  .tag-two { bottom: 6%; left: 1%; }
  .tag-three { top: 44%; right: -1%; }
  .float-card { padding: 10px 12px; gap: 8px; }
  .float-icon { width: 30px; height: 30px; }
  .hero-bottom { gap: 8px; justify-content: space-between; font-size: 7px; letter-spacing: .08em; padding-top: 15px; }
  .section { padding: 70px 0; }
  .section-heading { display: block; margin-bottom: 30px; }
  .section-heading h2, .about-copy h2 { font-size: 36px; }
  .section-heading > p { margin-top: 18px; font-size: 12px; }
  .services-grid { grid-template-columns: 1fr; }
  .service-card { min-height: 200px; padding: 23px; }
  .service-card h3 { margin-top: 20px; }
  .products-grid { grid-template-columns: 1fr; }
  .product-card { min-height: 245px; }
  .about-layout { grid-template-columns: 1fr; gap: 38px; }
  .about-visual { min-height: 330px; }
  .about-visual-content { width: 190px; height: 190px; }
  .about-monogram { font-size: 95px; }
  .about-copy > p { font-size: 12px; }
  .contact-section { padding-top: 0; padding-bottom: 65px; }
  .contact-panel { grid-template-columns: 1fr; gap: 32px; padding: 35px 24px; }
  .contact-content h2 { font-size: 40px; }
  .contact-details { border-left: 0; border-top: 1px solid #ffffff24; padding: 25px 0 0; gap: 21px; }
  .footer-main { grid-template-columns: 1fr 1fr; gap: 30px 20px; padding-bottom: 30px; }
  .footer-brand { grid-column: 1 / -1; }
  .footer-bottom { align-items: flex-start; justify-content: center; flex-direction: column; padding-top: 16px; padding-bottom: 16px; font-size: 9px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
}

/* Multi-page layouts */
.inner-page { overflow: hidden; }
.inner-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 390px;
  display: flex;
  align-items: center;
  background: linear-gradient(115deg, var(--surface) 15%, #0e1526 100%);
  border-bottom: 1px solid var(--line);
}
.inner-hero-grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: .6;
  background-image:
    linear-gradient(rgba(36,116,223,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(36,116,223,.055) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: linear-gradient(90deg, black, transparent 85%);
}
.inner-hero-content {
  position: relative;
  z-index: 2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.inner-hero h1 {
  max-width: 760px;
  margin: 22px 0 18px;
  font: 800 clamp(38px, 5.4vw, 66px)/1.1 Manrope, sans-serif;
  letter-spacing: -.055em;
}
.inner-hero-content > p {
  max-width: 650px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.85;
}
.inner-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 22px; margin-top: 27px; }
.inner-product-name { margin-top: 24px; font: 800 16px Manrope, sans-serif; letter-spacing: .12em; }
.inner-product-name span { color: var(--orange); }
.inner-status { display: flex; align-items: center; gap: 9px; margin-top: 25px; color: var(--muted); font-size: 11px; }
.inner-status > span { width: 7px; height: 7px; border-radius: 50%; background: #28a879; }
.inner-orbit { position: absolute; z-index: -1; border: 1px solid var(--line); border-radius: 50%; pointer-events: none; }
.inner-orbit-one { width: 350px; height: 350px; right: -80px; top: 20px; }
.inner-orbit-two { width: 270px; height: 270px; right: -40px; top: 60px; border-style: dashed; border-color: #ecb37f66; }
.inner-orbit-three { width: 190px; height: 190px; right: 0; top: 100px; }
.inner-content-section { padding-top: 76px; padding-bottom: 76px; }
.detail-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: start; }
.detail-copy h2, .contact-page-grid h2 {
  margin: 18px 0;
  font: 800 clamp(32px, 4vw, 46px)/1.16 Manrope, sans-serif;
  letter-spacing: -.05em;
}
.detail-copy > p, .contact-page-grid > div:first-child > p {
  max-width: 510px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 25px;
}
.detail-list { display: grid; gap: 18px; padding: 26px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); box-shadow: 0 18px 50px #00000022; }
.detail-list > div { display: flex; align-items: flex-start; gap: 12px; color: var(--muted); font-size: 13px; line-height: 1.6; }
.detail-list > div svg { flex-shrink: 0; color: #23a475; }
.detail-external { justify-self: start; margin-top: 8px; }
.contact-page-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 70px; align-items: center; }
.contact-page-card { display: grid; gap: 0; padding: 10px 26px; border: 1px solid var(--line); border-radius: 15px; background: var(--surface); }
.contact-page-card > div { display: grid; gap: 9px; padding: 20px 0; border-bottom: 1px solid var(--line); font-size: 13px; overflow-wrap: anywhere; }
.contact-page-card > div:last-child { border-bottom: 0; }
.contact-page-card a:hover { color: var(--orange); }
.inner-bottom-cta { padding: 35px 0; background: var(--ink); color: var(--text); }
.inner-bottom-cta > .container { display: flex; justify-content: space-between; align-items: center; gap: 24px; }
.inner-bottom-cta > .container > div > span { color: #ffb278; font-size: 9px; font-weight: 800; letter-spacing: .16em; }
.inner-bottom-cta h2 { margin: 9px 0 0; font: 800 clamp(23px, 3vw, 32px) Manrope, sans-serif; letter-spacing: -.04em; }
.inner-bottom-cta .button-white { background: var(--surface); color: var(--ink); flex-shrink: 0; }

@media (max-width: 700px) {
  .inner-hero { min-height: 0; }
  .inner-hero-content { padding-top: 54px; padding-bottom: 55px; }
  .inner-hero h1 { font-size: clamp(37px, 10vw, 50px); }
  .inner-hero-content > p { font-size: 13px; }
  .inner-orbit-one { right: -245px; }
  .inner-orbit-two { right: -205px; }
  .inner-orbit-three { right: -165px; }
  .inner-content-section { padding-top: 55px; padding-bottom: 55px; }
  .detail-layout, .contact-page-grid { grid-template-columns: 1fr; gap: 32px; }
  .detail-list { padding: 22px; }
  .inner-bottom-cta > .container { align-items: flex-start; flex-direction: column; }
  .inner-actions { gap: 15px; }
}

/* Contact conversion improvements */
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 26px 0 28px;
}

.contact-actions .button {
  gap: 9px;
}

.contact-brief-points {
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #0e1526;
}

.contact-brief-points > span {
  color: var(--muted);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
}

.contact-brief-points ul {
  display: grid;
  gap: 12px;
  margin: 16px 0 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.contact-brief-points li::marker {
  color: var(--orange);
}

@media (max-width: 700px) {
  .contact-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .contact-actions .button {
    justify-content: center;
    width: 100%;
  }

  .contact-brief-points {
    padding: 17px;
  }
}

.project-enquiry-form { min-width: 0; padding: 26px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); box-shadow: 0 12px 36px rgba(20,30,50,.045); }
.enquiry-form-heading { margin-bottom: 22px; }
.enquiry-form-heading h3 { margin: 9px 0; font-size: 24px; letter-spacing: -.7px; }
.enquiry-form-heading p, .enquiry-privacy-note { color: var(--muted); font-size: 13px; line-height: 1.65; }
.enquiry-form-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; }
.enquiry-form-grid label { display: grid; gap: 7px; color: var(--ink); font-size: 13px; font-weight: 600; }
.enquiry-form-grid input, .enquiry-form-grid select, .enquiry-form-grid textarea { box-sizing: border-box; width: 100%; min-width: 0; padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink); font: inherit; font-weight: 400; }
.enquiry-form-grid input:focus, .enquiry-form-grid select:focus, .enquiry-form-grid textarea:focus { outline: 2px solid var(--orange); outline-offset: 1px; }
.enquiry-form-grid textarea { resize: vertical; }
.enquiry-details { grid-column: 1 / -1; }
.enquiry-submit { display: inline-flex; align-items: center; justify-content: center; gap: 9px; margin-top: 20px; border: 0; cursor: pointer; }
.enquiry-privacy-note { margin: 12px 0 0; }
@media (max-width: 600px) { .project-enquiry-form { padding: 19px; } .enquiry-form-grid { grid-template-columns: 1fr; } .enquiry-details { grid-column: auto; } .enquiry-submit { width: 100%; } }


/* Legal document pages */
.legal-document { max-width: 860px; }
.legal-document h2 { margin: 30px 0 10px; font-size: clamp(19px, 2.4vw, 24px); line-height: 1.35; letter-spacing: -.35px; }
.legal-document p { color: var(--muted); font-size: 15px; line-height: 1.8; overflow-wrap: anywhere; }
.legal-document > p:first-child { padding-bottom: 18px; border-bottom: 1px solid var(--line); }
.legal-document .legal-disclaimer { margin-top: 34px; padding: 16px; border-left: 3px solid var(--orange); background: #0e1526; font-size: 13px; }

.dark-icon { color: var(--text); background: var(--ink); }

.preloader { position: fixed; inset: 0; z-index: 999; display: grid; place-items: center; background: var(--bg); transition: opacity .35s ease; }
.preloader-fade { opacity: 0; pointer-events: none; }
.preloader-logo { width: 64px; height: 64px; animation: preloaderPulse 1.1s ease-in-out infinite; }
@keyframes preloaderPulse { 0%,100% { transform: scale(1); opacity: .85; } 50% { transform: scale(1.08); opacity: 1; } }

AWEOF_src_styles_css
echo "Files written. Installing three.js dependency requires: npm install (done by Vercel automatically on push)."
echo "Now run: git add -A && git commit -m \"Dark theme + WebGL hero + marquee + WhatsApp CTA + preloader\" && git push"
