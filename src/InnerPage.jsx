import { useEffect, useState } from 'react';
import { WorkGrid, WorkCaseStudy, Testimonials } from './WorkParts.jsx';
import { works } from './data/work.js';
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Code2, Smartphone,
  BrainCircuit, Workflow, Palette, Megaphone, ReceiptText,
  Users, Calculator, ShoppingCart, Menu, X, MessageCircle
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
  },
  {
    title: "E-commerce Solutions",
    slug: "e-commerce",
    icon: ShoppingCart,
    description: "Online stores designed around product discovery, customer experience and order workflows.",
    points: ["Product catalogues and organised product pages", "Responsive shopping experiences for mobile and desktop", "Cart, checkout and payment gateway integration planning", "Inventory, order management and store administration workflows", "Technical SEO and performance foundations"]
  },
  {
    title: "CRM & Business Dashboards",
    slug: "crm-dashboards",
    icon: Users,
    description: "Customer management tools and business dashboards that organise workflows and make operational information easier to use.",
    points: ["Customer records and enquiry tracking workflows", "Lead pipelines, follow-ups and activity management", "Business dashboards and reporting views", "Role-based access and integration planning", "Phased implementation, testing and documentation"]
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
      <img className="brand-mark" src="/logo-icon.png" alt="" width="39" height="39" />
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
            <a href="/work" onClick={closeMenu}>Work</a>
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
  );
}


