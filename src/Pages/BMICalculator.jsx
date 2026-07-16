import { useState } from "react";
import Navbar from "../components/Navbar";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (
      weight /
      (heightInMeters * heightInMeters)
    ).toFixed(1);

    setBMI(bmiValue);
  };

  const getCategory = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Healthy";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-10">

        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-10">

          <div className="text-center">

            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-4xl">
              💪
            </div>

            <h1 className="text-4xl font-extrabold mt-5 text-gray-800">
              BMI Calculator
            </h1>

            <p className="text-gray-500 mt-2">
              Check your Body Mass Index instantly
            </p>

          </div>

          <div className="mt-8">

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
              onClick={calculateBMI}
              className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300"
            >
              Calculate BMI
            </button>

          </div>

          {bmi && (
            <div className="mt-8 bg-green-50 rounded-2xl p-6 text-center shadow">

              <h2 className="text-lg text-gray-600">
                Your BMI
              </h2>

              <h1 className="text-6xl font-extrabold text-green-600 mt-3">
                {bmi}
              </h1>

              <span className="inline-block mt-4 px-5 py-2 bg-green-600 text-white rounded-full font-semibold">
                {getCategory()}
              </span>

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default BMICalculator;