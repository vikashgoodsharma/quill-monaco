import { ISSUE_DESCRIPTION } from "@/constants";



const IssueActiveItemDetails = () => {
    
  return (    
     <div className="bg-[#1E232B] rounded-lg p-4 mt-4">
      <p className="text-[14px] text-white">List of Issues</p>
      <div className="h-[1px] my-2 w-full bg-slate-500"></div>
      <div className="h-[350px] overflow-y-scroll">
      <p className="text-[#007AFF] text-[14px]">{ISSUE_DESCRIPTION.description.title}</p>
      <p className="text-[#CCCCCC] text-[14px] mt-2">{ISSUE_DESCRIPTION.description.desc}</p>
      <p className="text-[#007AFF] text-[14px] mt-6">{ISSUE_DESCRIPTION.remediation.title}</p>
      <p className="text-[#CCCCCC] text-[14px] mt-2">{ISSUE_DESCRIPTION.remediation.desc}</p>
      </div>
      <div className="h-[1px] my-2 w-full bg-slate-500"></div>
<div className="flex gap-2 justify-end">
<button className="bg-[#007AFF] hover:bg-blue-700 text-white py-2 px-8 rounded">
        Auto Fix Code
        </button>
        <img src="/Flag.svg"/>
</div>
     
     
     </div>    
  );
};

export default IssueActiveItemDetails;