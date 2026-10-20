import { ArrowRight, ArrowUpRight, CheckCircle2, Store, ShoppingBag, FileCheck2, PackageCheck, BookOpen, Clock3 } from 'lucide-react';
import './marketplace.css';
import ThemeToggle from './ThemeToggle.jsx';

const marketplaceServices = [
  {
    slug: 'amazon-seller-services',
    name: 'Amazon Seller Support',
    short: 'Get guided through seller onboarding, catalogue preparation and launch readiness.',
    icon: ShoppingBag,
    items: ['Seller account registration guidance and checklist', 'KYC and business-document preparation support', 'Product listing and catalogue setup assistance', 'Launch-readiness checklist and next-step guidance'],
    intro: 'Prepare your Amazon seller setup with a clearer checklist, organised product information and practical launch support.'
  },
  {
    slug: 'flipkart-seller-services',
    name: 'Flipkart Seller Support',
    short: 'Organise onboarding requirements, product data and catalogue readiness.',
    icon: Store,
    items: ['Seller registration and onboarding guidance', 'Business details and documentation checklist', 'Product catalogue and listing support', 'Launch planning and listing-quality review'],
    intro: 'Get help organising the information and product details needed to prepare for selling on Flipkart.'
  },
  {
    slug: 'meesho-seller-services',
    name: 'Meesho Seller Support',
    short: 'Prepare your seller profile and product catalogue with step-by-step assistance.',
    icon: PackageCheck,
    items: ['Seller onboarding guidance and eligibility checklist', 'KYC and required-document preparation support', 'Product information, images and catalogue assistance', 'Launch checklist and seller workflow guidance'],
    intro: 'Make the early steps of starting on Meesho easier to understand, from document preparation to product catalogue readiness.'
  }
];

const articles = [
  {
    slug: 'marketplace-seller-registration-checklist-india',
    category: 'SELLER STARTER GUIDE',
    title: 'Marketplace seller registration in India: a practical preparation checklist',
    description: 'What to organise before beginning seller onboarding on a major Indian marketplace.',
    read: '5 min read',
    sections: [
      ['Start with your business details', 'Keep your business name, contact details and address consistent across the information you provide. The exact requirements depend on the marketplace, seller type, product category and current rules.'],
      ['Prepare documents before you begin', 'Review the marketplace’s current official onboarding checklist. Depending on your circumstances, you may need identity, business, bank, tax or address details. Do not submit inaccurate information or share credentials with an untrusted service provider.'],
      ['Make product data launch-ready', 'Prepare clear product titles, accurate descriptions, specifications, pricing, stock information and compliant images. Check category-specific restrictions before uploading products.'],
      ['Treat approval as a marketplace decision', 'A support service can help organise information and guide you through the process, but the marketplace makes the final eligibility and approval decision. No third party can honestly guarantee approval.']
    ]
  },
  {
    slug: 'product-listing-readiness-checklist',
    category: 'PRODUCT CATALOGUE',
    title: 'A product listing readiness checklist before your marketplace launch',
    description: 'Improve catalogue completeness before publishing products on Amazon, Flipkart or Meesho.',
    read: '4 min read',
    sections: [
      ['Use accurate product titles', 'Include the product type, key differentiator and relevant variant information. Avoid keyword stuffing and claims you cannot substantiate.'],
      ['Prepare clear images', 'Use sharp, well-lit images that follow the marketplace’s current image rules. Show the product accurately and avoid misleading overlays or unsupported claims.'],
      ['Complete specifications and variants', 'Confirm dimensions, materials, quantity, colour, size, compatibility and other details relevant to the category. Ensure variant relationships and stock data are correct.'],
      ['Check pricing, inventory and fulfilment', 'Review price, available quantity, packaging and dispatch expectations before launch. Confirm category-specific compliance and return policies from the marketplace itself.'],
      ['Review before publishing', 'Use a final checklist to catch missing attributes, spelling errors, mismatched images and inconsistent product details. A careful review can reduce avoidable listing rework.']
    ]
  }
];

function SiteHeader() {
  return <header className="market-header"><a className="market-brand" href="/" aria-label="Aarunya Web Solutions home"><img src="/logo-icon.png" alt="" /><span><b>AARUNYA</b><small>WEB SOLUTIONS</small></span></a><nav aria-label="Main navigation"><a href="/services">Services</a><a href="/marketplace-seller-services">Marketplace support</a><a href="/blog">Insights</a><a href="/work">Work</a><a className="market-nav-cta" href="/contact">Talk to us <ArrowUpRight size={15}/></a><ThemeToggle /></nav></header>;
}

