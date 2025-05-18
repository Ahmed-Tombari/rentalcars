// Wdata.js
export const Tdata = [
  {
    id: 1,
    image: "https://pagedone.io/asset/uploads/1695365794.png",
    name: "Vtech Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Now.. I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaksieVPN always the best.",
  },
  {
    id: 2,
    image: "https://pagedone.io/asset/uploads/1695365794.png",
    name: "Vtech Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Now.. I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaksieVPN always the best.",
  },
  {
    id: 3,
    image: "https://pagedone.io/asset/uploads/1695365794.png",
    name: "Vtech Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Now.. I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaksieVPN always the best.",
  },
  {
    id: 4,
    image: "https://pagedone.io/asset/uploads/1695365794.png",
    name: "Vtech Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Now.. I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaksieVPN always the best.",
  },
  {
    id: 5,
    image: "https://pagedone.io/asset/uploads/1695365794.png",
    name: "Vtech Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Now.. I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaksieVPN always the best.",
  },
  {
    id: 6,
    image: "https://pagedone.io/asset/uploads/1695365794.png",
    name: "Vtech Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Now.. I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaksieVPN always the best.",
  },
];
export async function GET(request) {
  return new Response(JSON.stringify(Tdata), { status: 200 });
}
