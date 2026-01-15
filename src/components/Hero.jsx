import React from 'react';
import robotVideo from '../assets/robot.mp4';
const Hero = () => {
  return (
    <section className="bg-black min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        
        <div className="text-white space-y-6">
          <div className="inline-block bg-gray-900 border border-gray-700 px-4 py-1 rounded-full text-sm text-green-400 font-medium">
            AI-POWERED AUTOMATION
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The Future <br />
            Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Alive</span>.
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Meet Xenon. The world's first fully sentient humanoid robot designed for seamless human interaction and industrial efficiency.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              Watch Demo
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-bold hover:border-green-400 hover:text-green-400 transition">
              View Specs
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-2xl">
        <video
        className=" top-0 left-0 w-full h-full fit-cover rounded-2xl shadow-lg border border-gray-700"
        src={robotVideo} 
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_9%,black_100%)] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;