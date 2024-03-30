import { ISSUE_LIST } from "@/constants";



const IssueTypes = ({setSelectedIssueType}) => {
  return (

    <div className="">
        <div className="h-[350px] overflow-y-scroll">
        {ISSUE_LIST.map((issueItem, index)=>{
            return(
                <div onClick={()=>setSelectedIssueType(issueItem)}  className="bg-[#1E232B] rounded-lg p-2 flex justify-between mt-4" key={index}>
                <div className="flex gap-4 border-r-2 border-slate-500 w-[90%]">
                <p className="text-[#CCCCCC] ">{issueItem.title}</p>
                </div>
                <img src="/Arrow.svg" className="-rotate-90 w-[15px] self-center mx-2"/>   
            </div>
            )
        })}
        </div>
        <div className="h-[1px] my-4 w-full bg-slate-500"></div>

        <div className="flex gap-2 my-4">
            <input
                type="checkbox"
                className="h-5 w-5 cursor-pointer rounded-lg  before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
            />
            <p className="text-white text-center self-center">Exclude Dependencies</p>
            </div> 
    </div>
  );
};

export default IssueTypes;