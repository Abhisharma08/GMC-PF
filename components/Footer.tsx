import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 border-t border-gray-800 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
            <p className="text-sm mb-2 opacity-80">A-51, Naraina Industrial Area, Phase-I,</p>
            <p className="text-sm mb-2 opacity-80">New Delhi-110028 (India)</p>
            <p className="text-sm mb-2 opacity-80 flex items-center">
              <span className="font-semibold text-white mr-2">Email:</span> contact@paradisefurniture.in
            </p>
            <p className="text-sm opacity-80 flex items-center">
              <span className="font-semibold text-white mr-2">Phone:</span> +91 98181 17790
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Legal</h4>
            <div className="space-y-2 flex flex-col text-sm opacity-80">
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/return-policy" className="hover:text-white transition-colors">Return Policy</Link>
              <Link href="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">About Us</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              We specialize in crafting premium furniture pieces tailor-made to fit modern lifestyles. Quality and customer satisfaction are at the core of what we do.
            </p>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm opacity-60">
          &copy; {new Date().getFullYear()} Paradise Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
