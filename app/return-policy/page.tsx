export const metadata = {
  title: "Return & Refund Policy | Paradise Furniture",
  description: "Return and refund guidelines for Paradise Furniture orders.",
};

export default function ReturnPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans space-y-6">
        <h1 className="text-4xl font-extrabold">Return & Refund Policy</h1>
        <p className="text-sm text-gray-500">Last updated: April 29, 2026</p>

        <h2 className="text-2xl font-semibold pt-4">Return Eligibility</h2>
        <p>
          Returns are accepted within 7 days of delivery for damaged, defective, or incorrect items.
          Please contact us with your order details, photos of the issue, and the delivery date.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Non-Returnable Items</h2>
        <p>
          Customized products, made-to-order items, and products damaged after delivery are not
          eligible for return unless they arrive damaged, defective, or incorrect.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Refunds</h2>
        <p>
          Approved refunds are processed within 5 to 10 business days after the returned item is
          inspected. Refund timing may vary by bank or payment provider.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Cancellation</h2>
        <p>Orders can be canceled before dispatch. Once an item has shipped, the return process applies.</p>

        <h2 className="text-2xl font-semibold pt-4">Contact</h2>
        <p>contact@paradisefurniture.in | +91 98181 17790</p>
      </div>
    </div>
  );
}
