export const metadata = {
  title: "Return & Refund Policy | Paradise Furniture",
  description: "Return and refund guidelines.",
};

export default function ReturnPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">

      <h1 className="text-4xl font-extrabold mb-6">
        Return & Refund Policy
      </h1>

      <p className="text-sm text-muted-foreground mb-8">
        Last updated: June 12, 2025
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Return Eligibility
      </h2>
      <p className="mb-4">
        Returns are accepted within 7 days for damaged or incorrect items.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Non-Returnable Items
      </h2>
      <p className="mb-4">
        Customized or used products are not eligible for returns.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Refunds
      </h2>
      <p className="mb-4">
        Refunds are processed within 5–10 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Cancellation
      </h2>
      <p className="mb-4">
        Orders can only be canceled before shipment.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact
      </h2>
      <p>contact@paradisefurniture.in</p>

    </div>
    </div>
  );
}