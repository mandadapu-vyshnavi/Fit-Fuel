import { useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    foodPreference: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    alert("Profile Saved Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">

          <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
            My Profile
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />

            <select
              name="gender"
              className="border p-3 rounded-lg"
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
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />

            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />

            <select
              name="goal"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            >
              <option value="">Select Goal</option>
              <option>Weight Loss</option>
              <option>Weight Gain</option>
              <option>Muscle Gain</option>
              <option>Maintain Weight</option>
            </select>

            <select
              name="foodPreference"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            >
              <option value="">Food Preference</option>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Vegan</option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Save Profile
            </button>
          </form>

        </div>
      </div>
    </>
  );
}

export default Profile;