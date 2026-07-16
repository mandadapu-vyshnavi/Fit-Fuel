import { useState } from "react";
import Navbar from "../components/Navbar";

function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!age || !height || !weight) {
      alert("Please fill all fields.");
      return;
    }

    let bmr;

    if (gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setCalories(Math.round(bmr));
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex justify-center items-center px-6 py-10">

        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-10">

          {/* Header */}
          <div className="text-center">

            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-4xl">
              🔥
            </div>

            <h1 className="text-4xl font-extrabold text-gray-800 mt-5">
              Daily Calorie Calculator
            </h1>

            <p className="text-gray-500 mt-2">
              Find your daily calorie requirement
            </p>

          </div>

          {/* Form */}
          <div className="mt-8">

            <label className="font-semibold text-gray-700">
              Age
            </label>

            <input
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full mt-2 mb-5 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
            />

            <label className="font-semibold text-gray-700">
              Gender
            </label>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full mt-2 mb-5 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
            >
              <option>Male</option>
              <option>Female</option>
            </select>

            <label className="font-semibold text-gray-700">
              Height (cm)
            </label>

            <input
              type="number"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full mt-2 mb-5 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
            />

            <label className="font-semibold text-gray-700">
              Weight (kg)
            </label>

            <input
              type="number"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full mt-2 mb-6 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
            />

            <button
              onClick={calculateCalories}
              className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300"
            >
              Calculate Calories
            </button>

          </div>

          {/* Result */}
          {calories && (
            <div className="mt-8 bg-green-50 rounded-2xl shadow-md p-6 text-center">

              <h2 className="text-lg text-gray-600">
                Your Daily Calories
              </h2>

              <h1 className="text-5xl font-extrabold text-green-600 mt-3">
                {calories}
              </h1>

              <p className="text-gray-600 mt-2">
                kcal/day
              </p>

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default CalorieCalculator;