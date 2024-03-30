import { useState } from "react";

const NavDir = () => {
 
    const [currentNav, setCurrentNav]= useState(3);

  const links = [
    {
      id: 1,
      link: "AI Audit",
    },
    {
      id: 2,
      link: "My Projects",
    },
    {
      id: 3,
      link: "Code Editor",
    },
  ];

  return (

    <div className="mt-4">
    
      <ul className="flex ml-[1%]">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`self-center nav-links cursor-pointer capitalize font-medium ${id == currentNav ? 'text-white': 'text-gray-500'}  hover:scale-105 hover:text-whit duration-200 link-underline`}
            onClick={()=>setCurrentNav(id)}
          > 
           {link} {id < 3 &&<span className="text-gray-500 px-2">/</span>}
          </li>
        ))}
       
      </ul>

      

    
    </div>
  );
};

export default NavDir;