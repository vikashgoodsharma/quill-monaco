import { useState } from "react";

const FilesFolderData=[
    {title:"Example Folder", 
    files: [{title: "Example File 2"},{title: "Example File 322"}],  
     subFolder: [
        {title:"Sample Folder", childFolder: [
            {title: "Folder", files:[{title: "Example File 1"},{title: "Example File 2"},{title: "Example File 3"}]},
            {title: "Folder 123", files:[{title: "Example File 1"},{title: "Example File 2"},{title: "Example File 3"}]}
        ]},
        {title:"Sample Folder 2", childFolder: [
            {title: "Folder", files:[{title: "Example File 1"},{title: "Example File 2"},{title: "Example File 3"}]},
            {title: "Folder 123", files:[{title: "Example File 1"},{title: "Example File 2"},{title: "Example File 3"}]}
        ]},
        {title:"Folder 321",
             files:[{title: "Example File 1"},{title: "Example File 2"},{title: "Example File 3"}]},
          ]},
          
]

const FolderAndFiles = () => {
    const [expandedFolders, setExpandedFolders] = useState([]);

    const handleFolderClick = (title) => {
      if (expandedFolders.includes(title)) {
        setExpandedFolders(expandedFolders.filter(folder => folder !== title));
      } else {
        setExpandedFolders([...expandedFolders, title]);
      }
    };
  
    const isExpanded = (title) => {
      return expandedFolders.includes(title);
    };
  
    const renderFolder = (folder) => {
      return (
        <div key={folder.title}>
          <div
            className={`cursor-pointer ${isExpanded(folder.title) ? 'text-blue-500' : 'text-gray-500'} flex gap-2 my-2`}
            onClick={() => handleFolderClick(folder.title)}
          >
          {isExpanded(folder.title) ? <img src="/SelectedArrow.svg"/> : <img src="/UnselectedArrow.svg"/>  }
          {isExpanded(folder.title) ? <img src="/SelectedFolderIcon.svg"/> : <img src="/UnselectedFolder.svg"/>  }  {folder.title}
          </div>
          {isExpanded(folder.title) && (
            <div className="pl-4">
              {folder.subFolder && folder.subFolder.map(subFolder => renderFolder(subFolder))}
              {folder.childFolder && folder.childFolder.map(childFolder => renderFolder(childFolder))}
              {folder.files && (
                <ul className="pl-4">
                  {folder.files.map(file => (
                    <li key={file.title} className={`text-${isExpanded(file.title) ? 'blue' : 'gray'}-500 flex gap-2 py-2 hover:bg-cyan-600`}><img src="/UnselectedFile.svg"/> {file.title}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      );
    };
  return (    
     <div className="w-[20%] p-2 px-4  rounded-lg bg-[#13161A]">
      <p className="text-[14px] text-white">Folder & Files</p>
      <div className="h-[1px] my-2 w-full bg-slate-500"></div>

      {FilesFolderData.map(folder => renderFolder(folder))}
      
     
     </div>    
  );
};

export default FolderAndFiles;