import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <div className="text-xl font-semibold text-blue-600 cursor-pointer">Login</div>
          <span className="mx-4 text-gray-400">|</span>
          <div className="text-xl font-semibold text-gray-500 cursor-pointer">Sign Up</div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
            <span className="text-gray-500 pr-2">📧</span>
            <input
              type="email"
              placeholder="Please input your Email ID"
              className="w-full outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
            <span className="text-gray-500 pr-2">🔒</span>
            <input
              type="password"
              placeholder="Please input your Password"
              className="w-full outline-none"
            />
            <button className="text-gray-500">👁️</button>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <button className="bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800">Sign in</button>
          <button className="bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800">Login with OTP</button>
        </div>

        <div className="text-center mt-4 text-sm text-blue-600">
          <a href="#" className="hover:underline">Forgot password</a> (or) <a href="#" className="hover:underline">SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
