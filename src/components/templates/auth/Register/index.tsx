"use client";
import Image from "next/image";
import { useState } from "react";
import LoginImage from "../../../../assets/high-angle-woman-office-working.png";
import Logo from "../../../../assets/Logo.png";
export default function SignupTemplate() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here
    console.log("Name: ", name);
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen">
      <div className="w-[60vw] relative">
        <Image
          src={LoginImage} // Update this with your image path
          alt="Login"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div className="w-[40vw] flex flex-col justify-center p-16 bg-white">
        <Image src={Logo} height={240} width={120} alt="Logo" />
        <h2 className="text-[48px] mt-4 mb-2 font-bold">Register</h2>
        <p className="mb-8 text-[#4D4D4D]">
          Sign up today and effortlessly manage your personal and group
          expenses.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-[#475E6B] font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-[#475E6B] font-semibold"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[#475E6B] font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <a
          href="#"
          className="mt-4 text-sm text-indigo-600 hover:underline flex justify-end"
        >
          Did you forget your password?
        </a>
        <div className="border border-gray-300 p-6 rounded-lg  mt-11">
          <h2 className="text-2xl font-semibold mb-4">Log in</h2>
          <p className="text-gray-600 mb-6">
            Login with the data you entered during your registration.
          </p>
          <a className="w-[480px] h-[56px] py-3 bg-blue-100 text-blue-600 font-semibold rounded-md hover:bg-blue-200">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

// Display name for the component
SignupTemplate.displayName = "SignupTemplate";
