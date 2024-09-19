import { svgIcons } from "../data/icons";
import { ISVG } from "../interfaces/interfaces";

const SVG = ({ type, isFolder, opened }: ISVG) => {
  return (
    <div className="mr-2">
      {type in svgIcons
        ? svgIcons[type]
        : isFolder === true
        ? opened
          ? svgIcons["unknown_folder_opened"]
          : svgIcons["unknown_folder"]
        : svgIcons["unknown_file"]}
    </div>
  );
};
export default SVG;

