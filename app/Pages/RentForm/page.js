"use client"
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

// Define Validation Schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  country: yup.string().required("Country is required"),
  phone: yup.string().required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms & conditions"),
});

export default function RegistrationForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      password: "",
      terms: false,
    },
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success("Registration successful!");
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can send to backend here
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
        backdropFilter: "blur(80px)",
      }}
    >
      <div className="mx-auto max-w-lg px-6 lg:px-8 py-6">
        <img
          src="/images/Triangle.svg"
          alt="RegisterPage logo"
          className="mx-auto mb-8 object-cover w-40"
        />
        <div className="rounded-2xl bg-white shadow-xl border border-gray-200 lg:w-[500px]">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="w-full max-w-2xl mx-auto p-7"
          >
            <h1 className="text-black text-6xl font-normal pb-6">Rent</h1>

            {/* Name */}
            <div className="relative mb-6">
              <InputLabel label="Name" required />
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <InputWithIcon
                    icon={<UserIcon />}
                    placeholder="Enter Name"
                    type="text"
                    {...field}
                    error={errors.name && touchedFields.name}
                  />
                )}
              />
              {errors.name && touchedFields.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative mb-6">
              <InputLabel label="Email" required />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputWithIcon
                    icon={<EmailIcon />}
                    placeholder="Enter Email"
                    type="email"
                    {...field}
                    error={errors.email && touchedFields.email}
                  />
                )}
              />
              {errors.email && touchedFields.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Country */}
            <div className="relative mb-6">
              <InputLabel label="Country" required />
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <InputWithIcon
                    icon={<CountryIcon />}
                    placeholder="Enter Country"
                    type="text"
                    {...field}
                    error={errors.country && touchedFields.country}
                  />
                )}
              />
              {errors.country && touchedFields.country && (
                <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="relative mb-6">
              <InputLabel label="Phone Number" required />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputWithIcon
                    icon={<PhoneIcon />}
                    placeholder="Enter Phone No"
                    type="tel"
                    {...field}
                    error={errors.phone && touchedFields.phone}
                  />
                )}
              />
              {errors.phone && touchedFields.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <InputLabel label="Password" required />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <InputWithIcon
                    icon={<LockIcon />}
                    placeholder="Enter Password"
                    type="password"
                    {...field}
                    error={errors.password && touchedFields.password}
                  />
                )}
              />
              {errors.password && touchedFields.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center mb-6">
              <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                  <>
                    <div className="relative flex items-center">
                      <input
                        id="checkbox-accept"
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className={`w-5 h-5 appearance-none border ${
                          errors.terms ? "border-red-500" : "border-gray-300"
                        } rounded-md mr-2 hover:border-indigo-500`}
                      />
                      {field.value && (
                        <svg
                          className="absolute w-4 h-4 text-white pointer-events-none"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      )}
                    </div>
                  </>
                )}
              />
              <label htmlFor="checkbox-accept" className="text-sm font-normal text-gray-600">
                I accept{" "}
                <Link href="#" className="text-lime-500 underline">
                  terms & conditions.
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
            )}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-52 h-12 bg-lime-300 shadow-sm rounded-full text-base font-semibold leading-7 mb-11 transition-all duration-300 hover:bg-lime-500 cursor-pointer"
              >
                Confirm
              </button>
            </div>
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

// Helper Components

function InputLabel({ label, required }) {
  return (
    <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
      {label}
      {required && (
        <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
            fill="#EF4444"
          />
        </svg>
      )}
    </label>
  );
}

function InputWithIcon({ icon, placeholder, type = "text", error = false, ...props }) {
  return (
    <div className="relative text-gray-500 focus-within:text-gray-900">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        className={`block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-full placeholder-gray-400 focus:outline-none`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

// Icons (same as before)
function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 21V20.1429C20 19.0805 20 18.5493 19.8997 18.1099C19.5578 16.6119 18.3881 15.4422 16.8901 15.1003C16.4507 15 15.9195 15 14.8571 15H10C8.13623 15 7.20435 15 6.46927 15.3045C5.48915 15.7105 4.71046 16.4892 4.30448 17.4693C4 18.2044 4 19.1362 4 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.54887 6.73325L7.76737 9.36216C9.82591 10.645 10.8552 11.2864 11.9999 11.2863C13.1446 11.2861 14.1737 10.6443 16.2318 9.36081L20.4611 6.72333M11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CountryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
      <path
        d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.02623 10.2611L12.7387 17.9736C14.4091 19.6439 17.1173 19.6439 18.7877 17.9736C19.4559 17.3054 19.4559 16.2221 18.7877 15.554L16.6454 13.4116C16.1582 12.9244 15.3683 12.9244 14.8811 13.4116C14.3939 13.8988 13.604 13.8988 13.1168 13.4116L9.23534 9.53015C8.74814 9.04295 8.74814 8.25305 9.23534 7.76585C9.72253 7.27865 9.72253 6.48875 9.23534 6.00155L7.44584 4.21205C6.77768 3.5439 5.69439 3.5439 5.02623 4.21205C3.35584 5.88244 3.35584 8.59067 5.02623 10.2611Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 10H8M17 10V10C17.93 10 18.395 10 18.7765 10.1022C19.8117 10.3796 20.6204 11.1883 20.8978 12.2235C21 12.605 21 13.07 21 14C21 14.6667 21 15.3333 21 16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22C13.3333 22 11.6667 22 10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16C4 15.3333 4 14.6667 4 14C4 13.07 4 12.605 4.10222 12.2235C4.37962 11.1883 5.18827 10.3796 6.22354 10.1022C6.60504 10 7.07003 10 8 10V10M15 15.5C15 16.8807 13.8807 18 12.5 18C11.1193 18 10 16.8807 10 15.5C10 14.1193 11.1193 13 12.5 13C13.8807 13 15 14.1193 15 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}