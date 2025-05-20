// Wdata.js
export const Ddata = [
  {
    id: 1,
    price: "72.00",
    image: "/images/car1.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
  {
    id: 2,
    price: "72.00",
    image: "/images/car2.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
  {
    id: 3,
    price: "72.00",
    image: "/images/car3.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
  {
    id: 4,
    price: "72.00",
    image: "/images/car4.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
  {
    id: 5,
    price: "72.00",
    image: "/images/car1.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
  {
    id: 6,
    price: "72.00",
    image: "/images/car2.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
  {
    id: 7,
    price: "72.00",
    image: "/images/car3.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
  {
    id: 8,
    price: "72.00",
    image: "/images/car4.svg",
    description: "Mazda MX-5 Miata - Fast & Fun Sports Car For Rs. 25",
  },
];
export async function GET(request) {
  return new Response(JSON.stringify(Ddata), { status: 200 });
}
