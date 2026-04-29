"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center relative">

        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dfb0umklg/images/c_scale,w_170,h_42,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74.png?_i=AA"
            alt="Paradise Furniture Logo"
            width={170}
            height={42}
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden sm:flex items-center space-x-10 text-lg font-medium text-gray-700 ml-auto">
          
          <Link 
            href="/#collection" 
            className="hover:text-red-700 transition-colors hover:underline underline-offset-4"
          >
            Collections
          </Link>

          <Link 
            href="/about" 
            className="hover:text-red-700 transition-colors hover:underline underline-offset-4"
          >
            About Us
          </Link>

          <Link 
            href="/contact" 
            className="hover:text-red-700 transition-colors hover:underline underline-offset-4"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden ml-auto text-black"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-gray-700 font-medium">

          <Link 
            href="/#collection" 
            onClick={() => setOpen(false)}
            className="block hover:text-red-700"
          >
            Collections
          </Link>

          <Link 
            href="/about" 
            onClick={() => setOpen(false)}
            className="block hover:text-red-700"
          >
            About Us
          </Link>

          <Link 
            href="/contact" 
            onClick={() => setOpen(false)}
            className="block hover:text-red-700"
          >
            Contact
          </Link>

        </div>
      )}

    </header>
  );
}
