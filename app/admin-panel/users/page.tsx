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
  dyslexiaRisk?: string; // Added dyslexiaRisk field
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

  // Updated filter logic to include dyslexiaRisk and handle undefined fields
  const filteredUsers = users.filter((user) => {
    const searchLower = searchQuery.toLowerCase();

    return (
      (user.name?.toLowerCase().includes(searchLower) || "") ||
      (user.email?.toLowerCase().includes(searchLower) || "") ||
      (user.parentName?.toLowerCase().includes(searchLower) || "") ||
      (user.childName?.toLowerCase().includes(searchLower) || "") ||
      (user.dyslexiaRisk?.toLowerCase().includes(searchLower) || "")
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

  const handleUpdateUser = (user: User) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      try {
        const response = await fetch(`/api/admin/users/${currentUser._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        });

        if (!response.ok) {
          throw new Error("Failed to update user");
        }

        const updatedUser = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user._id === updatedUser._id ? updatedUser : user))
        );
        handleModalClose();
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Failed to update user. Please try again.");
      }
    }
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
              <th className="py-3 px-4">Dyslexia Risk</th>
              <th className="py-3 px-4">Access</th>
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
                  <td className="py-4 px-4">{user.dyslexiaRisk || "No test result"}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`${
                        user.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      } py-1 px-2 rounded-full`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">{formatDate(user.lastActive)}</td>
                  <td className="py-4 px-4 space-x-2">
                    <button
                      onClick={() => handleUpdateUser(user)}
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
                <td colSpan={8} className="py-4 px-4 text-center text-gray-500">
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
          className={`${
            currentPage === 1 ? "text-gray-400" : "text-blue-500 hover:text-blue-600"
          } py-2 px-4`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className={`${
            currentPage === Math.ceil(filteredUsers.length / usersPerPage)
              ? "text-gray-400"
              : "text-blue-500 hover:text-blue-600"
          } py-2 px-4`}
          disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
        >
          Next
        </button>
      </div>

      {isModalOpen && currentUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">User Name</label>
                <input
                  type="text"
                  value={currentUser.name || ""}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg bg-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Dyslexia Risk</label>
                <select
                  value={currentUser.dyslexiaRisk || "No test result"}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, dyslexiaRisk: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg bg-transparent"
                >
                  <option value="No test result">No test result</option>
                  <option value="Low risk">Low risk</option>
                  <option value="Medium risk">Medium risk</option>
                  <option value="High risk">High risk</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="py-2 px-4 text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