function LegalPage({ type }) {
  const privacy = type === 'privacy';
  return (
    <section className="section inner-content-section">
      <div className="container legal-document">
        <p><strong>Effective date:</strong> 17 October 2026</p>
        {privacy ? <>
          <h2>1. About this policy</h2>
          <p>Aarunya Web Solutions is a sole-proprietor digital services business based in Panna, Madhya Pradesh, India. This policy explains how information may be handled when you visit this website, contact us, or discuss a project with us.</p>
          <h2>2. Information you provide</h2>
          <p>If you contact us, you may provide your name, business name, phone number, email address, project requirements, budget, timelines, and other details you choose to share. Please do not send passwords, payment-card details, government identity numbers, or sensitive personal information through a general enquiry.</p>
          <h2>3. How we use information</h2>
          <p>We use enquiry and project information to respond to requests, prepare quotations, deliver agreed services, communicate about projects, maintain business records, protect our rights, and meet applicable legal obligations. We do not sell personal contact information.</p>
          <h2>4. Website forms and WhatsApp</h2>
          <p>The project enquiry form on this website prepares a message for WhatsApp. The form itself does not submit the message to an Aarunya server or store form submissions. You review and send the message through WhatsApp, whose own terms and privacy practices then apply. If you contact us by phone or another channel, we handle the information you choose to share through that channel.</p>
          <h2>5. Search tools, cookies and tracking</h2>
          <p>We use Google Search Console to monitor website indexing and search performance. Search Console is an operator-facing search tool, not by itself a browser tracking script. We do not currently intend to use this website to profile visitors through Google Analytics or advertising tracking. Third-party tools, cookies, pixels or analytics may change as the website evolves; where required, we will provide appropriate notice and choices. Your browser and third-party services may independently process technical data.</p>
          <h2>6. Sharing and service providers</h2>
          <p>Information may be shared with service providers where reasonably necessary to communicate with you, host or maintain the website, deliver a contracted project, or comply with law. We aim to limit sharing to what is necessary. Third-party services operate under their own terms and privacy policies.</p>
          <h2>7. Client projects and portfolio use</h2>
          <p>Project data is handled according to the applicable project agreement and instructions. We may describe completed work or display approved project material in our portfolio where permitted by the agreement and applicable law. We do not intend to publish passwords, private personal data, confidential business information, or security-sensitive material. Clients should identify confidential material and any portfolio restrictions in writing before work begins.</p>
          <h2>8. Retention and security</h2>
          <p>We retain information for as long as reasonably needed for enquiries, project delivery, support, records, dispute resolution and legal obligations. We use reasonable safeguards appropriate to the nature of the information, but no internet transmission or storage system can be guaranteed completely secure.</p>
          <h2>9. Your choices and requests</h2>
          <p>You may ask us to correct or delete information we hold, subject to applicable record-keeping, contractual and legal requirements. We may need to verify your identity before acting on a request. Some information may remain in third-party systems or backups under their own retention rules.</p>
          <h2>10. Children and third-party links</h2>
          <p>Our services are intended for businesses and general audiences, not specifically for children. This website may link to third-party products or services; we are not responsible for their privacy practices.</p>
          <h2>11. Changes and contact</h2>
          <p>We may update this policy as our website, tools or services change. The revised version will be posted on this page with an updated effective date. For privacy requests, contact Aarunya Web Solutions by phone or WhatsApp at +91 8770607203.</p>
        </> : <>
          <h2>1. Who we are and where we work</h2>
          <p>Aarunya Web Solutions is a sole-proprietor digital services business based in Panna, Madhya Pradesh, India. We may provide services locally, elsewhere in India, and internationally through remote delivery, subject to the applicable project agreement and legal requirements.</p>
          <h2>2. Scope and project agreement</h2>
          <p>Website content is a general overview, not a binding offer for a specific deliverable. Before paid work begins, the parties should agree in writing on the scope, deliverables, exclusions, milestones, responsibilities, timelines, fees, payment schedule, support or maintenance, acceptance criteria and any special conditions. The signed or otherwise legally accepted project agreement governs that engagement and prevails over general website descriptions to the extent of any inconsistency.</p>
          <h2>3. Quotes, pricing and payment</h2>
          <p>Pricing may be project-based, package-based, milestone-based, recurring, subscription-based or otherwise agreed in writing. Quotes may have an expiry date and may exclude taxes, third-party charges, hosting, domains, licences, advertising spend, payment-gateway fees or other costs unless stated otherwise. The client must pay invoices according to the agreed schedule. Work may be paused for overdue amounts where the agreement and applicable law permit.</p>
          <h2>4. Scope changes and client responsibilities</h2>
          <p>Requests beyond the approved scope, including additional pages, features, integrations, revisions or changed requirements, may affect fees and timelines. We will seek written approval for material changes before proceeding. The client must provide accurate content, lawful materials, timely feedback, access and approvals needed for delivery, and must have rights to materials supplied to us.</p>
          <h2>5. Delivery, acceptance and dependencies</h2>
          <p>Delivery dates depend on the agreed plan and timely client cooperation. Delays caused by missing content, approvals, third-party services, external platforms or events outside reasonable control may affect timelines. Any testing, review period, acceptance process, warranty or defect correction commitment should be stated in the project agreement.</p>
          <h2>6. Cancellation and refunds</h2>
          <p>Cancellation and refund eligibility depend on the service, stage of work, committed costs, payment structure, project agreement and applicable law. Once work has started, amounts attributable to work performed, non-recoverable commitments and approved expenses are generally not refundable, except where the agreement or applicable law requires otherwise. If a client cancels before work starts, any refund will be calculated under the agreement after accounting for applicable committed costs. Where a client has paid but then declines to proceed despite our readiness to perform, a 50% refund may apply only where the specific agreement provides for it and applicable law permits. If Aarunya cannot deliver an agreed obligation, the parties will follow the agreed remedy and applicable law. No term on this page excludes mandatory statutory rights.</p>
          <h2>7. Maintenance and ongoing services</h2>
          <p>Maintenance, updates, hosting, security monitoring, backups, content updates, support response times and service levels are not automatically included unless expressly stated in the quotation or project agreement. These services can be arranged as a separate or recurring package. Third-party platform changes, outages, policy changes and price increases may affect ongoing services.</p>
          <h2>8. Intellectual property and permitted use</h2>
          <p>Aarunya retains ownership of its pre-existing software, source components, reusable code, libraries, methods, templates, tools, know-how and brand assets, along with third-party materials owned by their respective owners. Unless a project agreement expressly states otherwise, payment grants the client only the licence or usage rights specifically described in that agreement; it does not automatically transfer ownership of Aarunya's underlying materials. Ownership and permitted use of bespoke deliverables, client-supplied materials and third-party assets must be stated in the project agreement. Clients may not resell, redistribute, reverse engineer or transfer licensed materials except as permitted by the agreement and law.</p>
          <h2>9. Portfolio and publicity</h2>
          <p>We may seek to describe or showcase completed work in our portfolio, case studies or company profile only to the extent permitted by the project agreement, client permission where required, confidentiality obligations and applicable law. Clients should record any publicity restrictions in the agreement. We will not knowingly publish credentials, private personal information or confidential materials as portfolio content.</p>
          <h2>10. Third-party services and AI</h2>
          <p>Projects may rely on third-party hosting, domains, APIs, messaging platforms, payment providers, analytics, AI models or other services. Their availability, fees, terms and data practices are controlled by those providers. AI-generated outputs may be incomplete or inaccurate and require human review. Unless expressly agreed, we do not guarantee that third-party or AI outputs will be error-free, continuously available, or suitable for a particular regulated decision.</p>
          <h2>11. Acceptable use and legal compliance</h2>
          <p>Clients must not use our services to violate law, infringe third-party rights, distribute malicious code, misuse personal data, or conduct deceptive or harmful activity. Clients are responsible for the legality and accuracy of their business content, data, instructions and use of delivered solutions. Any specific compliance, security, accessibility, tax or regulatory requirements must be identified and agreed in the project scope.</p>
          <h2>12. Warranties and limitation</h2>
          <p>We will perform agreed services with reasonable care and in accordance with the applicable project agreement. Except for commitments expressly made in writing and rights that cannot lawfully be excluded, general website descriptions do not create additional warranties. To the extent permitted by law, we are not responsible for indirect or consequential losses, business interruption, loss caused by client-provided materials or instructions, or failures of third-party services. Nothing in these terms limits liability or remedies that cannot be limited under applicable law.</p>
          <h2>13. Confidentiality and data</h2>
          <p>Each party should protect confidential information received from the other and use it only for the agreed purpose, subject to the project agreement and legal obligations. Data processing roles, security requirements, access, retention and deletion should be documented separately where a project involves personal or sensitive business data.</p>
          <h2>14. Disputes and governing law</h2>
          <p>These general terms are governed by the laws of India, subject to mandatory applicable law. The parties should first attempt to resolve disputes through good-faith written discussion. Jurisdiction, venue, arbitration or other dispute procedures may be specified in the signed project agreement; nothing here removes a mandatory forum or right under applicable law.</p>
          <h2>15. Changes and contact</h2>
          <p>We may update these general terms for future use. The terms applicable to an existing project are those incorporated into its agreement, subject to law. For enquiries, contact Aarunya Web Solutions at +91 8770607203 by phone or WhatsApp.</p>
        </>}
        <p className="legal-disclaimer">This page provides general business terms and information, not legal advice. Project-specific written agreements and applicable law govern each engagement.</p>
      </div>
    </section>
  );
}

