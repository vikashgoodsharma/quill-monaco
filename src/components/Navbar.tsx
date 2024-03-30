import { useState } from "react";

const Navbar = () => {
 
    const [currentNav, setCurrentNav]= useState(1);

  const links = [
    {
      id: 1,
      link: "AI Audit",
    },
    {
      id: 2,
      link: "Manual Audit",
    },
    {
      id: 3,
      link: "RedTeam",
    },
    {
      id: 4,
      link: "Monitor",
    },
    {
      id: 5,
      link: "Incident Response",
    },
  ];

  return (

    <div className="flex justify-between items-center w-[98%] mx-[1%] mt-4 h-20 rounded-lg px-4 text-white bg-[#191D23]  nav">
      <div>
          <div
            className="flex gap-2 ml-8"
          >
          <img src="/Shield.svg"/>  <p className="text-[16px] self-center font-semibold">QuillShield</p>
          <div className="w-[1px] h-20 ml-16  bg-white opacity-50 "></div>
          </div>

      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`self-center nav-links px-4 cursor-pointer capitalize font-medium ${id == currentNav ? 'text-[#007AFF]': 'text-gray-500'}  hover:scale-105 hover:text-[#007AFF] duration-200 link-underline`}
            onClick={()=>setCurrentNav(id)}
          >
           {link}
          {currentNav == id && <div className="w-full h-[2px] bg-[#007AFF] mt-1"></div>}
          </li>
        ))}
        <li className="w-[1px] h-20 ml-16  bg-white opacity-50 "></li>
        <li className="flex gap-4 px-4">
            <img src="/DP.svg"/>
            <p className="text-[14px] self-center font-semibold w-[150px]">Jhonny Doe</p>
            <img src="/Arrow.svg" className="w-[14px] h-[14px] self-center"/>

        </li>
      </ul>

      

    
    </div>
  );
};

export default Navbar;