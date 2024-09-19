import LeftSide from "./LeftSide";
import UpperSide from "./UpperSide";
import '../index.css'
import IconsBar from "./IconsBar";
import Window from "./Window";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="grid-container">
        <div className="icons text-white">
            <IconsBar />
        </div>

        <div className="tabs border-b-2 border-white">
            <UpperSide />
        </div>
        
        <div className="leftSide border-r-2 border-gray-300 text-white">
            <LeftSide />
        </div>

        <div className="window">
            <Window />
        </div>

        <div className="footer">
            <Footer />
        </div>
    </div>
  );
};

export default Layout;
