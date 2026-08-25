import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { BRAND_NAME, getProductById, PRODUCTS, SITE_URL, STORE_CODE } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Checkout | Paradise Furniture",
    };
  }

  return {
    title: `Checkout ${product.title} | Paradise Furniture`,
    description: `Complete your order for ${product.title} from ${BRAND_NAME}.`,
    alternates: {
      canonical: `${SITE_URL}/checkout/${id}`,
    },
  };
}

export default async function CheckoutPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <Link
          href={`/product/${product.id}`}
          className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-red-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to product
        </Link>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 xl:gap-14 items-start">
          <aside className="lg:sticky lg:top-28">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="relative h-[340px] sm:h-[420px] bg-gray-100">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-contain p-5"
                />
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                  {product.availability}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold tracking-wider text-red-700 uppercase mb-2">
                  Order Summary
                </p>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                  {product.title}
                </h1>
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                <div className="flex items-end justify-between border-t border-gray-200 pt-6">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-3xl font-extrabold text-gray-900">
                      {product.formattedPrice}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-gray-600">Taxes included</p>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-center rounded-lg bg-neutral-50 border border-gray-200 p-3">
                    <CheckCircle2 className="w-5 h-5 text-red-700 mr-2 shrink-0" />
                    Store {STORE_CODE}
                  </div>
                  <div className="flex items-center rounded-lg bg-neutral-50 border border-gray-200 p-3">
                    <Truck className="w-5 h-5 text-red-700 mr-2 shrink-0" />
                    Delivery confirmed before dispatch
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section aria-labelledby="checkout-heading">
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-wider text-red-700 uppercase mb-3">
                Secure Checkout
              </p>
              <h2 id="checkout-heading" className="text-4xl font-extrabold text-gray-900 mb-4">
                Complete Your Purchase
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Submit your order details below. Our team will verify availability, delivery
                charges, and payment instructions before dispatch.
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 mb-8 text-green-900">
              <ShieldCheck className="w-5 h-5 mt-0.5 shrink-0" />
              <p className="text-sm leading-6">
                No account is required. Individuals and businesses can place an order using the
                same checkout form.
              </p>
            </div>

            <LeadForm productTitle={product.title} source="checkout-page" />
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-semibold mb-4">Safe & Secure Ordering</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Verified seller since 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Secure checkout process</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Multiple payment options</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Guaranteed delivery</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
