import { useState } from "react";
import Architecture from "./Architecture";
import { architecture } from "./data/arc";

const LeftSide = () => {

    const [expand, setExpand] = useState(false);

    const handleOnClick = (id: number) => {
        console.log("Clicked: " + id);
        setExpand(!expand);
        console.log("expand: " + expand);
    };

    return (
        <div className="flex flex-col">
            {architecture.map(arch => (
                <Architecture
                    fileTree={arch}
                    onClicking={handleOnClick}
                    expanded= {expand}
                    key={arch.id}
                />
            ))}
        </div>
    )
}

export default LeftSide;