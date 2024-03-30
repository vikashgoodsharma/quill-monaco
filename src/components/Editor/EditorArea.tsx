import { useState } from "react";
import EditorHead from "./EditorHead";
import IssueCount from "../IssueCount/IssueCount";
import FolderAndFiles from "../FolderAndFile/FolderAndFiles";
import CodeEditor from "./CodeEditor";


const EditorArea = () => {
 



  return (

    <div className="w-[98%] bg-[#191D23] mt-2 mx-[1%] rounded-lg pb-4">
    <EditorHead/>
    <div className="flex justify-between px-4 gap-2">
      <FolderAndFiles/>
      <CodeEditor/>

      <IssueCount/>
    </div>
     

    
    </div>
  );
};

export default EditorArea;