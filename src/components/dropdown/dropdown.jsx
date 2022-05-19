import React from 'react';
import Popper from "popper.js";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Dropdown = ({ color, text = 'Username', onClickhandler}) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
             <PersonIcon /> {color === "white" ? "White Dropdown" : text}
            </button>
            <div
              ref={popoverDropdownRef}
              className={(dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-black"
              }
              style={{ minWidth: "12rem" }}
            >
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <a
                className={
                  "text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={onClickhandler}
              >
               <LogoutIcon/><span className='ml-1'>Logg ut</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dropdown;