export default function LicensePage() {
  return (
    <section className="bg-white text-gray-800 mx-auto mt-0.5 ">
      <div className="p-6 rounded-lg bg-indigo-50">
        <h1 className="mb-10 text-4xl font-bold text-center text-indigo-700">
          Software License Agreement
        </h1>

        <p className="max-w-5xl mx-auto mb-6 text-center">
          This License Agreement ("Agreement") outlines the terms and conditions
          under which you are permitted to use our ERP Software (“Software”). By
          installing, copying, or using the Software, you agree to be bound by
          the terms of this Agreement.
        </p>
      </div>

      <div className="max-w-5xl p-6 mx-auto">
        {/* 1. License Grant */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">1. License Grant</h2>
        <p className="mb-4">
          We grant you a non-exclusive, non-transferable, limited license to
          install and use the Software solely for your internal business
          operations, subject to the terms of this Agreement.
        </p>

        {/* 2. Restrictions */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">2. Restrictions</h2>
        <ul className="pl-6 mb-4 space-y-2 list-disc">
          <li>
            You may not distribute, sublicense, sell, lease, or rent the
            Software to any third party.
          </li>
          <li>
            Reverse engineering, decompiling, or disassembling the Software is
            strictly prohibited.
          </li>
          <li>
            You may not use the Software in any unlawful manner or for any
            unlawful purpose.
          </li>
          <li>
            You may not remove or obscure any copyright or trademark notices.
          </li>
        </ul>

        {/* 3. Ownership */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          3. Ownership & Intellectual Property
        </h2>
        <p className="mb-4">
          The Software is licensed, not sold. All intellectual property rights,
          including copyrights and trade secrets, belong solely to the Company.
          You obtain no ownership rights in the Software.
        </p>

        {/* 4. Support & Updates */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          4. Support & Updates
        </h2>
        <p className="mb-4">
          We may provide support, patches, or updates at our discretion. These
          updates are governed by this Agreement unless accompanied by a
          separate license.
        </p>

        {/* 5. Termination */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">5. Termination</h2>
        <p className="mb-4">
          This Agreement is effective until terminated. It will automatically
          terminate if you fail to comply with any terms. Upon termination, you
          must cease all use and destroy all copies of the Software.
        </p>

        {/* 6. Disclaimer */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          6. Disclaimer of Warranty
        </h2>
        <p className="mb-4">
          The Software is provided "as-is" without warranties of any kind. We
          disclaim all warranties, express or implied, including but not limited
          to merchantability and fitness for a particular purpose.
        </p>

        {/* 7. Limitation of Liability */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          In no event shall the Company be liable for any indirect, incidental,
          or consequential damages arising out of the use of or inability to use
          the Software.
        </p>

        {/* 8. Governing Law */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">8. Governing Law</h2>
        <p className="mb-4">
          This Agreement shall be governed by and interpreted in accordance with
          the laws of India, without regard to its conflict of law principles.
        </p>

        {/* Contact */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">9. Contact</h2>
        <p className="mb-4">
          If you have questions or concerns regarding this License Agreement,
          contact us at:{" "}
          <a
            href="mailto:license@yourcompany.com"
            className="text-blue-600 underline"
          >
            license@yourcompany.com
          </a>
        </p>

        <p className="mt-12 text-sm text-center text-gray-500">
          Last updated: July 11, 2025
        </p>
      </div>
    </section>
  );
}
