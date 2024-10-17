import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import PublicRoute from './routes/publicRoute'
import PrivateRoute from './routes/privateRoute'
import HomePage from './pages/publicPage/homePage'
import ShopPage from './pages/publicPage/shopPage'
import CartPage from './pages/publicPage/cartPage'
import CheckoutPage from './pages/publicPage/checkoutPage'
import { useEffect, useState } from 'react'
import Layout from './components/layout'
import ProductDetails from './pages/publicPage/productDetails'
import ContactPage from './pages/publicPage/contactPage'
import {Urls} from "./webClient/apiUrls"
import { getRequest } from './webClient/apiClient'

function App() {
  const path = useLocation().pathname

  const [allProducts, setAllProducts] = useState()
    const [allCategory,setAllCategory] = useState()

    async function callApi() {
        let product = await getRequest(Urls.getAllProducts)
        if (product) {
            setAllProducts(product)
        }
        let category = await getRequest(Urls.getAllCategory)
        if (category) {
            setAllCategory(category)
        }
    }

    useEffect(() => {
        callApi()
    }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])
  return (
    <>
      <Routes>

        {/* Public Route */}
        <Route path='/' element={<PublicRoute allCategory={allCategory} />}>
          <Route index element={<HomePage allCategory={allCategory} allProducts={allProducts} />} />
          <Route path='shop' element={<Layout />} >
            <Route index element={<ShopPage />} />
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
        {/* end */}

        {/* private route */}
        <Route path='/' element={<PrivateRoute />}>
        </Route>
        {/* end */}

      </Routes>
    </>
  )
}

export default App
