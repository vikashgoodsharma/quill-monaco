import { useState } from "react";
import IssueItem from "./IssueItem";
import { ISSUE_DATA } from "@/constants";
import IssueTypes from "./IssueTypes";
import IssueActiveItem from "./IssueActiveItem";
import IssueActiveItemDetails from "./IssueActiveItemDetails";


const IssueCount = () => {
    const [activeButton, setActiveButton]= useState(0);
    const [selectedIssue, setSelectedIssue]= useState(null);
    const [selectedIssueType, setSelectedIssueType]= useState(null);


 
   

  return (

    <div className="w-[20%] p-2 rounded-lg bg-[#13161A]">
        <p className={`${selectedIssue ? 'text-gray-500': "text-white"}`}><span onClick={()=>setSelectedIssue(null)}>Count of Issues </span>{selectedIssue && <span>/ <span onClick={()=>setSelectedIssueType(null)} className={`${selectedIssueType ? 'text-gray-500': "text-white"}`}>{selectedIssue.title}</span></span>}  {selectedIssueType && <span>/ <span className="text-white">Issue #{selectedIssueType.id}</span></span>}</p>
        <div className="w-full h-[1px] bg-white opacity-25 my-4"></div>
      
      {selectedIssue == null &&
       <div className="bg-[#1E232B] flex gap-2 rounded-lg p-1">
       <button onClick={()=>setActiveButton(0)} className={`${activeButton == 0 ? 'bg-[#007AFF] text-white' : 'text-gray-500'} hover:bg-blue-700 py-2 px-8 rounded w-1/2`}>
        Current File
        </button>
        <button onClick={()=>setActiveButton(1)} className={`${activeButton == 1 ? 'bg-[#007AFF] text-white' : 'text-gray-500'} hover:bg-blue-700 py-2 px-8 rounded w-1/2`}>
        Full Project
        </button>
        </div>}

     {selectedIssue == null && <IssueItem  setSelectedIssue={setSelectedIssue}/>}
     {selectedIssue && !selectedIssueType && <IssueActiveItem selectedIssue={selectedIssue}/>}
     {selectedIssue && !selectedIssueType && <IssueTypes setSelectedIssueType={setSelectedIssueType}/> }
     {selectedIssueType &&
      <div className="bg-[#1E232B] rounded-lg p-2 flex mt-4">
      <div className="flex gap-4 px-4 w-full">
      <div style={{backgroundColor: "#FF4D4D"}} className={`h-[10px] w-[10px] rounded-full self-center`}></div>
      <p className="text-[#AAAAAA] self-center">{selectedIssue.title}</p>
      </div>
      </div>   
     }
     {selectedIssueType && <IssueActiveItemDetails/>}
    
   
      

    
    
    </div>
  );
};

export default IssueCount;