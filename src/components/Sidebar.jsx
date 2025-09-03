import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    'Overview',
    'Route Management',
    'Carrier Management',
    'User Management',
    'Node Management',
    'Principal Management',
    'Notification',
    'Settings'
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">RIPPLR</h1>
        <div className="text-xs mt-1 flex justify-between">
          <span>RIPPLR 1/2.7</span>
          <span className="text-green-500">No Delay</span>
        </div>
      </div>
      
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`px-4 py-3 cursor-pointer hover:bg-gray-700 transition-colors ${
              activeTab === item ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </div>
        ))}
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors">
        Logout
      </div>
    </div>
  );
};

export default Sidebar;