import React, { useState } from 'react';
import { FaUserShield, FaKey, FaEye, FaEyeSlash, FaMicrosoft } from 'react-icons/fa';
import { SiAuthy } from 'react-icons/si';

const StaffLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    twoFactorCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle secure login logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Security Badge */}
      <div className="absolute top-4 right-4 flex items-center text-white text-sm">
        <SiAuthy className="mr-2 text-xl text-green-400" />
        SSL Secured Connection
      </div>

      {/* Login Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 transform transition-all hover:scale-[1.01]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="Spardha sarathi logo copy.png" 
              alt="Organization Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            <FaUserShield className="inline-block mr-2 text-blue-600" />
            Staff Portal Access
          </h1>
          <p className="text-gray-600 text-sm">Restricted Administrative Access</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institutional ID
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter institutional ID"
                required
              />
              <FaUserShield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secure Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter secure password"
                required
              />
              <FaKey className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* 2FA Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              2-Factor Authentication
            </label>
            <div className="relative">
              <input
                type="text"
                name="twoFactorCode"
                value={formData.twoFactorCode}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter 6-digit code"
                required
              />
              <SiAuthy className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Security Features */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="secureSession"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="secureSession" className="ml-2 text-gray-600">
                Private Device
              </label>
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Emergency Access
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
          >
            <FaUserShield className="mr-2" />
            Authenticate Access
          </button>

          {/* Enterprise Login */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="text-center text-sm text-gray-600 mb-4">
              Enterprise Authentication Methods
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaMicrosoft className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium">Microsoft 365</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <SiAuthy className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-sm font-medium">Authy</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Spardha Sarathi Academy</p>
            <p>Restricted Access - Authorized Personnel Only</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffLogin;
