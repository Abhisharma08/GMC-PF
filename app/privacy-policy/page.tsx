export const metadata = {
  title: "Privacy Policy | Paradise Furniture",
  description: "How Paradise Furniture collects, uses, and protects customer information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: April 29, 2026</p>

        <p>
          Paradise Furniture collects the information needed to answer enquiries, process orders,
          arrange delivery, and provide customer support. This may include your name, phone number,
          email address, delivery address, city, product interest, and order quantity.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">How We Use Information</h2>
        <p>
          We use customer information to respond to requests, confirm product availability, prepare
          invoices, coordinate shipping, improve our website, and comply with legal obligations.
          We do not sell customer personal information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Sharing Information</h2>
        <p>
          We may share information with service providers such as delivery partners, payment or
          invoice providers, website hosting providers, and professional advisors, but only as
          needed to operate our business and serve customers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Data Security</h2>
        <p>
          We use reasonable administrative and technical safeguards to protect customer information.
          No online system is completely secure, so customers should contact us immediately if they
          believe their information has been misused.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Contact</h2>
        <p>
          For privacy questions or data requests, contact Paradise Furniture at{" "}
          <a className="text-red-700 underline" href="mailto:contact@paradisefurniture.in">
            contact@paradisefurniture.in
          </a>
          {" "}or +91 98181 17790.
        </p>
      </div>
    </div>
  );
}
