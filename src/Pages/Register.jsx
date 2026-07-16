import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    foodPreference: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Create Your Fit Fuel Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <select
            name="gender"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <select
            name="goal"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          >
            <option value="">Fitness Goal</option>
            <option>Weight Loss</option>
            <option>Weight Gain</option>
            <option>Muscle Gain</option>
            <option>Maintain Weight</option>
          </select>

          <select
            name="foodPreference"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          >
            <option value="">Food Preference</option>
            <option>Veg</option>
            <option>Non-Veg</option>
            <option>Vegan</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;