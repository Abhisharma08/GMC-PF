"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  title: string;
  gallery: string[];
  availability: string;
}

export default function ProductGallery({
  title,
  gallery,
  availability,
}: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(gallery[0]);

  return (
    <div className="relative w-full flex flex-col mb-10 lg:mb-0 lg:sticky lg:top-8">
      
      {/* Main Image */}
      <div className="relative w-full h-[420px] md:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200">
        <Image
          src={mainImage}
          alt={title}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain object-center p-4 scale-95 transition-all duration-300"
        />

        {/* Availability Badge */}
        <div className="absolute top-4 left-4 bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-md flex items-center">
          <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
          {availability}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {gallery.length > 1 && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          {gallery.slice(0, 6).map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setMainImage(imgUrl)}
              className={`rounded-xl overflow-hidden h-[420px] md:h-[500px] lg:h-[560px] relative border-2 cursor-pointer transition-all duration-200 ${
                mainImage === imgUrl
                  ? "border-red-600 ring-2 ring-red-200 shadow-md scale-[1.02]"
                  : "border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-300"
              }`}
            >
              <Image
                src={imgUrl}
                alt={`${title} view ${idx + 1}`}
                fill
                sizes="(min-width: 1024px) 10vw, 30vw"
                className="object-contain object-center p-2 scale-95"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}