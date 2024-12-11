"use client";
import React, { useEffect, useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications'); // Replace with your actual API endpoint
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notification-container p-4">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item p-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 transition">
            <div className="font-medium text-gray-800">{notification.type}</div>
            <p className="text-sm text-gray-600">{notification.content}</p>
            <a href={notification.link} className="text-blue-600 hover:underline mt-1 inline-block">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
