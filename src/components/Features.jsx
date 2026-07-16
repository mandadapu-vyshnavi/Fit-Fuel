function Features() {
  const features = [
    {
      title: "🥗 Personalized Meal Plans",
      description: "Get meal recommendations based on your fitness goals."
    },
    {
      title: "📊 BMI & Calorie Calculator",
      description: "Calculate your BMI and daily calorie requirements."
    },
    {
      title: "💪 Fitness Goal Tracking",
      description: "Track your weight loss, muscle gain, or maintenance progress."
    },
    {
      title: "❤️ Save Favorite Meals",
      description: "Save meals you like and access them anytime."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-600">
          Why Choose Fit Fuel?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Everything you need to stay healthy and achieve your fitness goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 mt-12">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;