import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/topbar'
import Header from '../components/header'
import Footer from '../components/footer'

export default function PublicRoute({allCategory}) {
  return (
    <>
    <Topbar/>
    <Header allCategory={allCategory}/>
    <Outlet/>
    <Footer/>
    </>
  )
}
