import { useState, useEffect } from "react";
import SVG from "./SVG/SVG";
import {profileList, settingList, icons} from "./data/menus"

const IconsBar = () => {

  const [settingOpened, setSettingOpened] = useState<boolean>(false);
  const [profileOpened, setProfileOpened] = useState<boolean>(false);


  const handleSettingClick = () => {
    setSettingOpened(prev =>!prev);
  };

  const handleProfileClick = () => {
    setProfileOpened(prev =>!prev);
  };
  
  useEffect(() => {
    const handleClickOutsideProfile = () => {
      setProfileOpened(false);
    }
    const handleClickOutsideSetting = () => {
      setSettingOpened(false);
    }
    if(settingOpened){
      window.addEventListener("click", handleClickOutsideSetting);
    }   
    if(profileOpened){
      window.addEventListener("click", handleClickOutsideProfile);
    }   
    return () => {
      window.removeEventListener("click", handleClickOutsideSetting);
      window.removeEventListener("click", handleClickOutsideProfile);
    }
  },[settingOpened, profileOpened])
  
  
  
  return (
    <div className="flex flex-col mt-3">
      <div className="space-y-5 ">
        {icons.map((icon) => (
          <div key={icon} className=" pl-1 pt-1 ">
            <SVG type={icon} isFolder={false} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 left-[6px]" onClick={ handleProfileClick}>
        <SVG type="profile" isFolder={false} />
      </div>

      <div
       className={`absolute p-2 border border-white rounded-lg bottom-16 left-11 duration-300 ${profileOpened ? 'block' : 'hidden'}`}
      >
        <ul className="space-y-1 ">
            {profileList.map(li => (
                <li className="hover:bg-zinc-700 p-1 rounded-lg pr-8" key={li}>{li}</li>
            ))}
        </ul>
      </div>

      <div className="absolute bottom-8 left-[6px]" onClick={ handleSettingClick}>
        <SVG type="setting" isFolder={false} />
      </div>

      <div
        className={`absolute p-2 border border-white rounded-lg bottom-7 left-11 duration-300 ${settingOpened ? 'block' : 'hidden'}`}>
        <ul className="space-y-1 ">
            {settingList.map(li => (
                <li className="hover:bg-zinc-700 p-1 rounded-lg pr-8" key={li}>{li}</li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default IconsBar;
