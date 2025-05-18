// components/LoginPage.jsx
export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-black/40"
    style={{
        backgroundImage: "url('/images/herocar.svg')",
        backdropFilter:"blur",
        backdropFilter:"black"
      }}>

      <div className="mx-auto max-w-lg px-6 lg:px-8">
        <img
          src="/images/Triangle.svg"
          alt="LoginPage logo"
          className="mx-auto mb-8 object-cover w-40"
        />
        <div className="rounded-2xl bg-white shadow-xl border border-gray-200">
          <form action="" className="p-7 mx-auto">
            <div className="mb-11">
              <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                Welcome Back
              </h1>
            </div>
            <input
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
            />
            <input
              type="password"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
              placeholder="Password"
            />
            <a href="/Pages/ForgotPassword" className="flex justify-end mb-6">
              <span className="text-[#c8ff00] text-right text-base font-normal leading-6">
                Forgot Password?
              </span>
            </a>
            <button
              type="submit"
              className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-[#c8ff00] transition-all duration-700 bg-[#c8ff00] shadow-sm mb-11"
            >
              Login
            </button>
            <a href="/Pages/Register" className="flex justify-center text-gray-900 text-base font-medium leading-6">
              Don’t have an account?{' '}
              <span className="text-[#c8ff00] font-semibold pl-3">Sign Up</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}