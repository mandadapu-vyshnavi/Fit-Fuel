import { useState } from "react";
import Navbar from "../components/Navbar";

function MealRecommendation() {
  const [goal, setGoal] = useState("");
  const [mealPlan, setMealPlan] = useState(null);

  const meals = {
    "Weight Loss": {
      breakfast: "Oats + Apple + Green Tea",
      lunch: "Brown Rice + Grilled Chicken + Vegetables",
      snacks: "Almonds + Orange",
      dinner: "Paneer Salad + Soup",
    },
    "Weight Gain": {
      breakfast: "Milk + Banana + Peanut Butter Sandwich",
      lunch: "Rice + Chicken + Eggs",
      snacks: "Protein Shake + Dry Fruits",
      dinner: "Paneer + Sweet Potato",
    },
    "Muscle Gain": {
      breakfast: "Oats + Eggs + Milk",
      lunch: "Rice + Chicken Breast + Broccoli",
      snacks: "Protein Shake + Banana",
      dinner: "Fish + Sweet Potato + Vegetables",
    },
    "Maintain Weight": {
      breakfast: "Poha + Fruits",
      lunch: "Rice + Dal + Vegetables",
      snacks: "Mixed Nuts",
      dinner: "Chapati + Paneer Curry",
    },
  };

  const handleRecommendation = () => {
    if (!goal) {
      alert("Please select a fitness goal.");
      return;
    }

    setMealPlan(meals[goal]);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
            Meal Recommendation
          </h1>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          >
            <option value="">Select Fitness Goal</option>
            <option>Weight Loss</option>
            <option>Weight Gain</option>
            <option>Muscle Gain</option>
            <option>Maintain Weight</option>
          </select>

          <button
            onClick={handleRecommendation}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Get Meal Plan
          </button>

          {mealPlan && (
            <div className="mt-8 space-y-4">

              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="font-bold">🥣 Breakfast</h2>
                <p>{mealPlan.breakfast}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="font-bold">🍛 Lunch</h2>
                <p>{mealPlan.lunch}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="font-bold">🍎 Snacks</h2>
                <p>{mealPlan.snacks}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="font-bold">🥗 Dinner</h2>
                <p>{mealPlan.dinner}</p>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default MealRecommendation;