function SiteFooter() {
  return <footer className="market-footer">
    <div className="market-footer-main">
      <div className="market-footer-brand"><a className="market-brand" href="/" aria-label="Aarunya Web Solutions home"><img src="/logo-icon.png" alt="" /><span><b>AARUNYA</b><small>WEB SOLUTIONS</small></span></a><p>Building digital experiences and practical business solutions.</p></div>
      <div className="market-footer-links"><span>EXPLORE</span><a href="/services">Services</a><a href="/products">Our products</a><a href="/work">Portfolio</a><a href="/about">About Aarunya</a><a href="/marketplace-seller-services">Seller support</a></div>
      <div className="market-footer-links"><span>INSIGHTS & POLICIES</span><a href="/blog">Insights & guides</a><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-service">Terms of service</a></div>
      <div className="market-footer-links"><span>GET IN TOUCH</span><a href="mailto:info@aarunyawebsolutions.com">Email us</a><a href="tel:+918770607203">+91 87706 07203</a><a href="/contact">Start a project</a></div>
    </div>
    <div className="market-footer-bottom"><span>© {new Date().getFullYear()} Aarunya Web Solutions. All rights reserved.</span><span>Built with purpose. Powered by ideas.</span></div>
  </footer>;
}

function SellerIndex() {
  return <><section className="market-hero"><div className="market-hero-grid"/><div className="market-hero-copy"><span className="market-kicker">MARKETPLACE SELLER SUPPORT</span><h1>From seller setup to a <em>launch-ready catalogue.</em></h1><p>Practical guidance for businesses preparing to sell on Amazon, Flipkart and Meesho. Get help organising onboarding requirements, product information and launch tasks.</p><div className="market-actions"><a className="market-button" href="/contact">Discuss your seller setup <ArrowRight size={17}/></a><a className="market-text-link" href="#seller-platforms">Explore platforms <ArrowUpRight size={16}/></a></div><div className="market-proof"><span><CheckCircle2 size={16}/> Clear preparation checklists</span><span><CheckCircle2 size={16}/> Human-guided support</span><span><CheckCircle2 size={16}/> No guaranteed-approval claims</span></div></div><div className="market-hero-visual"><div className="market-orbit market-orbit-a"/><div className="market-orbit market-orbit-b"/><div className="market-center"><Store size={45}/><b>SELLER<br/>READY</b></div><div className="market-float market-float-a"><FileCheck2 size={19}/><span><b>Documents</b><small>Prepare & review</small></span></div><div className="market-float market-float-b"><PackageCheck size={19}/><span><b>Product catalogue</b><small>Organise & check</small></span></div></div></section>
  <section className="market-section" id="seller-platforms"><div className="market-section-heading"><span className="market-kicker">CHOOSE YOUR PLATFORM</span><h2>Seller support that starts with <em>the right next step.</em></h2><p>Choose a marketplace to explore the areas where we can help. Requirements vary by seller type, product category and marketplace policy.</p></div><div className="market-platform-grid">{marketplaceServices.map((item,i)=>{const Icon=item.icon;return <article className="market-platform-card" key={item.slug}><div className="market-card-top"><span className="market-card-icon"><Icon size={23}/></span><span>0{i+1}</span></div><h3>{item.name}</h3><p>{item.short}</p><ul>{item.items.slice(0,3).map(point=><li key={point}><CheckCircle2 size={15}/>{point}</li>)}</ul><a href={'/'+item.slug}>Explore support <ArrowUpRight size={17}/></a></article>})}</div></section>
  <section className="market-process"><div><span className="market-kicker">A CLEAR PROCESS</span><h2>Get organised before you <em>go live.</em></h2><p>We help you work through the preparation tasks without promising outcomes controlled by a marketplace.</p></div><div className="market-steps"><article><b>01</b><h3>Understand your setup</h3><p>Discuss your business, product category, target marketplace and current stage.</p></article><article><b>02</b><h3>Prepare the essentials</h3><p>Organise documents, product data and onboarding details against current official requirements.</p></article><article><b>03</b><h3>Review launch readiness</h3><p>Check catalogue completeness and identify the next actions before you submit or publish.</p></article></div></section>
  <section className="market-disclaimer"><FileCheck2 size={23}/><div><b>Important to know</b><p>We provide preparation and process assistance. Marketplace eligibility, KYC verification, account approval, listing acceptance and seller performance decisions remain with the respective platform. Requirements can change, so always verify them in the marketplace’s official seller portal.</p></div></section>
  <section className="market-cta"><div><span className="market-kicker">READY TO GET STARTED?</span><h2>Make your seller setup <em>less confusing.</em></h2><p>Tell us which marketplace you’re targeting and where you need help.</p></div><a className="market-button market-button-light" href="/contact">Discuss your requirements <ArrowRight size={17}/></a></section>
  </>;
}

