import { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}
      <div
        className="hidden lg:flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-green-900/60"></div>

        <div className="relative z-10 text-center text-white px-10">
          <h1 className="text-6xl font-extrabold">
            Fit Fuel
          </h1>

          <p className="mt-6 text-xl leading-9">
            Eat Smart. Train Better. Achieve Your Fitness Goals.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6">

        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

          <div className="text-center">

            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-4xl">
              🔐
            </div>

            <h2 className="text-4xl font-extrabold text-gray-800 mt-5">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue your fitness journey
            </p>

          </div>

          <form onSubmit={handleSubmit} className="mt-10">

            <label className="font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full mt-2 mb-5 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
            />

            <label className="font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full mt-2 mb-6 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
            />

            <div className="flex justify-between items-center mb-6">

              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember Me
              </label>

              <a
                href="#"
                className="text-green-600 hover:text-green-700"
              >
                Forgot Password?
              </a>

            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-700 shadow-lg hover:shadow-xl transition duration-300"
            >
              Login
            </button>

            <p className="text-center text-gray-600 mt-8">
              Don't have an account?{" "}
              <span className="text-green-600 font-semibold cursor-pointer hover:underline">
                Register
              </span>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;