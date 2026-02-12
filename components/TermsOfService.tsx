
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last Updated: October 2023</p>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Brickworks Agency website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Description</h2>
            <p>
              Brickworks Agency provides recruitment, talent acquisition, and workforce solutions specializing in the Australian construction and industrial sectors. Our website allows users to view job opportunities, submit applications, and learn about our consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
            <p>When using our website, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information in all forms and applications.</li>
              <li>Not use the website for any unlawful purpose.</li>
              <li>Maintain the confidentiality of any communication between you and Brickworks Agency.</li>
              <li>Not attempt to interfere with the proper working of the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Brickworks Agency or its content suppliers and is protected by Australian and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p>
              Brickworks Agency will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services. While we strive for excellence, we do not guarantee employment or specific outcomes for candidates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State and Commonwealth of Australia. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Australia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:<br />
              <strong>Brickworks Agency</strong><br />
              Email: brickworks.agency@outlook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
