import React, { useEffect, useState } from 'react';

interface NotificationData {
  type: string;
  content: string;
  link: string;
  status?: 'taken' | 'taking'; // Optional status for assessment
}

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const getNotificationStyle = (status?: 'taken' | 'taking') => {
    switch (status) {
      case 'taken':
        return 'bg-green-100 border-green-300 hover:bg-green-200';
      case 'taking':
        return 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200';
      default:
        return 'bg-gray-100 border-gray-300 hover:bg-gray-200';
    }
  };

  return (
    <div className="notification-container p-4">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`notification-item p-3 border rounded-md shadow-sm transition ${getNotificationStyle(
              notification.status
            )}`}
          >
            <div className="font-medium text-gray-800">{notification.type}</div>
            <p className="text-sm text-gray-600">{notification.content}</p>
            <a
              href={notification.link}
              className="text-blue-600 hover:underline mt-1 inline-block"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
