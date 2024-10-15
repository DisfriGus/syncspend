"use client";
import Image from "next/image";
import { useState } from "react";
import LoginImage from "../../../../assets/reading-glasses-piles-coins-high-view 1.png";
import Logo from "../../../../assets/Logo.png";
export default function LoginTemplate() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Add login logic here
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
        <h2 className="text-[48px] mt-4 mb-2 font-bold">Login</h2>
        <p className="mb-8 text-[#4D4D4D]">
          Login with the data you entered during your registration.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
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
          <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
          <p className="text-gray-600 mb-6">
            Sign up today and effortlessly manage your personal and group
            expenses.
          </p>
          <button className="w-full py-3 bg-blue-100 text-blue-600 font-semibold rounded-md hover:bg-blue-200">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}

// Display name for the component
LoginTemplate.displayName = "LoginTemplate";
