import { useState } from "react";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

  

const CodeEditor = ({setLeftExpanded,setRightExpanded, leftExpanded, rightExpanded}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [editorContent, setEditorContent] = useState(['', '', '', '']);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleEditorChange = (value, index) => {
    const newContent = [...editorContent];
    newContent[index] = value;
    setEditorContent(newContent);
  };
 



  return (

    <div className="w-full relative">
      <img src="/ExpandL.svg" className="absolute -left-4 bottom-0 z-10" onClick={()=>setLeftExpanded(!leftExpanded)}/>
      <img src="/ExpandR.svg" className="absolute -right-4 bottom-0 z-10" onClick={()=>setRightExpanded(!rightExpanded)}/>

 
            <div className="flex bg-[#1E232B]">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            className={`px-4 py-2 ${activeTab === index ? 'bg-blue-500 text-white' :'text-gray-500'} ${ index < 3 ? `border-r border-gray-600` :``}`}
            onClick={() => handleTabChange(index)}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>
     
          <MonacoEditor
            width="100%"
            height="600"
            language="javascript"
            theme="vs-dark"
            value=""
          />
     
    </div>
  );
};

export default CodeEditor;