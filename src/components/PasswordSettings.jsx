import React, { useState } from 'react';

const PasswordSettings = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (passwords.new !== passwords.confirm) {
      alert("New passwords don't match!");
      return;
    }
    
    // Handle password change here
    console.log('Password change requested:', passwords);
    alert('Password changed successfully!');
    
    // Reset form
    setPasswords({
      current: '',
      new: '',
      confirm: ''
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-sm text-gray-600">Password & Settings</p>
      </div>
      
      <div className="mb-8">
        <h4 className="font-medium mb-4">Password</h4>
        
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              name="new"
              value={passwords.new}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordSettings;