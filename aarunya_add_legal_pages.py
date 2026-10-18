from pathlib import Path

ROOT = Path(__file__).resolve().parent

def read(rel):
    p = ROOT / rel
    return p.read_text(encoding="utf-8")

def write(rel, content):
    (ROOT / rel).write_text(content, encoding="utf-8")

inner = read("src/InnerPage.jsx")
app = read("src/App.jsx")
pre = read("scripts/prerender.mjs")
sitemap = read("public/sitemap.xml")

legal_component = r"""
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
"""

if "function LegalPage({ type })" not in inner:
    anchor = "function ProjectEnquiryForm() {"
    if anchor not in inner:
        raise SystemExit("Could not find ProjectEnquiryForm insertion point.")
    inner = inner.replace(anchor, legal_component + "\n" + anchor, 1)

old = "  const isPannaLanding = path === '/website-development-panna';"
new = old + "\n  const isPrivacy = path === '/privacy-policy';\n  const isTerms = path === '/terms-of-service';"
if "const isPrivacy" not in inner:
    if old not in inner: raise SystemExit("Could not find route flags.")
    inner = inner.replace(old, new, 1)

marker = "  if (isPannaLanding) {"
if "if (isPrivacy)" not in inner:
    legal_titles = """  if (isPrivacy) {
    eyebrow = 'PRIVACY';
    title = 'Privacy Policy';
    description = 'How Aarunya Web Solutions handles enquiries, project information and website data.';
  } else if (isTerms) {
    eyebrow = 'SERVICE TERMS';
    title = 'Terms of Service';
    description = 'General terms for projects, pricing, delivery, intellectual property and ongoing services.';
  }

"""
    if marker not in inner: raise SystemExit("Could not find page title section.")
    inner = inner.replace(marker, legal_titles + marker, 1)

old_nf = "const notFound = !service && !product && !isServices && !isProducts && !isWork && !isBillzenCaseStudy && !isAbout && !isContact && !isPannaLanding;"
new_nf = "const notFound = !service && !product && !isServices && !isProducts && !isWork && !isBillzenCaseStudy && !isAbout && !isContact && !isPannaLanding && !isPrivacy && !isTerms;"
if old_nf in inner:
    inner = inner.replace(old_nf, new_nf, 1)
elif new_nf not in inner:
    raise SystemExit("Could not update not-found condition.")

render_marker = "      {(isServices || isProducts) && ("
if "{(isPrivacy || isTerms) && <LegalPage" not in inner:
    if render_marker not in inner: raise SystemExit("Could not find content render marker.")
    inner = inner.replace(render_marker, "      {(isPrivacy || isTerms) && <LegalPage type={isPrivacy ? 'privacy' : 'terms'} />}\n\n" + render_marker, 1)

footer_anchor = '          <a href="/website-development-panna">Website Development in Panna</a>\n        </div>'
footer_new = footer_anchor + '\n\n        <div className="footer-links">\n          <span>POLICIES</span>\n          <a href="/privacy-policy">Privacy Policy</a>\n          <a href="/terms-of-service">Terms of Service</a>\n        </div>'
if 'href="/privacy-policy"' not in inner:
    if footer_anchor not in inner: raise SystemExit("Could not find inner footer links.")
    inner = inner.replace(footer_anchor, footer_new, 1)

app_anchor = '            <a href="/website-development-panna">Website Development in Panna</a>\n          </div>'
app_new = app_anchor + '\n          <div className="footer-links">\n            <span>POLICIES</span>\n            <a href="/privacy-policy">Privacy Policy</a>\n            <a href="/terms-of-service">Terms of Service</a>\n          </div>'
if 'href="/terms-of-service"' not in app:
    if app_anchor not in app: raise SystemExit("Could not find homepage footer links.")
    app = app.replace(app_anchor, app_new, 1)

if "path: '/privacy-policy'" not in pre:
    meta = """  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Aarunya Web Solutions',
    description: 'Read how Aarunya Web Solutions handles enquiries, project information, website data and privacy requests.'
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Aarunya Web Solutions',
    description: 'Review general terms for Aarunya Web Solutions projects, pricing, delivery, intellectual property, maintenance and refunds.'
  },
"""
    anchor = "  {\n    path: '/contact',"
    if anchor not in pre: raise SystemExit("Could not find prerender contact entry.")
    pre = pre.replace(anchor, meta + anchor, 1)

if "/privacy-policy" not in sitemap:
    entries = """  <url>
    <loc>https://aarunyawebsolutions.com/privacy-policy</loc>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://aarunyawebsolutions.com/terms-of-service</loc>
    <priority>0.3</priority>
  </url>
"""
    sitemap = sitemap.replace("</urlset>", entries + "</urlset>", 1)

# Add focused document styling once.
css = read("src/styles.css")
if ".legal-document" not in css:
    css += """

/* Legal document pages */
.legal-document { max-width: 860px; }
.legal-document h2 { margin: 30px 0 10px; font-size: clamp(19px, 2.4vw, 24px); line-height: 1.35; letter-spacing: -.35px; }
.legal-document p { color: var(--muted); font-size: 15px; line-height: 1.8; overflow-wrap: anywhere; }
.legal-document > p:first-child { padding-bottom: 18px; border-bottom: 1px solid var(--line); }
.legal-document .legal-disclaimer { margin-top: 34px; padding: 16px; border-left: 3px solid var(--orange); background: #f7f9fc; font-size: 13px; }
"""

write("src/InnerPage.jsx", inner)
write("src/App.jsx", app)
write("scripts/prerender.mjs", pre)
write("public/sitemap.xml", sitemap)
write("src/styles.css", css)
print("Updated: InnerPage.jsx, App.jsx, prerender.mjs, sitemap.xml, styles.css")
print("Next: run git diff --check and inspect git diff before committing.")
