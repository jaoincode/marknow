import FileIcon from "../../assets/file.svg";
import BackIcon from "../../assets/back.svg";
import SaveIcon from "../../assets/save.svg";
import TrashIcon from "../../assets/trash.svg";

import { useLocation, Link } from "react-router-dom";

import { useEffect, useState } from "react";

function Header() {
  const [isOnFile, setIsOnFile] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setIsOnFile(false);
    else setIsOnFile(true);
  }, [location]);

  return (
    <header className="w-full flex p-2 md:p-4 items-center h-14 bg-mygray-100 fixed  justify-between z-50">
      <div className="flex items-center">
        {isOnFile && (
          <Link to="/" aria-label="Back to menu" className="w-7 md:w-9 ">
            <img src={BackIcon} />
          </Link>
        )}
        <h1 className="font-bold text-mywhite-200 mx-2 md:text-lg">marknow</h1>
        {isOnFile && (
          <div className="flex items-center md:mx-7">
            <img src={FileIcon} alt="File icon" className="w-7 md:w-9" />
            <span className="font-medium mx-1 text-mywhite-200 md:text-lg">
              filename.md
            </span>
          </div>
        )}
      </div>
      {isOnFile && (
        <div className="flex items-center gap-2">
          <button
            aria-label="Delete file"
            className="w-7 md:w-9 bg-red-600 p-1 md:p-2 rounded-full hover:bg-red-800 transition-colors"
          >
            <img src={TrashIcon} />
          </button>
          <button
            aria-label="Save file"
            className="w-7 bg-myblue-100 p-1 rounded-full md:flex md:w-36 md:h-9 items-center hover:bg-blue-600 transition-colors"
          >
            <img src={SaveIcon} className="md:w-8 md:h-8" />
            <p className="hidden md:inline-block font-medium text-mywhite-100">
              Save Changes
            </p>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
