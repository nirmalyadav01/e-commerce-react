import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Slider from './slider'

export default function Header({allCategory}) {
    const path = useLocation().pathname
    console.log(allCategory);
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a
                            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                            data-toggle="collapse"
                            href="#navbar-vertical"
                            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
                        >
                            <h6 className="m-0">Categories</h6> 
                            <i className="fa fa-angle-down text-dark" />
                        </a>
                        <nav
                            className={`collapse ${path==='/'?"":"position-absolute bg-light"} show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0`}
                            id="navbar-vertical"
                            style={path==='/'?{}:{width :"calc(100% - 30px)",zIndex:1}}
                        >
                            <div
                                className="navbar-nav w-100 overflow-hidden"
                                style={{ height: 410 }}
                            >
                                {/* <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown">
                                        Dresses <i className="fa fa-angle-down float-right mt-1" />
                                    </a>
                                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <Link to="" className="dropdown-item">
                                            Men's Dresses
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            Women's Dresses
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            Baby's Dresses
                                        </Link>
                                    </div>
                                </div> */}
                                {allCategory && allCategory.map((item,idex)=>(
                                    <Link to="" className="nav-item nav-link" key={idex}>
                                    {item.name}
                                </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <Link to="/" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold">
                                    <span className="text-primary font-weight-bold border px-3 mr-1">
                                        E
                                    </span>
                                    Shopper
                                </h1>
                            </Link>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link active">
                                        Home
                                    </Link>
                                    <Link to="/shop" className="nav-item nav-link">
                                        Shop
                                    </Link>
                                    <div className="nav-item dropdown">
                                        <Link
                                            to="#"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Pages
                                        </Link>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <Link to="/cart" className="dropdown-item">
                                                Shopping Cart
                                            </Link>
                                            <Link to="/checkout" className="dropdown-item">
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="nav-item nav-link">
                                        Contact
                                    </Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    <Link to="" className="nav-item nav-link">
                                        Login
                                    </Link>
                                    <Link to="" className="nav-item nav-link">
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </nav>
                        {path === "/" ? <Slider /> : null}
                    </div>
                </div>
            </div>
        </>
    )
}
