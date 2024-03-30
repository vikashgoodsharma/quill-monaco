import { useState } from "react";

const EditorHead = () => {
 



  return (
<div className="w-full p-4">
    <div className="w-full flex justify-between ">
        <div className="flex gap-2">
            <img src="/contract.svg"/>
            <p className="text-[#EEEEEE] text-[24px] self-center"> Sample Project</p>
        </div>

        <div className="flex gap-2">
        <button className="bg-[#007AFF] hover:bg-blue-700 text-white py-2 px-8 rounded">
        Audit Now
        </button>

        <button className="bg-[#152C46] text-[#007AFF] hover:bg-blue-700 py-2 px-8 rounded relative">
        Options
        <div className="w-[9px] h-[9px] bg-[#ff0000] rounded-full absolute top-0 right-0"></div>
        </button>
        </div>
      


    
     

    
    </div>
    <div className="w-full h-[1px] bg-white opacity-25 my-4"></div>
    </div>
  );
};

export default EditorHead;