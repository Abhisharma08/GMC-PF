import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden h-[600px] flex items-center">
        
        {/* Background Image */}
        <Image
          src="https://paradisefurniture.in/wp-content/uploads/2026/03/zp256ee7ksrmy0cx54sr1c3zmc_result_0.jpg-scaled.jpeg"
          alt="Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Welcome to <span className="text-red-500">Paradise Furniture</span>
            </h1>

            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
              Discover our curated collection of premium chairs designed to elevate your living spaces. Crafted with elegance, comfort, and durability in mind.
            </p>

            <a
              href="#collection"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-700 text-white font-semibold hover:bg-red-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Collection
            </a>

          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="collection" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Chairs
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Browse our most popular selections. Request a custom quote to get
                the best pricing tailored specifically for your needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                
                {/* Product Image */}
                <div className="relative h-[340px] md:h-[380px] lg:h-[420px] overflow-hidden bg-gray-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-contain object-center p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {product.availability}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 flex flex-col flex-1">
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {product.title}
                    </h3>
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      (4.9/5)
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-8 flex-1">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    
                    <div className="text-2xl font-extrabold text-gray-900">
                      {product.formattedPrice}
                    </div>

                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center justify-center px-5 py-3 sm:px-6 rounded-xl bg-red-700 text-white font-semibold hover:bg-red-800 group-hover:shadow-md transition-all duration-300"
                    >
                      <span className="mr-2">Buy Now</span>
                      <ArrowRight className="w-5 h-5 hidden sm:inline-block" />
                    </Link>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}