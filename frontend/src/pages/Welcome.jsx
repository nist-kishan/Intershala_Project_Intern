import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f29] via-[#1e2749] to-[#2b3c5e] text-white px-6 py-12 flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-md">
            Welcome to <br /> Intern
          </h1>
          <p className="text-lg mb-8 text-gray-300 drop-shadow-sm">
            Kickstart your journey, make an impact, and grow with us.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 cursor-pointer"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button className="border border-white/30 hover:border-pink-400 text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer ">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/intern.png"
            alt="Intern"
            className="w-full drop-shadow-2xl rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
