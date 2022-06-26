import { GrAppsRounded } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiShoppingBag, BiFullscreen, BiSearchAlt2 } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <h2>
          V<span style={{ fontSize: "30px", color: "#333" }}>e</span>LZON
        </h2>
        <div className="header-search">
          <span>
            <BiSearchAlt2 />
          </span>
          <input type="search" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <span>
          <GrAppsRounded />
        </span>
        <span>
          <BiShoppingBag />
        </span>
        <span>
          <BiFullscreen />
        </span>
        <span>
          <MdOutlineDarkMode />
        </span>
        <span>
          <IoMdNotificationsOutline />
        </span>
        <div className="user-card">
          <span>
            <FaUserCircle />
          </span>
          <div className="user-details">
            <p style={{ fontSize: "12px", fontWeight: "900" }}>Anna Adame</p>
            <p style={{ fontSize: "10px" }}>Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
