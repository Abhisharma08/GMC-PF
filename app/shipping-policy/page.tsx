export const metadata = {
  title: "Shipping Policy | Paradise Furniture",
  description: "Shipping details and delivery timelines.",
};

export default function ShippingPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">

      <h1 className="text-4xl font-extrabold mb-6">
        Shipping Policy
      </h1>

      <p className="text-sm text-muted-foreground mb-8">
        Last updated: June 12, 2025
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Order Processing
      </h2>
      <p className="mb-4">
        Orders are processed within 2–5 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Delivery Time
      </h2>
      <p className="mb-4">
        Delivery typically takes 5–10 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Shipping Charges
      </h2>
      <p className="mb-4">
        Shipping charges are calculated at checkout.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Tracking
      </h2>
      <p className="mb-4">
        Tracking details will be shared after dispatch.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact
      </h2>
      <p>contact@paradisefurniture.in</p>

    </div>
    </div>
  );
}