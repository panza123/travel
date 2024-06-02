import { motion } from "framer-motion";
import mount from "../../assets/image/mount.png";

export default function Travel() {
  return (
    <motion.div 
      className="max-w-[1440px] px-10 py-10 bg-travel bg-cover bg-center grid lg:flex justify-between items-center gap-10 mt-10"
      initial={{ opacity: 0, y: -20 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="max-w-[720px]">
        <motion.h2 
          className="text-xl lg:text-3xl font-semibold"
          initial={{ opacity: 0, y: -20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
          transition={{ duration: 0.5 }} // Animation duration
        >
          A Traveler's Guide to Breathtaking Viewpoints
        </motion.h2>
        <motion.p 
          className="pt-5 text-[#5F5C5C]"
          initial={{ opacity: 0, y: -20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
        >
          This blog could showcase the world's most stunning viewpoints and scenic spots. Each post could feature a different viewpoint, such as mountaintop lookouts, panoramic city vistas, or picturesque coastal cliffs, offering practical advice for getting there, capturing the best photos, and enjoying the breathtaking scenery.
        </motion.p>
      </div>

      <div className="max-w-[500px]">
        <motion.img 
          src={mount} 
          alt="mountain-image" 
          className="w-[500px]" 
          initial={{ opacity: 0, x: 20 }} // Initial animation values
          animate={{ opacity: 1, x: 0 }} // Animation values after the component mounts
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with a delay
        />
      </div>
    </motion.div>
  );
}
