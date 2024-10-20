import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Stay Secure, Stay Informed</h1>
        <p className="text-lg text-gray-700 mb-6">
          Learn cybersecurity best practices and explore real-world attack simulations.
        </p>
        <Link to='/best-practices'>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">
            Get Started
          </button>
        </Link>
      </section>

      {/* Simulation Showcase Section */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Simulation Showcase</h2>
        <p className="text-lg text-gray-700 mb-6">
          Explore simulations like phishing attacks, ransomware, and password cracking.
        </p>
        <Link to='/simulation'>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">
            Try a Demo
          </button>
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Start Learning Today!</h2>
        <Link to='/simulation'>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">
            Join Now
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;