import { useState } from "react";
import EditorHead from "./EditorHead";
import IssueCount from "../IssueCount/IssueCount";
import FolderAndFiles from "../FolderAndFile/FolderAndFiles";
import CodeEditor from "./CodeEditor";


const EditorArea = () => {
  const [leftExpanded, setLeftExpanded]= useState(false);
  const [rightExpanded, setRightExpanded]= useState(false);

 



  return (

    <div className="w-[98%] bg-[#191D23] mt-2 mx-[1%] rounded-lg pb-4">
    <EditorHead/>
    <div className="flex justify-between px-4 gap-2">
     {!leftExpanded && <FolderAndFiles />}
     <div className={`${leftExpanded && !rightExpanded ? "w-[80%]": !leftExpanded && !rightExpanded ? 'w-[60%]': !leftExpanded && rightExpanded ? "w-[80%]" : leftExpanded && rightExpanded ? "w-[100%]": "" }`}>
     <CodeEditor setLeftExpanded={setLeftExpanded} leftExpanded={leftExpanded} rightExpanded={rightExpanded} setRightExpanded={setRightExpanded}/>

     </div>

     {!rightExpanded && <IssueCount/>}
    </div>
     

    
    </div>
  );
};

export default EditorArea;