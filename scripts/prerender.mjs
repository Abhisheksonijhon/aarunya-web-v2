import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = 'https://aarunyawebsolutions.com';

const pages = [
  {
    path: '/',
    title: 'Aarunya Web Solutions | Digital Products, Websites & AI Solutions',
    description: 'Aarunya Web Solutions, based in Panna, India, builds websites, business software, digital products and practical AI-powered solutions.'
  },
  {
    path: '/services',
    title: 'Digital Services | Aarunya Web Solutions',
    description: 'Explore web development, mobile applications, AI automation, custom software, UI/UX design and digital growth services.'
  },
  {
    path: '/services/web-development',
    title: 'Web Development | Aarunya Web Solutions',
    description: 'Responsive business websites, landing pages and web applications built around your business goals.'
  },
  {
    path: '/website-development-panna',
    title: 'Website Development Company in Panna | Aarunya Web Solutions',
    description: 'Looking for website development in Panna, Madhya Pradesh? Aarunya Web Solutions builds business websites, e-commerce stores and custom web applications.'
  },
  {
    path: '/services/mobile-apps',
    title: 'Mobile App Development | Aarunya Web Solutions',
    description: 'Plan and build useful mobile application experiences with focused MVP scope, API integration and responsive interfaces.'
  },
  {
    path: '/services/ai-automation',
    title: 'AI & Automation | Aarunya Web Solutions',
    description: 'Explore practical AI assistants, model integration and automated business workflows with human oversight and cost controls.'
  },
  {
    path: '/services/custom-software',
    title: 'Custom Business Software | Aarunya Web Solutions',
    description: 'Custom CRM, ERP, dashboards and business tools designed around your operational workflows and reporting needs.'
  },
  {
    path: '/services/ui-ux-design',
    title: 'UI/UX Design | Aarunya Web Solutions',
    description: 'User flows, wireframes and responsive design systems that make digital products clearer and easier to use.'
  },
  {
    path: '/services/digital-marketing',
    title: 'Digital Marketing & SEO | Aarunya Web Solutions',
    description: 'Improve digital visibility with technical SEO, local search, useful content, social media and focused campaigns.'
  },
  {
    path: "/services/e-commerce",
    title: "E-commerce Website Development | Aarunya Web Solutions",
    description: "Plan a responsive online store with product catalogues, checkout integration, inventory workflows and search-friendly foundations."
  },
  {
    path: "/services/crm-dashboards",
    title: "CRM & Business Dashboards | Aarunya Web Solutions",
    description: "Organise customer records, lead follow-ups and business reporting with CRM tools and dashboards tailored to your workflows."
  },
  {
    path: '/products',
    title: 'Our Digital Products | Aarunya Web Solutions',
    description: 'Explore BillZen, Omni Lead in development and ArthaZen in early planning.'
  },
  {
    path: '/products/billzen',
    title: 'BillZen Billing Software | Aarunya Web Solutions',
    description: 'Explore BillZen billing and business management, including GST invoice workflows, inventory, expense tracking and customer records.'
  },
  {
    path: '/products/omni-lead',
    title: 'Omni Lead | Aarunya Web Solutions',
    description: 'Learn about Omni Lead, an in-development concept for business discovery, listings and lead-generation workflows.'
  },
  {
    path: '/products/arthazen',
    title: 'ArthaZen Finance Technology Concept | Aarunya Web Solutions',
    description: 'Discover ArthaZen, an early-stage concept exploring AI-assisted financial workflows and tax technology.'
  },
  {
    path: '/work',
    title: 'Portfolio & Digital Product Work | Aarunya Web Solutions',
    description: 'Explore BillZen, Omni Lead and ArthaZen: business software and digital product concepts developed by Aarunya Web Solutions.'
  },
  {
    path: '/work/billzen',
    title: 'BillZen Case Study | Aarunya Web Solutions',
    description: 'Explore BillZen, an Aarunya-built business product covering billing, inventory, expenses and customer-management workflows.'
  },
  {
    path: '/about',
    title: 'About Aarunya Web Solutions | Panna, India',
    description: 'Learn about Aarunya Web Solutions, based in Panna, Madhya Pradesh, working across software, design and digital growth.'
  },
  {
    path: '/contact',
    title: 'Contact Aarunya Web Solutions | Start a Project',
    description: 'Contact Aarunya Web Solutions about websites, software, AI automation, mobile applications or digital growth projects.'
  }
];

function replaceMeta(html, selector, replacement) {
  const expression = new RegExp(
    '<meta(?=[^>]*' + selector + ')[^>]*>',
    'i'
  );
  return html.replace(expression, replacement);
}

function metadata(html, page) {
  const escape = value => value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

  const title = escape(page.title);
  const description = escape(page.description);
  const url = escape(origin + page.path);

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    '<title>' + title + '</title>'
  );

  html = replaceMeta(
    html, 'name="description"',
    '<meta name="description" content="' + description + '" />'
  );

  html = replaceMeta(
    html, 'property="og:title"',
    '<meta property="og:title" content="' + title + '" />'
  );

  html = replaceMeta(
    html, 'property="og:description"',
    '<meta property="og:description" content="' + description + '" />'
  );

  html = replaceMeta(
    html, 'property="og:url"',
    '<meta property="og:url" content="' + url + '" />'
  );

  html = replaceMeta(
    html, 'name="twitter:title"',
    '<meta name="twitter:title" content="' + title + '" />'
  );

  html = replaceMeta(
    html, 'name="twitter:description"',
    '<meta name="twitter:description" content="' + description + '" />'
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/i,
    '<link rel="canonical" href="' + url + '" />'
  );

  return html;
}

const vite = await createServer({
  configFile: './vite.config.js',
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error'
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  const template = await readFile(
    path.resolve('dist/index.html'),
    'utf8'
  );

  for (const page of pages) {
    const markup = renderToString(
      React.createElement(App, { initialPath: page.path })
    );

    let html = template.replace(
      '<div id="root"></div>',
      '<div id="root">' + markup + '</div>'
    );

    html = metadata(html, page);

    const directory = page.path === '/'
      ? path.resolve('dist')
      : path.resolve('dist', page.path.slice(1));

    await mkdir(directory, { recursive: true });

    await writeFile(
      path.join(directory, 'index.html'),
      html,
      'utf8'
    );

    console.log('Prerendered:', page.path);
  }

  const notFoundMarkup = renderToString(
    React.createElement(App, { initialPath: '/this-page-does-not-exist' })
  );

  let notFoundHtml = template.replace(
    '<div id="root"></div>',
    '<div id="root">' + notFoundMarkup + '</div>'
  );

  notFoundHtml = metadata(notFoundHtml, {
    path: '/404',
    title: 'Page Not Found | Aarunya Web Solutions',
    description: 'The requested page could not be found. Explore Aarunya Web Solutions services and products.'
  });

  notFoundHtml = replaceMeta(
    notFoundHtml,
    'name="robots"',
    '<meta name="robots" content="noindex, follow" />'
  );

  await writeFile(
    path.resolve('dist/404.html'),
    notFoundHtml,
    'utf8'
  );

  console.log('Prerendered: custom 404 page');
} finally {
  await vite.close();
}
