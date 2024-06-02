import { motion } from "framer-motion";
import Navbar from "../nav/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-home px-4 lg:px-10 pt-10">
      <Navbar />

      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0 }} // Initial animation values
        animate={{ opacity: 1 }} // Animation values after the component mounts
        transition={{ delay: 0.2, duration: 0.5 }} // Animation duration with a delay
      >
        <motion.div 
          className="mt-10 lg:mt-20"
          initial={{ opacity: 0, y: -20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
          transition={{ delay: 0.4, duration: 0.5 }} // Animation duration with a delay
        >
          <h1 className="text-center text-2xl lg:text-3xl xl:text-4xl font-bold capitalize pt-10 pr-4 lg:pr-10">
            Journey to the Unknown, Exploring
            <br className="hidden lg:inline" />
            the World's Hidden Gems
          </h1>
          <p className="text-center text-base lg:text-lg xl:text-xl pt-5 text-[#5F5C5C] px-4 lg:px-0">
            Traveling opens up a world of experiences, from exploring new cultures
            and cuisines to 
            <br className="hidden lg:inline" />
            discovering breathtaking landscapes and historical landmarks.
          </p>
        </motion.div>
        
        <motion.button 
          className="bg-black text-white capitalize w-40 lg:w-64 h-12 lg:h-14 rounded-sm mt-5 lg:mt-8 xl:mt-10"
          whileHover={{ scale: 1.05 }} // Scale animation on hover
          whileTap={{ scale: 0.95 }} // Scale animation when tapped
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}
