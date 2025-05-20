// MenuItems.jsx
import Link from 'next/link';

const MenuItems = () => {
  return (
    <div className="flex flex-wrap gap-9 sm:gap-6 items-center">
      <Link href="/" className="hover:text-lime-300">Home</Link>
      <Link href="/Pages/Vehicles" className="hover:text-lime-300" >Vehicles</Link>
      <Link href="/Pages/WhyChooseUS" className="hover:text-lime-300" >Why Choose Us</Link>
      <Link href="/Pages/Testimonial" className="hover:text-lime-300" >Testimonial</Link>
    </div>
  );
};

export default MenuItems;