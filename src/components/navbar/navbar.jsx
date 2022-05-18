import * as React from 'react';

const Navbar = ({ onClickhandler, isLoggedIn, userEmail }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-4 w-full fixed">
      <div className="w-full block flex-grow flex  justify-end">
        <div className='logout'>
          {isLoggedIn && <a href="#" onClick={onClickhandler} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">{userEmail}</a>}
        </div>
        <>
        </>
      </div>
    </nav>
  );
}


export default Navbar;