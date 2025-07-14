export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white text-gray-800 mx-auto">
      <div className="bg-indigo-50 rounded-lg p-6">
        <h1 className="text-4xl font-bold text-indigo-700 text-center mb-10">
          Privacy Policy
        </h1>

        <p className="max-w-5xl mx-auto text-center mb-6">
          This Privacy Policy outlines how we collect, use, and protect your
          information when you use our ERP software and related services.
        </p>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        {/* 1. Information Collection */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            company name, etc.
          </li>
          <li>
            <strong>Account Data:</strong> Login credentials and preferences.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, features used, and
            access times.
          </li>
          <li>
            <strong>Device Information:</strong> IP address, browser type, and
            OS.
          </li>
        </ul>

        {/* 2. How We Use Information */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To provide and maintain the ERP services.</li>
          <li>To improve functionality and user experience.</li>
          <li>To communicate with you (support, updates, billing).</li>
          <li>To comply with legal obligations.</li>
        </ul>

        {/* 3. Data Sharing */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          3. Data Sharing & Disclosure
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal data. We may share it only with:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Trusted service providers under confidentiality agreements.</li>
          <li>Government or legal bodies if required by law.</li>
          <li>In connection with a merger, acquisition, or sale of assets.</li>
        </ul>

        {/* 4. Cookies */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Cookies & Tracking
        </h2>
        <p className="mb-4">
          Our site may use cookies to enhance user experience, remember
          preferences, and analyze usage. You can manage cookie settings in your
          browser at any time.
        </p>

        {/* 5. Data Security */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your data against unauthorized access, alteration, disclosure,
          or destruction.
        </p>

        {/* 6. Data Retention */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Data Retention</h2>
        <p className="mb-4">
          We retain your information as long as your account is active or as
          needed to provide services, comply with legal obligations, or resolve
          disputes.
        </p>

        {/* 7. Your Rights */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          7. Your Rights & Choices
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Access, update, or delete your personal data.</li>
          <li>Opt out of non-essential communications.</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>

        {/* 8. Children's Privacy */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          8. Children's Privacy
        </h2>
        <p className="mb-4">
          Our services are not intended for users under the age of 13. We do not
          knowingly collect personal data from children without parental
          consent.
        </p>

        {/* 9. Changes to Policy */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          9. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy occasionally. We'll notify you of
          any material changes by updating the “Last updated” date below or by
          other means as appropriate.
        </p>

        {/* 10. Contact */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          contact us at:{" "}
          <a
            href="mailto:support@erpcompany.com"
            className="text-blue-600 underline"
          >
            support@erpcompany.com
          </a>
        </p>

        <p className="text-sm text-gray-500 mt-12 text-center">
          Last updated: July 11, 2025
        </p>
      </div>
    </section>
  );
}
