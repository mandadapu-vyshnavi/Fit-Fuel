function Hero() {
  return (
   <section className="bg-green-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Eat Smart,
            <span className="text-green-600"> Train Better</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Get personalized meal plans based on your fitness goals,
            whether you want to gain muscle, lose weight, or stay fit.
          </p>

          <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Explore Meals
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
            alt="Healthy Food"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;