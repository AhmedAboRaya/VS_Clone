import LeftSide from "./LeftSide";
import UpperSide from "./UpperSide";
import '../index.css'

const Layout = () => {
  return (
    <div className="grid-container">
        <div className="icons text-white">
            s
        </div>

        <div className="tabs border-b-2 border-white">
            <UpperSide />
        </div>
        
        <div className="leftSide border-r-2 border-gray-300 text-white">
            <LeftSide />
        </div>

        <div className="window">
            s
        </div>

        <div className="footer">

        </div>
    </div>
  );
};

export default Layout;
