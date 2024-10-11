"use client";
import { useEffect, useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Limit to 10 users per page

  useEffect(() => {
    // Fetch users from your API
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/users"); // Adjust this to your actual API route
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Get current users for the page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Parent Name</th>
              <th className="py-3 px-4">Child Name</th>
              <th className="py-3 px-4">Child Age</th>
              <th className="py-3 px-4">Role</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user: any) => (
                <tr key={user.id} className="border-b text-gray-700">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.parentName}</td>
                  <td className="py-3 px-4">{user.childName}</td>
                  <td className="py-3 px-4">{user.childAge}</td>
                  <td className="py-3 px-4">{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-3 px-4 text-center" colSpan={6}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <button
            onClick={prevPage}
            className={`${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            } bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded-l`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className={`${
              currentPage >= Math.ceil(users.length / usersPerPage)
                ? "opacity-50 cursor-not-allowed"
                : ""
            } bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded-r`}
            disabled={currentPage >= Math.ceil(users.length / usersPerPage)}
          >
            Next
          </button>
        </div>
        <span className="text-sm text-gray-700">
          Showing {indexOfFirstUser + 1} to{" "}
          {indexOfLastUser > users.length ? users.length : indexOfLastUser} of{" "}
          {users.length} users
        </span>
      </div>
    </div>
  );
};

export default UserManagement;
