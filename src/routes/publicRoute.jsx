import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Topbar from '../components/topbar'
import Header from '../components/header'
import Footer from '../components/footer'
import axiosClient from '../webClient/axiosClient'
import { Urls } from '../webClient/apiUrls'
import { getUserDetails } from '../helper/utils'
import { useDispatch } from 'react-redux'
import { fetchAll } from '../redux/cartSlice'

export default function PublicRoute({ allCategory }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function fetchCarts() {
    try {
      let res = await axiosClient.delete(`${Urls.getAllCart}`)
      if (res.data) {
        console.log(res.data);
        dispatch(fetchAll(res.data))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCarts()
  }, [])


  return (
    <>
      <Topbar />
      <Header allCategory={allCategory} />
      <Outlet />
      <Footer />
    </>
  )
}
