// components/RegisterPage.jsx
export default function RegisterPage() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-black/40"
      style={{
        backgroundImage: "url('/images/Whycar.svg')",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="mx-auto max-w-lg px-6 lg:px-8">
        <img
          src="/images/Triangle.svg"
          alt="RegisterPage logo"
          className="mx-auto mb-8 object-cover w-40"
        />
        <div className="rounded-2xl bg-white shadow-xl border border-gray-200">
          <form action="" className="p-7 mx-auto">
            <div className="mb-11">
              <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                Create Account
              </h1>
            </div>

            <input
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Full Name"
            />

            <input
              type="email"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Email Address"
            />

            <input
              type="password"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-[#c8ff00] transition-all duration-700 bg-[#c8ff00] shadow-sm mb-11"
            >
              Sign Up
            </button>

            <a href="#" className="flex justify-center text-gray-900 text-base font-medium leading-6">
              Already have an account?{' '}
              <span className="text-[#c8ff00] font-semibold pl-3">Log In</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}