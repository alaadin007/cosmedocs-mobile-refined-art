import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Cosmedocs — Harley Street</title>
        <meta
          name="description"
          content="How Cosmedocs collects, uses, stores and protects your personal and medical data under UK GDPR and the Data Protection Act 2018."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/privacy-policy/" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <main className="treatment-page bg-white text-neutral-900">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A050] mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-sm text-neutral-500 mb-10">Last updated: 17 July 2026</p>

          <div className="prose prose-neutral max-w-none prose-headings:font-light prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-p:leading-relaxed">
            <p>
              Cosmedocs (“we”, “us”, “our”) is a doctor-led aesthetic medicine clinic based at
              8–10 Harley Street, London W1G 9PF. We are committed to protecting your personal and
              medical information in line with the UK General Data Protection Regulation (UK GDPR),
              the Data Protection Act 2018 and guidance from the Information Commissioner’s Office (ICO).
            </p>

            <h2>1. Who we are (Data Controller)</h2>
            <p>
              CosmeDocs Ltd is the data controller for personal data collected through this website,
              our consultation forms, our clinic systems and our communications. For CQC-regulated
              medical procedures we work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF, who
              acts as controller for the clinical record for those specific treatments.
            </p>

            <h2>2. What data we collect</h2>
            <ul>
              <li>Identity &amp; contact: name, email, phone, address, country.</li>
              <li>Clinical information you provide: medical history, medications, allergies, photos submitted for consultation.</li>
              <li>Appointment &amp; treatment records where you become a patient.</li>
              <li>Website usage: IP address, device, browser, pages visited, referrer, and analytics cookies (see our <Link to="/cookie-policy/">Cookie Policy</Link>).</li>
              <li>Communications: messages, WhatsApp enquiries, contact-form submissions and email correspondence.</li>
            </ul>

            <h2>3. How we use your data (Lawful basis)</h2>
            <ul>
              <li><strong>Consent</strong> — marketing emails, optional analytics cookies, AI face-scan uploads.</li>
              <li><strong>Contract</strong> — booking and delivering the treatment you have requested.</li>
              <li><strong>Legal obligation</strong> — medical record retention, tax and accounting.</li>
              <li><strong>Legitimate interests</strong> — clinic safety, fraud prevention, improving our website and services.</li>
              <li><strong>Explicit consent (Article 9)</strong> — processing of health data for medical treatment.</li>
            </ul>

            <h2>4. Sharing your data</h2>
            <p>We only share personal data where necessary and with appropriate safeguards:</p>
            <ul>
              <li>Our clinicians, nurses and administrative staff working on your care.</li>
              <li>PrivaDr Ltd for CQC-regulated procedures.</li>
              <li>Regulated third-party processors: secure hosting, email, SMS/WhatsApp Business, payment providers, appointment software, analytics.</li>
              <li>Regulators (GMC, CQC, ICO) or law enforcement where legally required.</li>
            </ul>
            <p>We do not sell your personal data.</p>

            <h2>5. International transfers</h2>
            <p>
              Some processors (e.g. hosting, analytics) may transfer data outside the UK. Where they do,
              we rely on UK adequacy regulations or Standard Contractual Clauses with additional safeguards.
            </p>

            <h2>6. How long we keep your data</h2>
            <ul>
              <li>Clinical records: retained for a minimum of 8 years after last contact, in line with NHS and GMC guidance.</li>
              <li>Enquiry-only contacts: up to 24 months, then deleted or anonymised.</li>
              <li>Financial records: 6 years (HMRC).</li>
              <li>Website analytics: 14 months (GA4 default).</li>
            </ul>

            <h2>7. Security</h2>
            <p>
              We use HTTPS across the site, restricted-access clinical systems, encrypted backups,
              staff confidentiality obligations and a documented breach-response process.
            </p>

            <h2>8. Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul>
              <li>Access a copy of your data (Subject Access Request).</li>
              <li>Correct inaccurate data.</li>
              <li>Request erasure (subject to medical retention rules).</li>
              <li>Restrict or object to processing.</li>
              <li>Data portability.</li>
              <li>Withdraw consent for marketing at any time.</li>
              <li>Complain to the ICO — <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</li>
            </ul>

            <h2>9. Contact</h2>
            <p>
              To exercise any right, or for privacy questions, contact us at
              {" "}<a href="mailto:info@cosmedocs.com">info@cosmedocs.com</a> or write to:
              Data Protection, CosmeDocs Ltd, 8–10 Harley Street, London W1G 9PF, United Kingdom.
            </p>

            <p className="text-sm text-neutral-500 italic mt-12">
              See also our <Link to="/cookie-policy/">Cookie Policy</Link>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
