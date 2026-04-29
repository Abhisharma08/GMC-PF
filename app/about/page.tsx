import Image from "next/image";

export const metadata = {
  title: "About Us | Paradise Furniture",
  description: "Learn about Paradise Furniture, our experience, craft, and seating expertise.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f7f7f8] text-gray-800">
      <section className="relative h-[340px] md:h-[460px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="https://paradisefurniture.in/wp-content/uploads/2026/03/zp256ee7ksrmy0cx54sr1c3zmc_result_0.jpg-scaled.jpeg"
          alt="Paradise Furniture seating"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gray-900/25" />
        <span className="absolute text-[88px] sm:text-[140px] md:text-[210px] font-extrabold text-white/10 select-none">
          About
        </span>
        <div className="relative z-10 max-w-3xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5">About</h1>
          <p className="text-xl md:text-2xl font-semibold leading-snug">
            Everything your home and workspace deserve - style, comfort, and functionality.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="relative min-h-[560px]">
            <div className="absolute left-0 top-0 w-[86%] h-[82%] border-[16px] border-[#bed2da]" />

            <div className="relative ml-8 mt-10 bg-white p-5 shadow-sm w-[84%]">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dfb0umklg/images/c_scale,w_648,h_689,dpr_1.5/f_auto,q_auto/v1755943311/2-01_138351cd6/2-01_138351cd6.jpg?_i=AA"
                  alt="Paradise Furniture workshop"
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute left-16 bottom-20 bg-white p-3 shadow-sm w-[32%] min-w-36">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942127/500x500_1/500x500_1.jpg?_i=AA"
                  alt="Chair upholstery detail"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute left-[42%] bottom-20 bg-white p-3 shadow-sm w-[34%] min-w-40">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942116/STAR-1-1/STAR-1-1.jpg?_i=AA"
                  alt="Finished Paradise chair"
                  fill
                  sizes="240px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute right-0 bottom-0 bg-white px-12 py-8 text-center shadow-sm">
              <div className="text-6xl md:text-7xl font-extrabold text-red-700 leading-none">25+</div>
              <div className="text-xl font-bold text-gray-700 mt-2">Years Experience</div>
            </div>
          </div>

          <div className="lg:pt-12">
            <p className="text-red-700 italic font-semibold mb-5">Who we are</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8">
              About Paradise Furniture
            </h2>

            <div className="space-y-6 text-lg leading-8 text-gray-700">
              <p>
                Paradise Furniture was founded 25 years ago with the objective of transforming and
                reinventing seating concepts for homes, workplaces, and commercial spaces. Over
                time, we have focused on comfort, health, sustainability, user friendliness, posture,
                materials, and thoughtful product design.
              </p>
              <p>
                Our chairs are ergonomically designed by combining practical engineering principles
                with a clear understanding of how people sit, work, relax, and move through the day.
                Every product is built to support comfort while maintaining a refined visual appeal.
              </p>
              <p>
                Quality and service remain top priorities at Paradise. With a wide range of seating
                solutions, our products serve homes, offices, architects, interior designers, hotels,
                institutions, hospitals, airports, government agencies, and modern workspaces.
              </p>
            </div>

            <div className="pt-9">
              <p className="text-lg font-extrabold text-gray-800">Rajesh Maniral</p>
              <p className="text-lg font-extrabold text-red-700">CEO & Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
