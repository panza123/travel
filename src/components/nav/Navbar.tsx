import { link, link2 } from "./index";
import logo from "../../assets/image/travel logo 1(1).png"; // Corrected file path and name
import { FaHamburger,FaSkullCrossbones } from "react-icons/fa";
import { useState } from "react";
export default function Navbar() {
    const [isopen,setisOpen] = useState<boolean>(false)
    function handleClick(){
        setisOpen(!isopen)
    }
  return (
    <header className="w-full flex justify-between items-center  ">
    {/* {big screen display} */}
      <ul className="hidden lg:flex gap-5 items-center uppercase font-semibold">
        {link.map((item, index) => (
          <li key={index}><a href={item.link}>  {item.name} </a>  </li>
        ))}
      </ul>
        
      <div className="circle">
      <img src={logo} alt="Logo" className="w-full h-auto object-cover " /> {/* Added alt text and adjusted image size */}

      </div>

      <ul className="hidden lg:flex gap-5 items-center uppercase font-semibold">
        {link2.map((item, index) => (
          <li key={index}><a href={item.link}>  {item.name} </a>  </li>
        ))}
      </ul>

      {/* {menu menu toogle} */}
      <div onClick={handleClick} className=" z-30  lg:hidden">
            {!isopen ?<FaHamburger className="cursor-pointer" size={50} />: <FaSkullCrossbones className="cursor-pointer" size={50}/>}
            
      </div>
{/* {mobile menu side bar} */}

<div className={`${isopen ? 'translate-x-0' : 'translate-x-full'} 
fixed top-0 right-0 w-[300px] h-screen backdrop-blur-[20px] bg-gray-400/50 pt-[200px] px-5 duration-100 leading-10`}>
  <ul className="items-center uppercase font-bold ">
    {link.map((item, index) => (
      <li key={index}><a href={item.link}>{item.name}</a></li>
    ))}
  </ul>
  <ul className="items-center uppercase font-bold">
    {link2.map((item, index) => (
      <li key={index}><a href={item.link}>{item.name}</a></li>
    ))}
  </ul>
</div>

    
    </header>
  );
}
