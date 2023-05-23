import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/author'>author</Link></li>
        <li><Link to='/add'>Add</Link></li>
        <li><Link to='/admin'>AdminPages</Link></li>
    </ul>
    </>
  )
}

export default Navbar