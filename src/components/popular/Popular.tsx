import { motion } from "framer-motion";
import { useState } from "react";
import { photo } from "./index";

type Photo = {
  pic: string;
  text: string;
  link: string;
};

export default function Popular() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10 overflow-hidden mt-10 px-4 lg:px-10">
      <motion.div 
        className="grid gap-5 lg:grid-cols-3 items-center relative"
        initial={{ opacity: 0, y: -20 }} // Initial animation values
        animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
        transition={{ duration: 0.5 }} // Animation duration
      >
        {photo.map((item: Photo, index: number) => (
          <motion.div
            key={index}
            className="w-full h-[250px] relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }} // Scale animation on hover
            transition={{ duration: 0.3 }} // Animation duration
          >
            <img
              src={item.pic}
              alt="image-photos"
              className="w-full h-full object-cover rounded-[5px]"
            />
            <p className="text-white absolute bottom-1 pl-4">{item.text}</p>

            {hoveredIndex === index && (
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center rounded-[5px]"
                initial={{ opacity: 0 }} // Initial animation values
                animate={{ opacity: 1 }} // Animation values after the component mounts
                transition={{ duration: 0.3 }} // Animation duration
              >
                <motion.div 
                  className="w-[150px] h-[40px] bg-white flex items-center justify-center font-semibold capitalize"
                  whileHover={{ scale: 1.05 }} // Scale animation on hover
                  transition={{ duration: 0.3 }} // Animation duration
                >
                  <p className="text-black">{item.link}</p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="flex flex-col py-10"
        initial={{ opacity: 0, y: -20 }} // Initial animation values
        animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left">Popular Destination</h2>
        <p className="text-lg lg:pr-10 text-center lg:text-left">We bring you the best recommendations for unforgettable experiences.</p>
      </motion.div>
    </div>
  );
}
