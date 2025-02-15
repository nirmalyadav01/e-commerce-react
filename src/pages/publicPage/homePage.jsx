import React, { useEffect, useState } from 'react'
import ProductComponent from '../../components/productCom'
import Offers from '../../components/offers'
import CategoryComponent from '../../components/categoryCom'
import { createContext } from 'react'

export const simpale = createContext()

export default function HomePage({ allProducts, allCategory }) {

    return (
        <>
            {/* Featured Start */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-check text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured End */}
            <CategoryComponent allCategory={allCategory} />
            <simpale.Provider value={allProducts}>
                <Offers />
            </simpale.Provider>
            <ProductComponent allProducts={allProducts}>
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
                </div>
            </ProductComponent>
            <ProductComponent>
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
                </div>
            </ProductComponent>
        </>
    )
}
