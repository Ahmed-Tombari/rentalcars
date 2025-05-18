import TCarousel from "@/app/Components/ui/TestimonialUi/TCarousel";
import TTexthead from "@/app/Components/ui/TestimonialUi/TTexthead";

export default function Testimonial() {
  return (
    <section className="w-full max-w-[1440px] px-4 py-10 md:py-12 lg:px-[120px] lg:py-14 xl:py-16 mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <TTexthead />
      </div>

      {/* Carousel */}
      <TCarousel />
    </section>
  );
}