function ProjectEnquiryForm() {
  const [form, setForm] = useState({ name: "", business: "", contact: "", service: "", budget: "", timeline: "", details: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const message = [
      "Hello Aarunya Web Solutions, I would like to discuss a project.",
      "",
      "Name: " + form.name,
      "Business: " + (form.business || "Not provided"),
      "Email or phone: " + form.contact,
      "Service: " + form.service,
      "Budget: " + (form.budget || "Not decided"),
      "Timeline: " + (form.timeline || "Not decided"),
      "Project details: " + (form.details || "To be discussed")
    ].join(String.fromCharCode(10));
    window.open("https://wa.me/918770607203?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  };
  return (
    <form className="project-enquiry-form" onSubmit={submit}>
      <div className="enquiry-form-heading">
        <span className="contact-label">PROJECT ENQUIRY</span>
        <h3>Tell us about your project</h3>
        <p>Share a few details to start the conversation.</p>
      </div>
      <div className="enquiry-form-grid">
        <label>Your name *
          <input name="name" value={form.name} onChange={update} autoComplete="name" required maxLength={100} />
        </label>
        <label>Business name
          <input name="business" value={form.business} onChange={update} autoComplete="organization" maxLength={120} />
        </label>
        <label>Email or phone *
          <input name="contact" type="text" inputMode="text" autoComplete="on" placeholder="Email address or mobile number" value={form.contact} onChange={update} required maxLength={160} />
        </label>
        <label>Service required *
          <select name="service" value={form.service} onChange={update} required>
            <option value="">Choose a service</option>
            <option>Website development</option>
            <option>Mobile application</option>
            <option>E-commerce</option>
            <option>CRM or business software</option>
            <option>AI and automation</option>
            <option>Digital marketing and SEO</option>
            <option>Other / not sure</option>
          </select>
        </label>
        <label>Budget range
          <select name="budget" value={form.budget} onChange={update}>
            <option value="">Select if known</option>
            <option>Below ₹10,000</option>
            <option>₹10,000–₹25,000</option>
            <option>₹25,000–₹50,000</option>
            <option>₹50,000–₹1,00,000</option>
            <option>Above ₹1,00,000</option>
            <option>Need guidance</option>
          </select>
        </label>
        <label>Target timeline
          <select name="timeline" value={form.timeline} onChange={update}>
            <option value="">Select if known</option>
            <option>Within 2 weeks</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>Flexible / planning</option>
          </select>
        </label>
        <label className="enquiry-details">Project requirements
          <textarea name="details" value={form.details} onChange={update} rows="4" maxLength={2000} placeholder="What would you like to build or improve?" />
        </label>
      </div>
      <button className="button button-primary enquiry-submit" type="submit">
        <MessageCircle size={17} /> Continue to WhatsApp <ArrowRight size={17} />
      </button>
      <p className="enquiry-privacy-note">Your brief will be placed in a WhatsApp message for you to review and send. This form does not store your details.</p>
    </form>
  );
}

export default function InnerPage({ path }) {
  const parts = path.split('/').filter(Boolean);
  const section = parts[0] || '';
  const slug = parts[1] || '';
  const service = section === 'services' ? services.find(x => x.slug === slug) : null;
  const product = section === 'products' ? products.find(x => x.slug === slug) : null;
  const isWork = path === "/work";
  const workItem = section === 'work' && slug && slug !== 'billzen' ? works.find(x => x.slug === slug && x.published) : null;
  const isBillzenCaseStudy = path === "/work/billzen";
  const isServices = path === '/services';
  const isProducts = path === '/products';
  const isAbout = path === '/about';
  const isContact = path === '/contact';
  const isPannaLanding = path === '/website-development-panna';
  const isPrivacy = path === '/privacy-policy';
  const isTerms = path === '/terms-of-service';

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
  } else if (isWork) {
    eyebrow = "OUR WORK";
    title = "Digital products shaped around practical problems.";
    description = "Explore products and technology concepts being developed by Aarunya Web Solutions.";
  } else if (workItem) {
    eyebrow = workItem.category.toUpperCase();
    title = workItem.title;
    description = workItem.summary;
  } else if (isBillzenCaseStudy) {
    eyebrow = "PROJECT CASE STUDY";
    title = "BillZen: billing and business management software.";
    description = "Aarunya-built business software bringing billing, inventory and customer workflows into one product experience.";
  } else if (isAbout) {
    eyebrow = 'ABOUT AARUNYA';
    title = 'Useful technology. Clear priorities. Meaningful progress.';
    description = 'Aarunya Web Solutions combines development, design and practical automation to help businesses move forward.';
  } else if (isContact) {
    eyebrow = 'CONTACT';
    title = 'Tell us what you want to build.';
    description = 'Share your goals, the problem you want to solve and what a successful outcome looks like.';
  }

  if (isPrivacy) {
    eyebrow = 'PRIVACY';
    title = 'Privacy Policy';
    description = 'How Aarunya Web Solutions handles enquiries, project information and website data.';
  } else if (isTerms) {
    eyebrow = 'SERVICE TERMS';
    title = 'Terms of Service';
    description = 'General terms for projects, pricing, delivery, intellectual property and ongoing services.';
  }

  if (isPannaLanding) {
    eyebrow = 'WEB DEVELOPMENT IN PANNA';
    title = 'Website Development Company in Panna, Madhya Pradesh';
    description = 'Business websites, e-commerce stores and custom web applications planned around your goals, customers and budget.';
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const notFound = !service && !product && !isServices && !isProducts && !isWork && !workItem && !isBillzenCaseStudy && !isAbout && !isContact && !isPannaLanding && !isPrivacy && !isTerms;

  return (
    <>
      <InnerHeader />
      <main className="inner-page">
      <section className="inner-hero">
        <div className="hero-mesh inner-mesh" aria-hidden="true"><span className="blob blob-one" /><span className="blob blob-two" /></div>
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

      {(isPrivacy || isTerms) && <LegalPage type={isPrivacy ? 'privacy' : 'terms'} />}

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

      {isWork && (
        <section className="section inner-content-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div>
                <h2>Products built around<br /><span className="orange-text">real-world workflows.</span></h2>
              </div>
              <p>A look at our software products, current builds and early-stage technology concepts. Development status and available capabilities are stated transparently.</p>
            </div>
            <div className="products-grid">
              <article className="product-card">
                <div className="product-card-top"><span className="product-tag">LIVE PRODUCT</span></div>
                <h3>BillZen<span className="product-period">.</span></h3>
                <p>Billing and business-management software with GST invoice workflows, inventory, expense tracking and customer-management features.</p>
                <p className="product-note">Public product; feature availability may evolve.</p>
                <a href="/work/billzen">Read the case study <ArrowUpRight size={17} /></a>
                <a href="/products/billzen">Product overview <ArrowUpRight size={17} /></a>
              </article>
              <article className="product-card">
                <div className="product-card-top"><span className="product-tag">IN DEVELOPMENT</span></div>
                <h3>Omni Lead<span className="product-period">.</span></h3>
                <p>A developing business-discovery and lead-generation concept for finding relevant businesses and organising opportunities.</p>
                <p className="product-note">Features and release scope are evolving.</p>
                <a href="/products/omni-lead">Explore the project <ArrowUpRight size={17} /></a>
              </article>
              <article className="product-card">
                <div className="product-card-top"><span className="product-tag">EARLY-STAGE CONCEPT</span></div>
                <h3>ArthaZen<span className="product-period">.</span></h3>
                <p>An early-stage finance and tax technology concept exploring ways to make complex financial workflows easier to understand.</p>
                <p className="product-note">Concept stage; not a tax-filing or financial-advice service.</p>
                <a href="/products/arthazen">Explore the concept <ArrowUpRight size={17} /></a>
              </article>
            </div>
            <div className="detail-copy" style={{marginTop: "36px"}}>
              <h2>Have a practical problem to solve?</h2>
              <p>We also work with businesses on websites, e-commerce, CRM dashboards and custom software.</p>
              <a className="button button-primary" href="/contact">Discuss your project <ArrowRight size={17} /></a>
            </div>
            <WorkGrid />
            <Testimonials />
          </div>
        </section>
      )}

      {workItem && <WorkCaseStudy w={workItem} />}

      {isBillzenCaseStudy && (
        <section className="section inner-content-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> PRODUCT CASE STUDY</div>
                <h2>Bringing everyday<br /><span className="orange-text">business workflows together.</span></h2>
              </div>
              <p>BillZen is an Aarunya Web Solutions product focused on billing and business-management workflows. Its scope and capabilities continue to evolve.</p>
            </div>
            <div className="detail-layout">
              <div className="detail-copy">
                <h2>The product direction</h2>
                <p>Small businesses often need to keep billing, stock, expenses and customer information organised. BillZen is being developed to bring these workflows into one product experience.</p>
                <h3>Development approach</h3>
                <p>BillZen follows a founder-led, iterative development approach: establish practical core workflows, refine the product and communicate feature availability clearly.</p>
                <p>This case study describes the product direction and current scope, not independently verified business outcomes or customer results.</p>
                <a className="button button-primary" href="https://billzen.aarunyawebsolutions.com/landing.html" target="_blank" rel="noopener noreferrer">Visit BillZen <ArrowUpRight size={17} /></a>
              </div>
              <div className="detail-list">
                <div><CheckCircle2 size={19} /><span>GST billing and invoice workflows</span></div>
                <div><CheckCircle2 size={19} /><span>Inventory tracking capabilities</span></div>
                <div><CheckCircle2 size={19} /><span>Expense tracking</span></div>
                <div><CheckCircle2 size={19} /><span>Customer records and limited CRM workflows</span></div>
                <div><CheckCircle2 size={19} /><span>Product development and feature scope may evolve</span></div>
                <a className="text-link" href="/products/billzen">View BillZen product details <ArrowRight size={17} /></a>
                <a className="text-link" href="/work">Back to portfolio <ArrowRight size={17} /></a>
              </div>
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

            <ProjectEnquiryForm />

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
