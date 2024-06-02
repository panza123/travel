import { motion } from "framer-motion";
import { blog } from "./index";

export default function Blog() {
  return (
    <div className="max-w-[1440px] mx-auto  lg:px-10 px-4 py-8">
      
      <motion.h1 
          className="text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: -20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
          transition={{ duration: 0.5 }} // Animation duration
        >
          Blogs
        </motion.h1>
        <motion.p 
          className="text-[#5f5c5c]  text-center  md:pl-0  md:text-left lg:text-xl pt-10 "
          initial={{ opacity: 0, y: -20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation values after the component mounts
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
        >
          Discover the beauty, challenge, and tranquility that come with venturing into high altitudes. "Mountain Adventures" is your ultimate guide
        </motion.p>


      

   <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-20">


   {blog.map((item, index) => (
        <motion.div
          key={index}
          className="max-w-[400px] shadow-lg shadow-black rounded-t-[5px] mx-auto"
          whileHover={{ scale: 1.05 }} // Scale animation on hover
          transition={{ duration: 0.3 }} // Animation duration
        >
          <img src={item.pic} alt="" className="rounded-t-[5px] w-full" />
          <div className="px-3 py-3">
            <h4 className="text-center font-semibold text-xl">{item.title}</h4>
            <p className="text-[#5F5C5C] text-center">{item.text}</p>
            <button className="w-full h-[50px] bg-black text-white mx-auto mt-3">
              {item.detail}
            </button>
          </div>
        </motion.div>
      ))}

   </div>



    </div>
  );
}
