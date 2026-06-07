import Image from "next/image";
import { Lightbulb, Sofa } from "lucide-react";

export const metadata = {
  title: "About Us | Paradise Furniture",
  description: "Learn about Paradise Furniture, our experience, craft, and seating expertise.",
};

const certificates = [
  {
    title: "ISO 9001:2015",
    image:
      "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_349,dpr_2/f_auto,q_auto/v1755943338/9001-2015/9001-2015.jpg?_i=AA",
  },
  {
    title: "ISO 14001:2015",
    image:
      "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_349,dpr_2/f_auto,q_auto/v1755943327/14001-2015/14001-2015.jpg?_i=AA",
  },
  {
    title: "BIFMA",
    image:
      "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_349,dpr_2/f_auto,q_auto/v1755943332/bifma/bifma.jpg?_i=AA",
  },
  {
    title: "GREEN GUARD",
    image:
      "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_349,dpr_2/f_auto,q_auto/v1755943293/PARADISE_FURNITURE_-_GREENGUARD1_page-0001-scaled/PARADISE_FURNITURE_-_GREENGUARD1_page-0001-scaled.jpg?_i=AA",
  },
  {
    title: "ISO 45001:2018",
    image:
      "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_349,dpr_2/f_auto,q_auto/v1755943278/PARADISE-FURNITURE-OHS_page-0001-scaled/PARADISE-FURNITURE-OHS_page-0001-scaled.jpg?_i=AA",
  },
  {
    title: "ISO 50001:2018",
    image:
      "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_349,dpr_2/f_auto,q_auto/v1755943268/PARADISE-FURNITURE-50001_page-0001/PARADISE-FURNITURE-50001_page-0001.jpg?_i=AA",
  },
];

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

      <section className="bg-[#f4f4f6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          <div className="lg:pr-8 flex flex-col justify-center">
            <p className="text-red-700 italic font-semibold mb-5">Our value</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8">
              Where Innovation Meets Style!
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Crafting furniture that reflects your unique style and meets your practical needs.
            </p>
          </div>

          <div className="bg-white px-8 py-12 md:px-10 md:py-16 text-center flex flex-col items-center justify-center min-h-[320px]">
            <Lightbulb className="w-16 h-16 text-red-700 mb-8" strokeWidth={2.5} />
            <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Vision</h3>
            <p className="text-lg leading-8 text-gray-600">
              To transform spaces with innovative, stylish, and functional furniture that enhances
              comfort and inspires creativity.
            </p>
          </div>

          <div className="bg-white px-8 py-12 md:px-10 md:py-16 text-center flex flex-col items-center justify-center min-h-[320px]">
            <Sofa className="w-16 h-16 text-red-700 mb-8" strokeWidth={2.5} />
            <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Mission</h3>
            <p className="text-lg leading-8 text-gray-600">
              To provide high-quality, customizable furniture solutions that cater to the diverse
              needs of homes and workspaces, delivering exceptional value and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8">
              We Conform
            </h2>
            <div className="space-y-6 text-xl leading-9 text-gray-600">
              <p>
                Paradise Furniture conforms with the standards developed by BIFMA International for
                manufacturing of office chairs.
              </p>
              <p>
                Paradise Furniture is an ISO 9001:2015 and an ISO 14001:2015 certified company and
                conforms to the standards developed by the quality management system for
                manufacturing and trading of office furniture.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
            {certificates.map((certificate) => (
              <figure key={certificate.title} className="text-center">
                <div className="relative aspect-[248/349] bg-neutral-50 border border-gray-200 shadow-sm overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    fill
                    sizes="(min-width: 1280px) 18vw, (min-width: 640px) 38vw, 90vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4 text-lg italic font-medium text-gray-700">
                  {certificate.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
