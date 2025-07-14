import React, { useState, useEffect } from 'react';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: `Nueva actualización de Intergroup: ${new Date().toLocaleTimeString()}`,
        read: false,
      };
      setNotifications((prev) => [newNotification, ...prev].slice(0, 5));
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {notifications.length > 0 && (
        <div
          className={`bg-white p-4 rounded-xl shadow-2xl border border-red-100 transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Notificaciones</h3>
          <ul className="space-y-2">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`text-sm p-2 rounded-lg ${
                  notif.read ? 'text-gray-500 bg-gray-50' : 'text-gray-800 bg-red-100'
                } flex justify-between items-center`}
              >
                <span>{notif.message}</span>
                {!notif.read && (
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="ml-4 text-red-600 hover:text-red-800 text-xs font-medium"
                  >
                    Marcar como leído
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;