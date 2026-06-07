"use client";

import { useState } from "react";
import { CreditCard, Loader2, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

type LeadFormProps = {
  productTitle: string;
  source?: "product-page" | "checkout-page";
};

export default function LeadForm({
  productTitle,
  source = "product-page",
}: LeadFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      shippingAddress: formData.get("shippingAddress"),
      postalCode: formData.get("postalCode"),
      paymentMethod: formData.get("paymentMethod"),
      quantity: quantity.toString(), // Taken from state to ensure consistency
      productTitle,
      orderSource: source,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry. Please try again.");
      }

      // Redirect instead of local state
      router.push("/thank-you");
    } catch (error: unknown) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      
      {/* eCommerce Style Quantity Selector (Visually disconnected from the lead form UI block) */}
      <div className="mb-10 flex items-center gap-5">
        <label htmlFor="quantity" className="text-lg font-semibold text-gray-900">
          Quantity
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm w-36 h-12">
          <button 
            type="button" 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex-1 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-12 h-full text-center text-lg font-bold text-gray-900 border-x border-gray-300 outline-none appearance-none m-0 p-0" 
            style={{ MozAppearance: 'textfield' }} // Hides arrows in Firefox
          />
          <button 
            type="button" 
            onClick={() => setQuantity(quantity + 1)}
            className="flex-1 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lead Generation Form Block */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Checkout</h3>
        <p className="text-gray-600 mb-6">
          Enter your shipping details and place your order. Payment is collected by invoice, bank transfer, or cash on delivery after confirmation.
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all outline-none"
              placeholder="Amit Sharma"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all outline-none"
              placeholder="amit@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all outline-none"
              placeholder="+91 98181 17790"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all outline-none"
              placeholder="E.g. New Delhi, Bengaluru..."
            />
          </div>

          <div>
            <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="shippingAddress"
              name="shippingAddress"
              required
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all outline-none resize-none"
              placeholder="House / office number, street, area"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
              PIN Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              required
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all outline-none"
              placeholder="110028"
            />
          </div>

          <fieldset className="space-y-3">
            <legend className="block text-sm font-medium text-gray-700">
              Payment Method <span className="text-red-500">*</span>
            </legend>
            <label className="flex items-start gap-3 rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-red-600 transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery / Invoice"
                required
                defaultChecked
                className="mt-1 accent-red-700"
              />
              <span>
                <span className="flex items-center text-sm font-semibold text-gray-900">
                  <CreditCard className="w-4 h-4 mr-2 text-red-700" />
                  Cash on Delivery / Invoice
                </span>
                <span className="block text-sm text-gray-600 mt-1">
                  We confirm availability, delivery charges, and payment instructions before dispatch.
                </span>
              </span>
            </label>
          </fieldset>

          {status === "error" && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex justify-center items-center h-12 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Place Order"
            )}
          </button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            By placing this order, you agree to our Terms of Service, Privacy Policy, Return Policy, and Shipping Policy.
          </p>
        </div>
      </div>
    </form>
  );
}
