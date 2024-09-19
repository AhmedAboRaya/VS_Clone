import { useEffect } from "react";
import Architecture from "./Architecture";
import { architecture } from "./data/arc";
import { changeTab, increment } from "../app/features/treeSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";

const LeftSide = () => {

    const {tabsFile, openFile} = useSelector((state: RootState) => state.tabs);

    const dispatch = useDispatch(); 

    const handleOnClick = (name: string) => {
        const newFile = `${name}`; 
        const included = tabsFile.includes(newFile);
        if (!included)
            dispatch(increment(newFile));
        else
            dispatch(changeTab(newFile));
    };

    useEffect(() => {
        console.log("Tabs file updated:", tabsFile);
        console.log("Tabs file updated:", openFile);
      }, [tabsFile, openFile]);

    return (
        <>
            <div className="w-full mb-3 mt-3 pl-5 text-white">EXPLORER</div>

            <div className="flex flex-col">
                {architecture.map(arch => (
                    <Architecture
                        fileTree={arch}
                        onClicking={handleOnClick}
                        key={arch.id}
                    />
                ))}
            </div>
        </>
    )
}

export default LeftSide;