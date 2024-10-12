"use client";
import { useEffect, useState } from "react";

// Define the type for the user object
type User = {
  id: string;
  name?: string;
  email?: string;
  role?: string;
  lastActive?: string; // Format: ISO string or any preferred format
  avatar?: string;
  parentName?: string; // Add parent name
  childName?: string; // Add child name
  childAge?: number; // Update this to match the model property
};

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]); // Define users as an array of User
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 10;

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/users");
        const data = await response.json();
        console.log("Fetched Users:", data); // Debugging: Log fetched users
        setUsers(data); // Assume the response matches the User[] type
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Function to format the date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString(); // Format as 'MM/DD/YYYY, HH:MM AM/PM'
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    const nameMatch = user.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = user.email?.toLowerCase().includes(searchQuery.toLowerCase());
    const parentMatch = user.parentName?.toLowerCase().includes(searchQuery.toLowerCase());
    const childMatch = user.childName?.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || emailMatch || parentMatch || childMatch;
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

  const handleDeleteUser = (id: string) => {
    // Implement delete functionality here
    console.log("Delete user with id:", id);
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
            const response = await fetch(`/api/admin/users/${currentUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser), // Send the updated user data
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            const updatedUser = await response.json(); // Assume your API returns the updated user

            // Update the users state with the updated user
            setUsers((prevUsers) =>
                prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
            );

            handleModalClose(); // Close the modal
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user. Please try again.'); // Alert user in case of error
        }
    }
};

  return (
    <div className="p-6">
      {/* Header with search, filters, and add user */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-100 text-sm text-gray-600 px-3 py-1 rounded-md">
            Filters
          </button>
          <button className="bg-primary-color text-white px-4 py-2 rounded-md">
            + Add User
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border bg-transparent border-gray-300 px-4 py-2 rounded-lg w-full"
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-left text-sm text-gray-600">
            <tr>
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Parent Name</th>
              <th className="py-3 px-4">Child Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Access</th>
              <th className="py-3 px-4">Last Active</th>
              <th className="py-3 px-4">Actions</th> {/* Added Actions column */}
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-4 px-4 flex items-center">
                    <img
                      src={user.avatar || "/default-avatar.png"}
                      alt={user.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{user.parentName || "N/A"}</td>
                  <td className="py-4 px-4">{user.childName || "N/A"}</td>
                  <td className="py-4 px-4">{user.childAge !== undefined ? user.childAge : "N/A"}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`${
                        user.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      } py-1 px-2 rounded-full text-sm`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">{formatDate(user.lastActive)}</td>
                  <td className="py-4 px-4">
                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleUpdateUser(user)}
                        className="text-blue-500 hover:underline"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-4 px-4 text-center" colSpan={7}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-1">
          <button
            onClick={prevPage}
            className={`${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            } bg-gray-100 text-gray-600 px-3 py-1 rounded-l`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map(
            (_, page) => (
              <button
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                className={`${
                  currentPage === page + 1
                    ? "bg-primary-color text-white"
                    : "bg-gray-100 text-gray-600"
                } px-3 py-1 rounded`}
              >
                {page + 1}
              </button>
            )
          )}
          <button
            onClick={nextPage}
            className={`${
              currentPage >= Math.ceil(filteredUsers.length / usersPerPage)
                ? "opacity-50 cursor-not-allowed"
                : ""
            } bg-gray-100 text-gray-600 px-3 py-1 rounded-r`}
            disabled={currentPage >= Math.ceil(filteredUsers.length / usersPerPage)}
          >
            Next
          </button>
        </div>
        <span className="text-sm text-gray-500">
          Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
        </span>
      </div>

      {/* Update User Modal */}
      {isModalOpen && currentUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Update User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={currentUser.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Parent Name</label>
                <input
                  type="text"
                  value={currentUser.parentName}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, parentName: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Child Name</label>
                <input
                  type="text"
                  value={currentUser.childName}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, childName: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Child Age</label>
                <input
                  type="number"
                  value={currentUser.childAge || ""}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, childAge: parseInt(e.target.value) })
                  }
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={handleModalClose} className="text-gray-500 hover:underline">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Update
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
