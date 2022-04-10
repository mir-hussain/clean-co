import React from "react";

const Navbar = ({ children }) => {
  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='w-full navbar bg-white lg:px-[100px]'>
          <div className='flex-1 px-2 mx-2 text-2xl'>Clean Co.</div>
          <div className='flex-none lg:hidden'>
            <label for='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='flex-none hidden lg:block'>
            <ul className='menu menu-horizontal p-0'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Pages</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {children}
        <button className='drawer drawer-toggle'>Toggle</button>
      </div>
      <div className='drawer-side'>
        <label for='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100'>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
