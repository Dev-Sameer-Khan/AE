import React from "react";
import { motion } from "motion/react";
import Seo from "../components/Seo";

const Terms = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Seo
        title="Terms & Conditions | Ameera Enterprises"
        description="Read the terms and conditions governing the use of Ameera Enterprises website, product information, and inquiries."
        canonicalPath="/terms"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-[var(--color-navy)] mb-6"
        >
          Terms &amp; Conditions
        </motion.h1>
        <p className="text-sm text-slate-500 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-sm md:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              1. Scope
            </h2>
            <p>
              These Terms &amp; Conditions govern your use of this website and any
              product or service information provided by Ameera Enterprises. By
              accessing or using the site, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              2. Product Information
            </h2>
            <p>
              Product images, descriptions, specifications, and availability are
              provided for general guidance and may change without prior notice.
              OEM names, part numbers, and brands are used for identification
              purposes only. Actual suitability must always be confirmed with our
              sales or technical team before ordering.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              3. Quotes &amp; Pricing
            </h2>
            <p>
              Prices shared via email, WhatsApp, or other channels are
              indicative and may vary due to currency, logistics, duties, and
              inventory. A quote is considered valid only for the period
              mentioned on the quotation document and becomes binding only after
              written confirmation and receipt of agreed advance or full
              payment.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              4. Orders, Shipping &amp; Risk
            </h2>
            <p>
              All orders are subject to stock availability and confirmation from
              Ameera Enterprises. Shipping terms (Incoterms) and delivery
              timelines will be communicated in the quotation or proforma
              invoice. Risk in the goods passes to the buyer as per the agreed
              shipping terms once the shipment is handed over to the carrier or
              cleared from our warehouse.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              5. Warranty &amp; Returns
            </h2>
            <p>
              Warranty, if applicable, is limited to the scope defined by the
              OEM or supplier and does not cover improper installation, misuse,
              or normal wear and tear. Returns are accepted only by prior
              written approval and in unused, resaleable condition, subject to
              inspection and any applicable restocking or logistics charges.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Ameera Enterprises will
              not be liable for any indirect, incidental, or consequential loss,
              including loss of production, downtime, or profit, arising from
              the use of this website or supplied parts. Our total liability in
              any case is limited to the invoiced value of the specific goods in
              question.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              7. Use of Website
            </h2>
            <p>
              You agree not to misuse the website by attempting to gain
              unauthorized access, introducing malicious code, or scraping data.
              We may modify or suspend access to the site at any time for
              maintenance, security, or operational reasons.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              8. Governing Law
            </h2>
            <p>
              These terms are governed by the applicable laws of India. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts in Uttar Pradesh, India, unless otherwise mutually agreed
              in writing.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              9. Contact
            </h2>
            <p>
              For questions regarding these Terms &amp; Conditions, please reach
              us at{" "}
              <a
                href="mailto:contact2ameeraenterprises@gmail.com"
                className="text-[var(--color-orange)] underline"
              >
                contact2ameeraenterprises@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