function SellerDetail({ item }) {
  const Icon = item.icon;
  return <><section className="market-hero market-detail-hero"><div className="market-hero-grid"/><div className="market-hero-copy"><a className="market-back" href="/marketplace-seller-services">← All marketplace seller services</a><span className="market-kicker">MARKETPLACE SELLER SUPPORT</span><h1>{item.name}, with <em>a clearer plan.</em></h1><p>{item.intro}</p><div className="market-actions"><a className="market-button" href="/contact">Ask about seller support <ArrowRight size={17}/></a><a className="market-text-link" href="#support-includes">See what’s included <ArrowUpRight size={16}/></a></div><div className="market-proof"><span><CheckCircle2 size={16}/> Preparation support</span><span><CheckCircle2 size={16}/> Product catalogue guidance</span></div></div><div className="market-detail-visual"><div className="market-detail-icon"><Icon size={54}/></div><span>SELLER SETUP</span><b>Prepare. Review. Progress.</b><div className="market-detail-line"/></div></section>
  <section className="market-section" id="support-includes"><div className="market-section-heading"><span className="market-kicker">HOW WE CAN HELP</span><h2>Support for the steps <em>you can prepare.</em></h2><p>We help organise the work and explain the next steps. The marketplace controls its own approval and verification decisions.</p></div><div className="market-includes">{item.items.map((point,i)=><article key={point}><span>0{i+1}</span><CheckCircle2 size={20}/><h3>{point}</h3><p>Practical assistance tailored to your business and current onboarding stage.</p></article>)}</div></section>
  <section className="market-faq"><span className="market-kicker">COMMON QUESTIONS</span><h2>Before you begin</h2><details><summary>Can you guarantee seller account approval?</summary><p>No. The marketplace makes the final eligibility, KYC and approval decisions. We can help you prepare and organise the information requested, but cannot guarantee approval.</p></details><details><summary>Will I need GST or other business documents?</summary><p>Requirements depend on the marketplace, your business type, product category and applicable rules. We help you review the current checklist, but you should confirm your specific obligations with the marketplace and a qualified tax professional when needed.</p></details><details><summary>Can you help after registration?</summary><p>We can discuss product catalogue preparation, listing content, launch checklists and other agreed setup tasks. The exact scope is confirmed before work begins.</p></details></section>
  <section className="market-cta"><div><span className="market-kicker">NEXT STEP</span><h2>Let’s review your <em>seller setup.</em></h2><p>Share your marketplace, product category and what you have completed so far.</p></div><a className="market-button market-button-light" href="/contact">Contact Aarunya <ArrowRight size={17}/></a></section></>;
}

function BlogIndex() {
 return <><section className="market-hero market-blog-hero"><div className="market-hero-grid"/><div className="market-hero-copy"><span className="market-kicker">AARUNYA INSIGHTS</span><h1>Useful guidance for <em>building and growing.</em></h1><p>Practical notes on websites, digital operations and marketplace readiness. Clear steps, realistic expectations and no magic-button promises.</p></div><div className="market-blog-art"><BookOpen size={78}/><span>IDEAS INTO ACTION</span></div></section><section className="market-section"><div className="market-section-heading"><span className="market-kicker">LATEST GUIDES</span><h2>Start with a <em>useful checklist.</em></h2></div><div className="market-article-grid">{articles.map((article,i)=><article key={article.slug} className="market-article-card"><div className="market-article-art"><span>0{i+1}</span><BookOpen size={30}/></div><span className="market-kicker">{article.category}</span><h3>{article.title}</h3><p>{article.description}</p><div className="market-article-meta"><span><Clock3 size={14}/>{article.read}</span><a href={'/blog/'+article.slug}>Read article <ArrowUpRight size={16}/></a></div></article>)}</div></section><section className="market-cta"><div><span className="market-kicker">HAVE A QUESTION?</span><h2>Let’s find your <em>next best step.</em></h2><p>Talk to us about your website, software or seller setup needs.</p></div><a className="market-button market-button-light" href="/contact">Contact us <ArrowRight size={17}/></a></section></>;
}

function ArticlePage({ article }) {
 return <><section className="market-article-hero"><a className="market-back" href="/blog">← Back to insights</a><span className="market-kicker">{article.category}</span><h1>{article.title}</h1><p>{article.description}</p><span className="market-read-time"><Clock3 size={15}/>{article.read}</span></section><article className="market-article-body"><p className="market-article-intro">{article.description}</p>{article.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<aside><b>Need help preparing your marketplace setup?</b><p>We can help you organise your checklist and catalogue tasks. Final eligibility and approval decisions remain with the marketplace.</p><a className="market-button" href="/marketplace-seller-services">Explore seller support <ArrowRight size={16}/></a></aside></article></>;
}

export default function MarketplacePages({ path }) {
 const cleanPath = path.replace(/\/+$/, '') || '/';
 const item = marketplaceServices.find(x => '/'+x.slug === cleanPath);
 const article = articles.find(x => '/blog/'+x.slug === cleanPath);
 let content;
 if (cleanPath === '/marketplace-seller-services') content = <SellerIndex/>;
 else if (item) content = <SellerDetail item={item}/>;
 else if (cleanPath === '/blog') content = <BlogIndex/>;
 else if (article) content = <ArticlePage article={article}/>;
 else content = <section className="market-article-hero"><h1>Page not found</h1><a href="/">Return home</a></section>;
 return <div className="market-site"><SiteHeader/><main>{content}</main><SiteFooter/></div>;
}
