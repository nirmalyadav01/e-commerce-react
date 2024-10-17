import React from 'react'
import { useLocation } from 'react-router-dom'

export default function HeroSection({heading}) {
    const path = useLocation().pathname
    return (
        <>
            <div className="container-fluid bg-secondary mb-5">
                <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: 300 }}
                >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">{heading}</h1>
                    <div className="d-inline-flex">
                        <p className="m-0">
                            <a href="">Home</a>
                        </p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0 text-capitalize">{path.replace("/","")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
