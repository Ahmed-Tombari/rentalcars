// MenuItems.jsx
import Link from 'next/link';

const MenuItems = () => {
  return (
    <div className="flex flex-wrap gap-9 sm:gap-6 items-center">
      <Link href="/" className="hover:text-[#D7FF24]">Home</Link>
      <Link href="/Pages/Vehicles" className="hover:text-[#D7FF24]" >Vehicles</Link>
      <Link href="/Pages/WhyChooseUS" className="hover:text-[#D7FF24]" >Why Choose Us</Link>
      <Link href="/Pages/Testimonial" className="hover:text-[#D7FF24]" >Testimonial</Link>
    </div>
  );
};

export default MenuItems;