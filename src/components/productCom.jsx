import React from 'react'
import ProductCard from './productCard'

export default function ProductComponent({ children, allProducts }) {
    return (
        <>
            <div className="container-fluid pt-5">
                {children}
                <div className="row px-xl-5 pb-3">
                    {allProducts && allProducts.map((item,idx)=>(
                        <ProductCard data={item} key={idx} />
                    ))}
                </div>
            </div>
        </>
    )
}
