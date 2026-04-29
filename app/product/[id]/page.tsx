import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ProductGallery from "@/components/ProductGallery";
import { BRAND_NAME, getProductById, PRODUCTS, SITE_URL } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>
}

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
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | Paradise Furniture`,
    description: product.description,
  };
}

export default async function ProductLandingPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // JSON-LD Schema for Google Merchant Center
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.imageUrl,
    description: product.description,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      "@type": "Brand",
      name: BRAND_NAME,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/product/${id}`,
      priceCurrency: product.currency,
      price: product.price,
      availability: product.availability === "In Stock" 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />



      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 items-start">
          
          {/* Left Column: Product Image Gallery */}
          <ProductGallery 
            title={product.title} 
            gallery={product.gallery} 
            availability={product.availability} 
          />

          {/* Right Column: Product Details & Lead Form */}
          <div className="flex flex-col text-left">
            <div className="mb-4">
              <span className="text-sm font-semibold tracking-wider text-red-700 uppercase mb-2 block">
                Premium Collection
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                {product.title}
              </h1>
            </div>

            {/* Price Presentation */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                {product.formattedPrice}
              </span>
              <span className="text-lg text-gray-500 mb-1 font-medium">
                (Taxes Included)
              </span>
            </div>

            {/* Description */}
            <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed max-w-none">
              <p>{product.description}</p>
              
              {product.features && product.features.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-medium font-sans">
                      <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Lead Generation Form */}
            <div className="mt-2 relative z-10">
              <LeadForm productTitle={product.title} />
            </div>
            
            {/* Trust Indicators below form */}
            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-sm font-semibold text-gray-800">
              <svg className="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3h12l3 6-9 12L3 9l3-6z" />
              </svg>
                Premium Quality
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-sm font-semibold text-gray-800">
                <svg className="w-6 h-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Fast Delivery
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
