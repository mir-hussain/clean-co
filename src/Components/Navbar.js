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
            <ul className='menu menu-horizontal p-0 gap-2'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
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
              <div className='dropdown dropdown-hover'>
                <label
                  tabindex='0'
                  className='btn btn-primary normal-case text-base'
                >
                  Services
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                  </svg>
                </label>
                <ul
                  tabindex='0'
                  className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <a className='w-full'>Standard Cleaning</a>
                  </li>
                  <li>
                    <a className='w-full'>Deep Cleaning</a>
                  </li>
                  <li>
                    <a className='w-full'>Move in/Move out Cleaning</a>
                  </li>
                </ul>
              </div>
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
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
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
          <div
            tabindex='0'
            class='collapse collapse-arrow border border-emerald-500 bg-base-100 rounded-box'
          >
            <div class='collapse-title text-xl text-emerald-500 font-medium'>
              Services
            </div>
            <div class='collapse-content'>
              <ul tabindex='0' className='dropdown-content menu p-2  w-full'>
                <li>
                  <a className='w-full'>Standard Cleaning</a>
                </li>
                <li>
                  <a className='w-full'>Deep Cleaning</a>
                </li>
                <li>
                  <a className='w-full'>Move in/Move out Cleaning</a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
