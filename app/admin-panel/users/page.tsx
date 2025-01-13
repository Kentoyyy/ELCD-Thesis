"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import avatar from "../../../public/images/avatarrr.png";

type User = {
  _id: string;
  name?: string;
  email?: string;
  role?: string;
  lastActive?: string;
  avatar?: string;
  parentName?: string;
  childName?: string;
  childAge?: number;
  handwritingTest?: boolean;
  phonologicalTest?: boolean;
  createdAt?: string;
};

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredUsers = users.filter((user) => {
    const searchLower = searchQuery.toLowerCase();

    return (
      (user.name?.toLowerCase().includes(searchLower) || "") ||
      (user.email?.toLowerCase().includes(searchLower) || "") ||
      (user.parentName?.toLowerCase().includes(searchLower) || "") ||
      (user.childName?.toLowerCase().includes(searchLower) || "")
    );
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredUsers.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`/api/admin/users/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } else {
          throw new Error("Failed to delete user");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user. Please try again.");
      }
    }
  };

  const handleViewTests = (user: User) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">User Management</h1>
        <input
          type="text"
          placeholder="Search user..."
          className="border px-4 py-2 rounded-lg text-gray-600 bg-gray-50 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Parent Name</th>
              <th className="py-3 px-4">Child Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Tests</th>
              <th className="py-3 px-4">Last Active</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user._id} className="border-b last:border-none">
                  <td className="py-4 px-4 flex items-center">
                    <img
                      src={user.avatar || avatar.src}
                      alt={user.name || "User Avatar"}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{user.parentName || "N/A"}</td>
                  <td className="py-4 px-4">{user.childName || "N/A"}</td>
                  <td className="py-4 px-4">{user.childAge || "N/A"}</td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleViewTests(user)}
                      className="text-blue-500 hover:text-blue-600 underline"
                    >
                      View Tests
                    </button>
                  </td>
                  <td className="py-4 px-4">{formatDate(user.lastActive)}</td>
                  <td className="py-4 px-4 space-x-2">
                    <button
                      onClick={() => handleViewTests(user)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevPage}
          className={`${currentPage === 1 ? "text-gray-400" : "text-blue-500 hover:text-blue-600"
            } py-2 px-4`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className={`${currentPage === Math.ceil(filteredUsers.length / usersPerPage)
              ? "text-gray-400"
              : "text-blue-500 hover:text-blue-600"
            } py-2 px-4`}
          disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
        >
          Next
        </button>
      </div>

      {isModalOpen && currentUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg transform transition-all scale-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              User Tests - {currentUser.name || "N/A"}
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="font-medium text-gray-800 w-48">Handwriting Test:</span>
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded ${currentUser.handwritingTest ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                >
                  {currentUser.handwritingTest ? "Completed" : "Not Completed"}
                </span>
              </li>
              <li className="flex items-center">
                <span className="font-medium text-gray-800 w-48">Phonological Test:</span>
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded ${currentUser.phonologicalTest ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                >
                  {currentUser.phonologicalTest ? "Completed" : "Not Completed"}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default UserManagement;
