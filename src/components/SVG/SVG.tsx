import { svgIcons } from "../data/icons";
import { ISVG } from "../interfaces/interfaces";

const SVG = ({ type }: ISVG) => {
  return <div className="mr-2">{svgIcons[type]}</div>;
};

export default SVG;