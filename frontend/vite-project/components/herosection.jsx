import "../src/App.css";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center p-10">
      {/* Text */}
      <div>
        <h1 className="text-5xl font-bold text-zinc-900">
          AI-Powered <span className="text-blue-600">Legal Assistant</span>
        </h1>
        <p className="text-gray-700 mt-4">
          Use AI to streamline legal research, validate ideas, and build contracts.
        </p>
      </div>

      {/* Floating Animation for Image */}
      <motion.img
        src="/public/ai.jpeg"
        alt="Legal AI"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="w-1/2"
      />
    </div>
  );
};

export default HeroSection;

  