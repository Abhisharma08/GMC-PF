export const metadata = {
  title: "Shipping Policy | Paradise Furniture",
  description: "Shipping details and delivery timelines for Paradise Furniture.",
};

export default function ShippingPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans space-y-6">
        <h1 className="text-4xl font-extrabold">Shipping Policy</h1>
        <p className="text-sm text-gray-500">Last updated: April 29, 2026</p>

        <h2 className="text-2xl font-semibold pt-4">Order Processing</h2>
        <p>
          Orders are processed within 2 to 5 business days after confirmation and product
          availability checks.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Delivery Time</h2>
        <p>
          Delivery typically takes 5 to 10 business days after dispatch, depending on destination
          and logistics availability.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Shipping Charges</h2>
        <p>
          Shipping charges, if applicable, are shared before order confirmation or included in the
          invoice.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Tracking</h2>
        <p>Dispatch and tracking details will be shared by email, phone, or WhatsApp after shipment.</p>

        <h2 className="text-2xl font-semibold pt-4">Contact</h2>
        <p>contact@paradisefurniture.in | +91 98181 17790</p>
      </div>
    </div>
  );
}
