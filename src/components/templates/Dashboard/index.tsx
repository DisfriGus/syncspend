"use client";
import Image from "next/image";
import Logo from "../../../assets/Logo.png";
import SpendCategoryLineChart from "@/components/atoms/Chart";
import SpendCategoryDonutChart from "@/components/atoms/ChartCategory";
import TotalTransaction from "../../../assets/TotalTransaction.png";
// DashboardTemplate Component
export default function DashboardTemplate() {
  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#FAF7F0] p-6 fixed h-full">
        <div className="mb-12 flex justify-center">
          <Image src={Logo} alt="SyncSpend Logo" width={120} height={60} />
        </div>
        <ul>
          <li className="mb-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <span>Plan</span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded">
                <i className="fas fa-briefcase"></i>
              </div>
              <span>Portfolio</span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded">
                <i className="fas fa-cog"></i>
              </div>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6 bg-[#2F362C] min-h-[100vh] absolute right-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Good Morning, Hi John
          </h1>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/path-to-avatar.png" // Replace with actual image
              alt="User Avatar"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>
        <div className="py-12">
          {/* Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Total Balance */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={TotalTransaction} // Replace with actual image
                alt="Balance"
                className="w-full"
              />

              <h2 className="text-xl font-bold">Total Balance</h2>
              <p className="text-2xl mt-4">Rp. 7,410,000</p>
            </div>

            {/* Total Expense */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <SpendCategoryLineChart />
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Total Expense</h2>
              </div>
              <p className="text-2xl mt-4">Rp. 2,210,000</p>
            </div>

            {/* Empty Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Placeholder for any other content */}
            </div>
          </div>

          <div className="flex gap-6">
            {/* Transaction Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-4/6">
              <h3 className="text-xl font-bold mb-4">Transaction</h3>
              <p className="mb-6">140 Transaction</p>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Title</th>
                    <th className="pb-2 text-right">Nominal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Biznet Tbk</td>
                    <td>12 Des 2024, 06:00 PM</td>
                    <td>Bayar Wifi</td>
                    <td className="text-red-600 text-right">Rp. -350,000</td>
                  </tr>
                  <tr>
                    <td>Mamah</td>
                    <td>12 Des 2024, 05:00 AM</td>
                    <td>Bulanan</td>
                    <td className="text-green-600 text-right">
                      Rp. +4,500,000
                    </td>
                  </tr>
                  <tr>
                    <td>Bahri</td>
                    <td>11 Des 2024, 06:00 PM</td>
                    <td>Soreang</td>
                    <td className="text-red-600 text-right">Rp. -350,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Spend Category */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/6">
              <SpendCategoryDonutChart />
              <h3 className="text-xl font-bold mb-4">Spend Category</h3>
              <p className="">7 Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Display name for the component
DashboardTemplate.displayName = "DashboardTemplate";
