import React from 'react';
import { FaChartBar, FaBell, FaUser, FaCogs, FaTachometerAlt, FaDog } from 'react-icons/fa';

const AdminPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col items-center py-6">
        <div className="text-3xl mb-10">
          <FaDog />
        </div>
        <nav className="w-full">
          <ul className="space-y-6">
            <li className="flex items-center px-6 py-3 hover:bg-blue-700 cursor-pointer">
              <FaTachometerAlt className="mr-4" /> Dashboard
            </li>
            <li className="flex items-center px-6 py-3 hover:bg-blue-700 cursor-pointer">
              <FaUser className="mr-4" /> Users
            </li>
            <li className="flex items-center px-6 py-3 hover:bg-blue-700 cursor-pointer">
              <FaCogs className="mr-4" /> Settings
            </li>
            <li className="flex items-center px-6 py-3 hover:bg-blue-700 cursor-pointer">
              <FaBell className="mr-4" /> Notifications
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top bar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Users</h1>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/path-to-profile-image.jpg" alt="profile" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info Section */}
          <section className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <img src="/path-to-pet-image.jpg" alt="pet" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-semibold">Lola</h2>
              <p className="text-gray-600">Basenji</p>
              <p className="text-sm text-gray-500">2 years • Male • 22 lbs</p>
              <div className="mt-4 text-left">
                <p><span className="font-semibold">Primary Breed:</span> Basenji</p>
                <p><span className="font-semibold">Medical Condition:</span> Kennel Cough</p>
                <p><span className="font-semibold">Type:</span> Spayed</p>
              </div>
            </div>
          </section>

          {/* Health Checks */}
          <section className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Last Health Checks</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Heart Rate Check</span>
                <span>10/11/2022</span>
              </li>
              <li className="flex justify-between">
                <span>Stomach Bacteria</span>
                <span>10/12/2022</span>
              </li>
            </ul>
          </section>

          {/* Charts Section */}
          <section className="col-span-1 lg:col-span-2 flex flex-col space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Walking</h3>
              <div className="flex justify-center">
                {/* Placeholder for chart */}
                <FaChartBar className="text-4xl text-gray-400" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Sleeping</h3>
              <div className="flex justify-center">
                {/* Placeholder for chart */}
                <FaChartBar className="text-4xl text-gray-400" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Running</h3>
              <div className="flex justify-center">
                {/* Placeholder for chart */}
                <FaChartBar className="text-4xl text-gray-400" />
              </div>
            </div>
          </section>

          {/* Activity Stats */}
          <section className="col-span-1 lg:col-span-1 flex flex-col space-y-8">
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold">Calories Burned</h3>
              <p className="text-2xl font-bold">2000 cals</p>
            </div>
            <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold">Distance Covered</h3>
              <p className="text-2xl font-bold">34 miles</p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold">Active Hours</h3>
              <p className="text-2xl font-bold">120 hours</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
