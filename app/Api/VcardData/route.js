// Wdata.js
export const Vdata = [
  {
    id: 1,
    price: "72.00",
    time: "day",
    image: "/images/car1.svg",
    name: "Mazda Super Fast Car",

    rating: 4.5,
    text: "Now.. I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaksieVPN always the best.",
  },
  {
    id: 2,
    price: "72.00",
    time: "day",
    image: "/images/car2.svg",
    name: "Mazda Super Fast Car",
  },
  {
    id: 3,
    price: "72.00",
    time: "day",
    image: "/images/car3.svg",
    name: "Mazda Super Fast Car",
  },
  {
    id: 4,
    price: "72.00",
    time: "day",
    image: "/images/car4.svg",
    name: "Mazda Super Fast Car",
  },
  {
    id: 5,
    price: "72.00",
    time: "day",
    image: "/images/car1.svg",
    name: "Mazda Super Fast Car",
  },
  {
    id: 6,
    price: "72.00",
    time: "day",
    image: "/images/car2.svg",
    name: "Mazda Super Fast Car",
  },
  {
    id: 7,
    price: "72.00",
    time: "day",
    image: "/images/car3.svg",
    name: "Mazda Super Fast Car",
  },
  {
    id: 8,
    price: "72.00",
    time: "day",
    image: "/images/car4.svg",
    name: "Mazda Super Fast Car",
  },
];
export async function GET(request) {
  return new Response(JSON.stringify(Vdata), { status: 200 });
}
