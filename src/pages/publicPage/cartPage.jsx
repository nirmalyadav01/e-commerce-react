import React from 'react'
import HeroSection from '../../components/heroSection'
import { useDispatch, useSelector } from 'react-redux'
import { DecreaseQyantity, DeleteCartProduct, IncreaseQyantity } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage() {
    const dispatch  = useDispatch()
    const CartData = useSelector((store) => store.cart.value)
    const totalPrice = CartData && CartData.reduce((current,item)=>current+item.price*item.quantity,0)
    console.log(CartData);

    function DeleteCart(id){
     dispatch(DeleteCartProduct(id))
    }

    return (
        <>
            <HeroSection heading={"SHOPPING CART"} />
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {CartData && CartData.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="align-middle">
                                            <img src={item.thumbnail} alt="" style={{ width: 50 }} />
                                             {item.title}
                                        </td>
                                        <td className="align-middle">${Math.round(item.price)}</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button onClick={()=>{dispatch(DecreaseQyantity(item.id))}} className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary text-center"
                                                    value={item.quantity}
                                                />
                                                <div className="input-group-btn">
                                                    <button onClick={()=>{dispatch(IncreaseQyantity(item.id))}} className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">₹{Math.round(item.price*item.quantity)}</td>
                                        <td className="align-middle">
                                            <button onClick={()=>{DeleteCart(item.id)}} className="btn btn-sm btn-primary">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-5" action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control p-4"
                                    placeholder="Coupon Code"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Subtotal</h6>
                                    <h6 className="font-weight-medium">₹{Math.round(totalPrice)}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">₹0</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">₹{Math.round(totalPrice)}</h5>
                                </div>
                                <Link to="/checkout" className="btn btn-block btn-primary my-3 py-3">
                                    Proceed To Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
