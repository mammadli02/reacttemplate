import React from 'react'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
  <>
  <ul>
    <li><Link to='/admin'>Admin pages</Link></li>
    <li><Link to='/home'>Home pages</Link></li>
    </ul>
    </>
  )
}

export default Navbars