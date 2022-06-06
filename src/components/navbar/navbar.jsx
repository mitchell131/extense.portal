import * as React from 'react';
import Dropdown from '../dropdown/dropdown.jsx';

const Navbar = ({ onClickhandler, isLoggedIn, userEmail }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-4 w-full fixed">
      <div className="w-full block flex-grow flex  justify-end">
        <div className='logout'>
         {isLoggedIn &&<Dropdown text={userEmail} onClickhandler={onClickhandler}/>}
        </div>
      </div>
    </nav>
  );
}


export default Navbar;