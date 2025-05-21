import CategoryTabs from "@/app/Components/ui/Voiture/CategoryTabs";
import VmenuCard from "@/app/Components/ui/Voiture/VmenuCard";
import VTexthead from "@/app/Components/ui/Voiture/VTexthead";

export default function Vehicles() {
  return (
    <section className="w-full max-w-auto px-4 py-10 md:py-12 lg:px-[120px] lg:py-14 xl:py-16 mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <VTexthead />
      </div>

      <div className="flex justify-center mb-16">
        <CategoryTabs />
      </div>

      {/* Cards Section - Centered */}
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl">
          <VmenuCard />
        </div>
      </div>
    </section>
  );
}