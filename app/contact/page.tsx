"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <section className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://paradisefurniture.in/wp-content/uploads/2026/03/zp256ee7ksrmy0cx54sr1c3zmc_result_0.jpg-scaled.jpeg"
          alt="Paradise Furniture showroom"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute text-[120px] md:text-[180px] font-bold text-white/10 select-none">
          Contact
        </h1>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h2>
          <p className="text-lg text-gray-200">We look forward to hearing from you.</p>
        </div>
      </section>

      <div className="min-h-screen bg-[#f5f6f7] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-600 italic mb-3">Get in touch</p>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Connect With Us</h1>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
              Whenever you need us, our team is just a message away. Whether you have a question
              or need support, we are committed to providing clear and timely service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">New Delhi, India</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-600 w-5 h-5" />
                <span>A-51, Naraina Industrial Area, Phase-I, New Delhi-110028 (India)</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-red-600 w-5 h-5" />
                <a
                  href="mailto:contact@paradisefurniture.in"
                  className="select-all cursor-pointer hover:text-red-600 transition"
                >
                  contact@paradisefurniture.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-red-600 w-5 h-5" />
                <a
                  href="tel:+919818117790"
                  className="select-all cursor-pointer hover:text-red-600 transition"
                >
                  +91 98181 17790
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-[20px] border-gray-300 z-0"></div>
            <div className="relative z-10">
              <Image
                src="https://res.cloudinary.com/dfb0umklg/images/c_scale,w_648,h_689,dpr_1.5/f_auto,q_auto/v1755943311/2-01_138351cd6/2-01_138351cd6.jpg?_i=AA"
                alt="Paradise Furniture workshop"
                width={600}
                height={600}
                className="rounded-md shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
