import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../../components/admin/Navbars'
const AdminRooot = () => {
  return (
   <>
    <Navbars/>
<Outlet/></>
    )
}

export default AdminRooot