import * as React from 'react';

const Navbar = ({onClickhandler, isLoggedIn}) => {

  console.log(isLoggedIn)
  return (
    <nav class="flex items-center justify-between flex-wrap bg-black p-4">
    <div class="w-full block flex-grow flex  justify-end">
      <div>
      {isLoggedIn &&  <a href="#" onClick={onClickhandler} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">Logg ut</a>}
      </div>
    </div>
  </nav>
  );
}


export default Navbar;