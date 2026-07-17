import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Cosmedocs — Harley Street</title>
        <meta
          name="description"
          content="How Cosmedocs uses cookies and similar technologies on cosmedocs.com — what they do, why we use them and how to control them."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/cookie-policy/" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <main className="treatment-page bg-white text-neutral-900">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A050] mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-sm text-neutral-500 mb-10">Last updated: 17 July 2026</p>

          <div className="prose prose-neutral max-w-none prose-headings:font-light prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-p:leading-relaxed">
            <p>
              This Cookie Policy explains how CosmeDocs Ltd uses cookies and similar technologies
              on <strong>cosmedocs.com</strong>. It should be read alongside our{" "}
              <Link to="/privacy-policy/">Privacy Policy</Link>. It complies with the UK Privacy and
              Electronic Communications Regulations (PECR) and UK GDPR.
            </p>

            <h2>1. What cookies are</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow
              the site to remember your actions and preferences over time and help us understand how
              the site is used.
            </p>

            <h2>2. Categories of cookies we use</h2>

            <h3 className="text-lg font-medium mt-8">Strictly necessary</h3>
            <p>
              Required for the site to work — routing, security, load balancing, remembering that you
              have accepted cookies. These cannot be switched off.
            </p>

            <h3 className="text-lg font-medium mt-8">Analytics (optional — consent required)</h3>
            <ul>
              <li><strong>Google Analytics 4</strong> (<code>_ga</code>, <code>_ga_*</code>) — aggregated visitor statistics. Retention: up to 14 months.</li>
            </ul>

            <h3 className="text-lg font-medium mt-8">Marketing (optional — consent required)</h3>
            <ul>
              <li><strong>Google Ads</strong> — conversion measurement for our advertising.</li>
              <li><strong>Meta / Instagram pixels</strong> — where enabled for specific campaigns.</li>
            </ul>

            <h3 className="text-lg font-medium mt-8">Functional</h3>
            <p>
              Remember preferences such as language selection, region and previously dismissed banners.
            </p>

            <h2>3. Third-party cookies</h2>
            <p>
              Some cookies are set by third parties acting as processors (Google, Meta, WhatsApp
              Business, our booking software). We do not control every cookie those services set —
              please see their own policies for details.
            </p>

            <h2>4. Managing your preferences</h2>
            <ul>
              <li>Use the cookie banner shown on your first visit to accept or reject non-essential cookies.</li>
              <li>You can clear or block cookies at any time in your browser settings.</li>
              <li>For Google Analytics opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.</li>
            </ul>
            <p>
              Blocking strictly necessary cookies may prevent parts of the site from working.
            </p>

            <h2>5. Changes to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time. The “last updated” date at the top
              of this page shows when it was most recently revised.
            </p>

            <h2>6. Contact</h2>
            <p>
              Questions about cookies? Email{" "}
              <a href="mailto:info@cosmedocs.com">info@cosmedocs.com</a> or write to:
              Data Protection, CosmeDocs Ltd, 8–10 Harley Street, London W1G 9PF, United Kingdom.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
