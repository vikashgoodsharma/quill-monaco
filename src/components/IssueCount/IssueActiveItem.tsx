interface Issue {
  title: string;
  count: number;
  color: string;
}

interface IssueActiveItemProps {
  selectedIssue: Issue;
}

const IssueActiveItem = ({ selectedIssue }: IssueActiveItemProps) => {
  return (
      <div className="bg-[#1E232B] rounded-lg p-2 flex mt-4">
          <div className="flex gap-4 px-4 border-r-2 border-slate-500 w-[50%]">
              <div style={{ backgroundColor: selectedIssue.color }} className={`h-[10px] w-[10px] rounded-full self-center`}></div>
              <p className="text-[28px] font-semibold text-white text-center">{selectedIssue.count}</p>
          </div>
          <div className="flex px-4 w-[50%] justify-between">
              <p className="text-[#AAAAAA] self-center">{selectedIssue.title}</p>
          </div>
      </div>
  );
};

export default IssueActiveItem;
