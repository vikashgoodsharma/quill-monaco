import { useState } from "react";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });
const options = {
  autoIndent: 'full',
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 13,
  lineHeight: 24,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'always',
  minimap: {
    enabled: true,
  },
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
}; 
  

const CodeEditor = () => {
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

    <div className="w-[60%]">
    {/* <MonacoEditor
      editorDidMount={() => {
        // @ts-ignore
        window.MonacoEnvironment.getWorkerUrl = (
          _moduleId: string,
          label: string
        ) => {
          if (label === "json")
            return "_next/static/json.worker.js";
          if (label === "css")
            return "_next/static/css.worker.js";
          if (label === "html")
            return "_next/static/html.worker.js";
          if (
            label === "typescript" ||
            label === "javascript"
          )
            return "_next/static/ts.worker.js";
          return "_next/static/editor.worker.js";
        };
      }}
      width="800"
      height="600"
      language="markdown"
      theme="vs-dark"
      value={postBody}
      options={{
        minimap: {
          enabled: false
        }
      }}
      onChange={setPostBody}
    /> */}

{/*    
<MonacoEditor
        height="400"
        options={options}
        theme='vs-dark'
      /> */}
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