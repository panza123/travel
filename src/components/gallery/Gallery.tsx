import { motion } from "framer-motion";
import { display } from "./index";

export default function Gallery() {
  return (
    <div className="max-w-[1440px] grid lg:px-10 py-10 lg:grid-cols-3 gap-5">
      {display.map((item, index) => (
        <motion.div
          key={index}
          className="relative w-full sm:w-full grid-span-1 lg:grid-span-2 overflow-hidden"
          whileHover={{ scale: 1.05 }} // Scale animation on hover
          transition={{ duration: 0.3 }} // Animation duration
        >
          <img
            src={item.photo}
            alt=""
            className="w-full h-full object-cover rounded-[5px]"
          />
        </motion.div>
      ))}
    </div>
  );
}
