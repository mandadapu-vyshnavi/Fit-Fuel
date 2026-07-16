function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* Top - Logo & Description */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-green-500">
        💪 Fit Fuel
      </h2>

      <p className="mt-4 text-gray-400 max-w-7.8xl mx-auto">
        Helping gym enthusiasts achieve their fitness goals with
        personalized meal recommendations.
      </p>
    </div>

    {/* Bottom - Quick Links & Contact */}
    <div className="grid md:grid-cols-2 gap-1.5 text-center">

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Contact
        </h3>

        <p>Email: mandadapuvyshnavi@fitfuel.com</p>
        <p>Phone: +91 9392852103</p>
        <p>Location: India</p>
      </div>

    </div>

    {/* Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
      © 2026 Fit Fuel. All Rights Reserved.
    </div>

  </div>
</footer>
  );
}
export default Footer;
