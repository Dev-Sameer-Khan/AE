import React from "react";
import { motion } from "motion/react";
import Seo from "../components/Seo";

const Privacy = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Seo
        title="Privacy Policy | Ameera Enterprises"
        description="Learn how Ameera Enterprises collects, uses, and protects your information when you contact us or browse this website."
        canonicalPath="/privacy"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-[var(--color-navy)] mb-6"
        >
          Privacy Policy
        </motion.h1>
        <p className="text-sm text-slate-500 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-sm md:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              1. Introduction
            </h2>
            <p>
              Ameera Enterprises respects your privacy. This Privacy Policy
              explains what information we collect, how we use it, and the
              choices you have when you interact with our website or contact us
              via forms, email, or WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Contact details</span> such as
                your name, email address, phone number, and company name when
                you submit an inquiry form or contact us directly.
              </li>
              <li>
                <span className="font-semibold">Business information</span>{" "}
                related to your equipment, part numbers, and requirements that
                you share so we can prepare quotations.
              </li>
              <li>
                <span className="font-semibold">Usage data</span> such as
                general analytics about how the site is accessed (e.g. pages
                visited, approximate location, device type), usually via
                cookies or similar tools.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to your inquiries and provide quotations.</li>
              <li>
                To recommend suitable parts, engines, or compressors based on
                the details you share.
              </li>
              <li>
                To improve our website, content, and user experience over time.
              </li>
              <li>
                To comply with legal obligations, accounting, and record-keeping
                requirements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell your personal data. We may share information with
              trusted logistics providers, OEMs, or distributors only as needed
              to source parts, arrange shipments, or fulfil your request. In
              such cases, we share the minimum information required and expect
              partners to handle it responsibly.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              5. Data Retention
            </h2>
            <p>
              We retain inquiry and order-related information for as long as
              necessary to support our business relationship, maintain proper
              records, and comply with legal obligations. Where possible, we
              minimize or anonymize data that is no longer needed.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              6. Your Choices
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              information by contacting us. If you no longer wish to receive
              communications, you can inform us at any time, and we will update
              our records accordingly.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              7. Security
            </h2>
            <p>
              We use reasonable technical and organizational measures to protect
              your information from unauthorized access, loss, or misuse.
              However, no method of transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external sites (such as mapping
              services, OEMs, or logistics partners). We are not responsible for
              the privacy practices or content of those third-party websites.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              9. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Any updates will
              be posted on this page with an updated “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--color-navy)] mb-2">
              10. Contact
            </h2>
            <p>
              For privacy-related questions or requests, please contact us at{" "}
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

export default Privacy;

