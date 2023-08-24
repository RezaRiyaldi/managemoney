import Link from 'next/link';
import React from 'react'
import Login from './login';

export default function Navbar() {
   return (
      <div className="navbar bg-base-100 absolute">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href={'/'}>Home</Link></li>
                  <li><Link href={'categories'}>Categories</Link></li>
               </ul>
            </div>
            <a className="normal-case text-xl p-3 text-black dark:text-white font-bold">TEsT<span className='text-red-700'>.</span></a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               <li><Link href={'/'}>Home</Link></li>
               <li><Link href={'categories'}>Categories</Link></li>
            </ul>
         </div>
         <div className="navbar-end">
            <Login/>
         </div>
      </div>
   );
}
