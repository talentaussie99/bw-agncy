
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: October 2023</p>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Brickworks Agency ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our recruitment services. We operate in accordance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Apply for a job through our website or partner forms.</li>
              <li>Submit your resume or CV.</li>
              <li>Contact us via email or contact forms.</li>
              <li>Register for our talent pool.</li>
            </ul>
            <p className="mt-4">This information may include your name, email address, phone number, work history, education, and other details relevant to your employment search.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your job applications.</li>
              <li>Match your profile with suitable career opportunities.</li>
              <li>Communicate with you regarding potential roles or administrative updates.</li>
              <li>Improve our services and website functionality.</li>
              <li>Comply with legal and regulatory obligations in Australia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclosure of Information</h2>
            <p>
              We may share your personal information with potential employers (clients) only with your consent for the purpose of recruitment. We do not sell or rent your personal information to third parties. We may disclose information if required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p>
              Under Australian law, you have the right to access the personal information we hold about you and request corrections if it is inaccurate. To exercise these rights, please contact us at <a href="mailto:brickworks.agency@outlook.com" className="text-[#d35400] underline">brickworks.agency@outlook.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>Brickworks Agency</strong><br />
              Email: brickworks.agency@outlook.com<br />
              Location: Australia
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
