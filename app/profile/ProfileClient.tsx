
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

    useEffect(() => {
        if (session?.user?.email) {
            axios.get('/api/user')
                .then(response => setUserData(response.data))
                .catch(err => setError('Failed to load profile data'));
        }
    }, [session]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleAvatarChange = (avatar: string) => {
        setUserData({ ...userData, avatar });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
            await axios.put('/api/user', userData);
            alert('Profile updated successfully');
            await updateSession(); // Ensure session is updated
        } catch (error) {
            setError('Error updating profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Parent Name:</label>
                    <input
                        type="text"
                        name="parentName"
                        value={userData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Child Name:</label>
                    <input
                        type="text"
                        name="childName"
                        value={userData.childName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Child Age:</label>
                    <input
                        type="number"
                        name="childAge"
                        value={userData.childAge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Avatar:</label>
                    <div className="flex space-x-4">
                        {avatarOptions.map((avatar) => (
                            <div key={avatar} className="relative">
                                <Image
                                    src={avatar}
                                    alt="Avatar"
                                    width={50}
                                    height={50}
                                    className={`w-12 h-12 rounded-full cursor-pointer ${userData.avatar === avatar ? 'border-4 border-green-500' : ''}`}
                                    onClick={() => handleAvatarChange(avatar)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-300"
                >
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
};

export default ProfileClient;
