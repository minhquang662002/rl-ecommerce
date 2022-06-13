import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router'
import Header from './Header/Header'
import Feedback from './Manage/Feedback'
import InteractUser from './Manage/InteractUser/InteractUser'
import ManageShop from './Manage/ManageShop'
import ManageUser from './Manage/ManageUser'
import Support from './Manage/Support'
import Navbar from './Navbar/Navbar'

const AdminPage = (props) => {
  return (
    <>
        <Helmet>
            <title>Admin - Unilight</title>
        </Helmet>
        <div className="admin" style={{width: "100%", height: "auto", minHeight: "100vh"}}>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/user/*" element={<ManageUser />}></Route>
                <Route path="/shop/*" element={<ManageShop />}></Route>
                <Route path="/help/*" element={<Support />}></Route>
                <Route path="/feedback/*" element={<Feedback />}></Route>
            </Routes>
        </div>
    </>
  )
}

export default AdminPage