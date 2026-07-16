import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">

        {/* Welcome Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome Back,
            <span className="text-green-600"> Vyshu 👋</span>
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Track your fitness journey and stay consistent with your nutrition goals.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl">📊</div>
            <h2 className="text-xl font-bold mt-4">BMI</h2>
            <p className="text-4xl font-extrabold text-green-600 mt-2">
              22.4
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl">🔥</div>
            <h2 className="text-xl font-bold mt-4">Calories</h2>
            <p className="text-4xl font-extrabold text-green-600 mt-2">
              2450
            </p>
            <span className="text-gray-500">kcal/day</span>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl">🎯</div>
            <h2 className="text-xl font-bold mt-4">Goal</h2>
            <p className="text-2xl font-bold text-green-600 mt-2">
              Muscle Gain
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl">💧</div>
            <h2 className="text-xl font-bold mt-4">Water Intake</h2>
            <p className="text-4xl font-extrabold text-green-600 mt-2">
              2.5L
            </p>
          </div>

        </div>

        {/* Meal Plan Section */}
        <div className="mt-14">

          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            🍽 Today's Meal Plan
          </h2>

          <div className="grid md:grid-cols-1 gap-12">

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600">
                🥣 Breakfast
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Oats + Banana + Milk + Eggs
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600">
                🍛 Lunch
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Rice + Chicken + Vegetables
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600">
                🥗 Dinner
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Paneer + Sweet Potato + Salad
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600">
                🍎 Snacks
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Almonds + Apple + Protein Shake
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;