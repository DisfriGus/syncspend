"use client";
import Image from "next/image";
import Logo from "../assets/Logo1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackgroundHome from "../assets/image 8.png";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 300 });
  }, []);
  return (
    <div className="min-h-screen z-0">
      {/* Hero Section */}
      <section className="text-center py-16 bg-white flex flex-col justify-center items-center">
        <Image alt="Logo" height={100} width={48} src={Logo} />
        <h2 className="text-5xl font-semibold mb-4">Sync Your Finances</h2>
        <p className="text-2xl">Simplify Your Life</p>
      </section>
      <div className="relative border border-b-2 z-0">
        <Image
          alt="Background"
          src={BackgroundHome}
          className="w-[100vw] h-[50vh] absolute z-0"
        />
        <section
          className="flex justify-center items-center bg-gray-100 py-16 absolute w-full z-20 top-14 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="grid grid-cols-2 gap-12 max-w-5xl w-full bg-gray-50 shadow-lg p-8 rounded-lg">
            {/* New to SyncSpend */}
            <div className="text-center border-r border-gray-300 pr-8">
              <h3 className="text-2xl font-bold mb-4">New to SyncSpend?</h3>
              <p className="text-gray-600 mb-6">
                Sign up today and effortlessly manage your personal and group
                expenses.
              </p>

              <a className="inline-block py-3 px-6 bg-blue-900 text-white rounded-full hover:bg-blue-800">
                Register now
              </a>
            </div>

            {/* Already have an account */}
            <div className="text-center pl-8">
              <h3 className="text-2xl font-bold mb-4">
                Already have an account?
              </h3>
              <p className="text-gray-600 mb-6">
                Welcome back! Log in to continue tracking your financial
                progress and stay in sync with your budget.
              </p>

              <a
                href="/login"
                className="inline-block py-3 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-500"
              >
                Log in
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
