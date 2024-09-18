"use client"; // Ensure this component runs client-side

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Image from 'next/image';

const avatarOptions = [
    '/images/avatar.png',
    '/images/avatarr.png',
    '/images/avatarrr.png'
];

const ProfileClient = () => {
    const { data: session, update: updateSession }: any = useSession();
    const [userData, setUserData] = useState({
        name: '',
        parentName: '',
        childName: '',
        childAge: '',
        avatar: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Load user profile data on initial render
    useEffect(() => {
        if (session?.user?.email) {
            axios.get('/api/user')
                .then(response => setUserData(response.data))
                .catch(err => setError('Failed to load profile data'));
        }
    }, [session]);

    // Handle form inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Handle avatar selection
    const handleAvatarChange = (avatar: string) => {
        setUserData({ ...userData, avatar });
    };

    // Handle profile submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
            // Save the updated user data
            await axios.put('/api/user', userData);
    
            // Refresh session with the new avatar
            await updateSession({
                ...session,
                user: {
                    ...session.user,
                    image: userData.avatar // Update session user image
                }
            });
    
            alert('Profile updated successfully');
        } catch (error) {
            setError('Error updating profile');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
                <div className="relative w-24 h-24 mr-4">
                    <Image
                        src={userData.avatar || '/images/avatar.png'}
                        alt="Avatar"
                        fill
                        className="rounded-full border"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{userData.name || 'User'}</h2>
                    <p className="text-gray-500">Update your avatar and profile details.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="block w-full p-2 bg-white border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="parentName" className="block mb-2 text-sm font-medium text-gray-700">Parent Name</label>
                        <input
                            type="text"
                            id="parentName"
                            name="parentName"
                            value={userData.parentName}
                            onChange={handleInputChange}
                            className="block w-full p-2 bg-white border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="childName" className="block mb-2 text-sm font-medium text-gray-700">Child Name</label>
                        <input
                            type="text"
                            id="childName"
                            name="childName"
                            value={userData.childName}
                            onChange={handleInputChange}
                            className="block w-full p-2 bg-white border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="childAge" className="block mb-2 text-sm font-medium text-gray-700">Child Age</label>
                        <input
                            type="text"
                            id="childAge"
                            name="childAge"
                            value={userData.childAge}
                            onChange={handleInputChange}
                            className="block w-full p-2 bg-white border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700">Choose an Avatar</h3>
                    <div className="flex space-x-4 mt-4">
                        {avatarOptions.map((avatar, index) => (
                            <div key={index} className="relative w-16 h-16">
                                <Image
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}
                                    fill
                                    className={`rounded-full cursor-pointer ${userData.avatar === avatar ? 'ring-2 ring-green-500' : ''}`}
                                    onClick={() => handleAvatarChange(avatar)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md font-medium"
                    disabled={loading}
                >
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default ProfileClient;
