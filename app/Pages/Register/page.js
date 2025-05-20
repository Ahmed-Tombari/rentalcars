// components/RegisterPage.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validation Schema
const schema = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success("Account created successfully!");
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can send this to backend or handle auth here
  };

  const onError = (errors) => {
    const firstErrorKey = Object.keys(errors)[0];
    if (firstErrorKey) {
      toast.error(errors[firstErrorKey]?.message || "Please check the form");
    }
  };

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
        <div className="rounded-2xl bg-white shadow-xl border border-gray-200 lg:w-[500px]">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="p-7 mx-auto space-y-6"
          >
            <div className="mb-11">
              <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                Create Account
              </h1>
            </div>

            {/* Full Name Field */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
                className={`w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border ${
                  errors.name && touchedFields.name
                    ? "border-red-500"
                    : "border-gray-300"
                } shadow-sm focus:outline-none px-4`}
              />
              {errors.name && touchedFields.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className={`w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border ${
                  errors.email && touchedFields.email
                    ? "border-red-500"
                    : "border-gray-300"
                } shadow-sm focus:outline-none px-4`}
              />
              {errors.email && touchedFields.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className={`w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border ${
                  errors.password && touchedFields.password
                    ? "border-red-500"
                    : "border-gray-300"
                } shadow-sm focus:outline-none px-4`}
              />
              {errors.password && touchedFields.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-lime-300 text-white text-center text-base font-semibold leading-6 rounded-full shadow-sm mb-11 transition-all duration-300 hover:bg-lime-500 hover:border-[#c8ff00] hover:shadow-[0_0_20px_#c8ff0070] cursor-pointer"
            >
              Sign Up
            </button>

            <a
              href="#"
              className="flex justify-center text-gray-900 text-base font-medium leading-6"
            >
              Already have an account?{" "}
              <span className="text-lime-300 font-semibold pl-3">Log In</span>
            </a>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}