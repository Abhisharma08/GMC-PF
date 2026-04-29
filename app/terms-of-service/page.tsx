export const metadata = {
  title: "Terms of Service | Paradise Furniture",
  description: "Terms and conditions of using Paradise Furniture online services.",
};

export default function TermsOfService() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans space-y-6">
        <h1 className="text-4xl font-extrabold">Terms of Service</h1>
        <p className="text-sm text-gray-500">Last updated: April 29, 2026</p>

        <p>By accessing and using the Paradise Furniture website, you agree to these Terms of Service.</p>

        <h2 className="text-2xl font-semibold pt-4">Use of Website</h2>
        <p>
          You agree to use our website only for lawful purposes and not engage in activity that
          disrupts the service or misuses our content, forms, or product information.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Orders & Product Availability</h2>
        <p>
          Product prices, availability, and delivery timelines are confirmed before order completion.
          We may contact you to verify order details before dispatch.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Payments</h2>
        <p>
          Payment terms are communicated during order confirmation. Orders may be paid through the
          available payment methods, invoice, or other agreed method.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Intellectual Property</h2>
        <p>
          Product images, text, branding, and website content are owned by or licensed to Paradise
          Furniture and may not be reused without permission.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Liability</h2>
        <p>
          To the maximum extent permitted by law, Paradise Furniture is not responsible for indirect,
          incidental, or consequential losses arising from use of the website.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Contact</h2>
        <p>contact@paradisefurniture.in | +91 98181 17790</p>
      </div>
    </div>
  );
}
