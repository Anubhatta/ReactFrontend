import React from 'react'
export default function Navbar() {
  return (
    <>
    <div className="navbar bg-teal-300">
  <div className="navbar-start">
    <a className="p-6 font-bold text-3xl"><h1>Anu</h1></a>
  </div>
  <div className=" list">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Projects</a> </li>
      <li><a>contact</a></li>
     <li><a>Blogs</a></li>
    </ul>
  </div>
</div>
  </>
  )
}
