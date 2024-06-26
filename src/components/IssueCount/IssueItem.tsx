import { ISSUE_DATA } from '@/constants'; // Import the Issue interface from your constants file

interface IssueItemProps {
    setSelectedIssue: (issue: any) => void;
}

const IssueItem = ({ setSelectedIssue }: IssueItemProps) => {
    return (
        <div className="">
            {ISSUE_DATA.map((issueItem, index) => {
                return (
                    <div className="bg-[#1E232B] rounded-lg p-2 flex mt-4" key={index}>
                        <div className="flex gap-4 px-4 border-r-2 border-slate-500 w-[40%]">
                            <div style={{ backgroundColor: issueItem.color }} className={`h-[10px] w-[10px] rounded-full self-center`}></div>
                            <p className="text-[20px] font-semibold text-white self-center">{issueItem.count}</p>
                        </div>
                        <div className="flex px-4 w-[60%] justify-between" onClick={() => setSelectedIssue(issueItem)}>
                            <p className="text-[#AAAAAA] self-center">{issueItem.title}</p>
                            <img src="/Arrow.svg" className="-rotate-90 w-[15px] self-center" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default IssueItem;
