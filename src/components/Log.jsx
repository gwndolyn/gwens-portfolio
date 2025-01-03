import React, { useState } from "react";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase-config"; // Firebase config file
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google logo icon
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for password toggle

const Log = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Logged in:", userCredential.user);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Sign-In Successful:", result.user);
      navigate("/home"); // Redirect to home page
    } catch (err) {
      console.error(err);
      setError("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="w-full max-w-md rounded-lg shadow-lg p-8 bg-black/30 backdrop-blur-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-pink-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-pink-300 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-white focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 text-white font-semibold rounded-lg bg-black/30 backdrop-blur-md border border-pink-300 hover:bg-pink-300 hover:text-black transition"
          >
            Log In
          </button>
        </form>

        {/* Google Sign-In Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="p-3 rounded-full shadow hover:shadow-lg transition"
          >
            <FcGoogle className="text-2xl" />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-pink-300 mt-4">
          Don't have an account?{" "}
          <span
            className="underline cursor-pointer hover:text-pink-500"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Log;
