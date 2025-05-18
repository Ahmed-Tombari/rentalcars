export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full px-4 lg:px-[120px] py-10 md:py-20">
      <div className="max-w-lg flex flex-col gap-6">
        <p className="text-xs">100% Trusted Car rental platform in Bangladesh</p>
        <h1 className="font-bold text-4xl md:text-5xl">Fast And Easy Way To Rent A Car</h1>
        <p className="text-xs">
          Our Car Rental online booking system is designed to meet the specific needs of car rental business owners. This easy-to-use car rental software will let you manage everything efficiently.
        </p>
        <div className="space-x-6">
          <a
            href="#"
            className="bg-[#D7FF24] w-32 py-2.5 text-center rounded-md inline-block hover:bg-white hover:border-1 hover:border-[#D7FF24] hover:shadow-[#D7FF24]"
          >
            Booking Now
          </a>
          <a
            href="#"
            className="w-32 py-2.5 text-center hover:underline"
          >
            See all cars
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-md mx-auto md:max-w-none">
        <img
          src="images/herocar.svg"
          alt="Hero Car"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}