// components/LoginPage.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

// Validation Schema
const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
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
      toast.success("Login successful!");
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
    <div class="bg-[url(/images/herocar.svg)] bg-cover bg-center">
      <div className="bg-black/30 backdrop-blur-sm">
        <div className="mx-auto max-w-lg px-6 lg:px-8 py-6">
          <img
            src="/images/Triangle.svg"
            alt="LoginPage logo"
            className="mx-auto mb-8 object-cover w-40"
          />
          <div className="rounded-2xl bg-white shadow-xl border border-gray-200 lg:w-[500px]">
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="p-7 mx-auto space-y-6"
            >
              <div className="mb-11">
                <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                  Welcome Back
                </h1>
              </div>

              {/* Username Field */}
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                  className={`w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border ${
                    errors.username && touchedFields.username
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:outline-none px-4`}
                />
                {errors.username && touchedFields.username && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.username.message}
                  </p>
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

              {/* Forgot Password */}
              <Link
                href="/Pages/ForgotPassword"
                className="flex justify-end mb-6"
              >
                <span className="text-lime-300 text-right text-base font-normal leading-6">
                  Forgot Password?
                </span>
              </Link>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 bg-lime-300 text-white text-center text-base font-semibold leading-6 rounded-full shadow-sm mb-11 transition-all duration-300 hover:bg-lime-500 hover:border-[#c8ff00] hover:shadow-[0_0_20px_#c8ff0070] cursor-pointer"
              >
                Login
              </button>

              {/* Sign Up Link */}
              <Link
                href="/Pages/Register"
                className="flex justify-center text-gray-900 text-base font-medium leading-6"
              >
                Don’t have an account?{" "}
                <span className="text-lime-300 font-semibold pl-3">
                  Sign Up
                </span>
              </Link>
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
    </div>
  );
}
