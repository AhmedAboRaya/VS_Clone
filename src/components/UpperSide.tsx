import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { X } from 'lucide-react';
import { changeTab, decrement } from "../app/features/treeSlice";

const UpperSide = () => {
  const { tabsFile, openFile } = useSelector((state: RootState) => state.tabs);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-row">
      
      <div className="flex absolute flex-row border-gray-300 text-white ">
        {tabsFile.map((tab ,id) => (
          <div
            key={id}
            className={`flex flex-row items-center justify-between p-2 text-sm hover:bg-zinc-800 cursor-pointer border-r-[1px] border-gray-300 w-40 font-bold text-md duration-300`}
            style={openFile === tab ? { borderBottom: "1px solid black"} : { borderBottom: "1px solid #d1d5db"}}
            onClick={() => dispatch(changeTab(tab))}
          >
            {tab}
            <X size={16} className="ml-2 hover:bg-red-500 duration-300" onClick={() => dispatch(decrement(tab))} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperSide;
