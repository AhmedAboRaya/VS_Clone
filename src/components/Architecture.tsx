import { IArchitecture } from "./interfaces/interfaces";
import SVG from "./SVG/SVG";
import { ChevronRight } from "lucide-react";

const Architecture = ({
  name,
  type,
  onClicking,
  id,
  expanded,
}: IArchitecture) => {
  return (
    <div onClick={() => onClicking(id)}>
      <span className="flex flex-row items-center text-white mt-1 p-1">
        {type === "file" ? (
          <SVG type={name.split(".")[1]} />
        ) : (
          <SVG type={name} />
        )}
        <ChevronRight className="size-[20px]" />
        {name}
      </span>
    </div>
  );
};

export default Architecture;
