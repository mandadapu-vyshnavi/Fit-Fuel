function About() {
  return (
   <section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

    {/* Left Side - Text */}
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold text-green-600 mb-6">
        About Fit Fuel
      </h2>

      <p className="text-gray-700 text-lg leading-8">
        Fit Fuel is a smart meal recommendation platform designed especially
        for gym enthusiasts. We help users discover personalized meal plans
        based on their body type, fitness goals, and nutritional requirements.
      </p>

      <p className="text-gray-700 mt-5">
        Whether your goal is muscle gain, weight loss, or maintaining a healthy
        lifestyle, Fit Fuel provides balanced meal recommendations to help you
        reach your target.
      </p>

      <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
        Learn More
      </button>
    </div>

    {/* Right Side - Image */}
    <div className="md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=550"
        alt="Fitness"
        className="rounded-xl shadow-lg"
      />
    </div>

  </div>
</section>
  );
}

export default About;