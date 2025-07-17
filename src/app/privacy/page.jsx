export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto mt-0.5 text-gray-800 bg-white">
      <div className="p-6 rounded-lg bg-indigo-50">
        <h1 className="mb-10 text-4xl font-bold text-center text-indigo-700">
          Privacy Policy
        </h1>

        <p className="max-w-5xl mx-auto mb-6 text-center">
          This Privacy Policy outlines how we collect, use, and protect your
          information when you use our ERP software and related services.
        </p>
      </div>

      <div className="max-w-5xl p-6 mx-auto">
        {/* 1. Information Collection */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          1. Information We Collect
        </h2>
        <ul className="pl-6 mb-4 space-y-2 list-disc">
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
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="pl-6 mb-4 space-y-2 list-disc">
          <li>To provide and maintain the ERP services.</li>
          <li>To improve functionality and user experience.</li>
          <li>To communicate with you (support, updates, billing).</li>
          <li>To comply with legal obligations.</li>
        </ul>

        {/* 3. Data Sharing */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          3. Data Sharing & Disclosure
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal data. We may share it only with:
        </p>
        <ul className="pl-6 mb-4 space-y-2 list-disc">
          <li>Trusted service providers under confidentiality agreements.</li>
          <li>Government or legal bodies if required by law.</li>
          <li>In connection with a merger, acquisition, or sale of assets.</li>
        </ul>

        {/* 4. Cookies */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          4. Cookies & Tracking
        </h2>
        <p className="mb-4">
          Our site may use cookies to enhance user experience, remember
          preferences, and analyze usage. You can manage cookie settings in your
          browser at any time.
        </p>

        {/* 5. Data Security */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your data against unauthorized access, alteration, disclosure,
          or destruction.
        </p>

        {/* 6. Data Retention */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">6. Data Retention</h2>
        <p className="mb-4">
          We retain your information as long as your account is active or as
          needed to provide services, comply with legal obligations, or resolve
          disputes.
        </p>

        {/* 7. Your Rights */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          7. Your Rights & Choices
        </h2>
        <ul className="pl-6 mb-4 space-y-2 list-disc">
          <li>Access, update, or delete your personal data.</li>
          <li>Opt out of non-essential communications.</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>

        {/* 8. Children's Privacy */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          8. Children's Privacy
        </h2>
        <p className="mb-4">
          Our services are not intended for users under the age of 13. We do not
          knowingly collect personal data from children without parental
          consent.
        </p>

        {/* 9. Changes to Policy */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          9. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy occasionally. We'll notify you of
          any material changes by updating the “Last updated” date below or by
          other means as appropriate.
        </p>

        {/* 10. Contact */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">10. Contact Us</h2>
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

        <p className="mt-12 text-sm text-center text-gray-500">
          Last updated: July 11, 2025
        </p>
      </div>
    </section>
  );
}
