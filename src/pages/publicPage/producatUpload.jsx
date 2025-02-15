import React, { useCallback, useState } from 'react'
import HeroSection from '../../components/heroSection'
import axiosClient from '../../webClient/axiosClient'
import { Urls } from '../../webClient/apiUrls'
import { toast } from 'react-toastify'

export default function ProducatUpload() {
    const [ProductInfo, setProductInfo] = useState({
        title: ""
    })

    function getValue(event) {
        const { name, value, files } = event.target
        setProductInfo({ ...ProductInfo, [name]: files ? files[0] : value })
    }

  const Submit =  useCallback(function (e) {
        e.preventDefault()
        if (ProductInfo.thumbnail.type !== "application/pdf" ) {
            toast.error("only pdf file accepted")
            return;
        }
        if (ProductInfo.thumbnail.size > 1000000 ) {
            toast.error("file size 1mb require")
            return;
        }
        const formData = new FormData()
        formData.append("title",ProductInfo.title)
        formData.append("thumbnail",ProductInfo.thumbnail)

    },[ProductInfo])

    console.log(ProductInfo);
    return (
        <>
            <HeroSection heading={"Add Product"} />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6 bg-light shadow p-3'>
                        <div className='mt-1'>
                            <h4 className='text-center text-black-50'>Product Form</h4>
                            <form onSubmit={Submit} id='product'>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getValue} name='title' placeholder='Product Name' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getValue} name='description' placeholder='description' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getValue} name='rating' placeholder='rating' />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="tel" className='form-control col-8' pattern="[1-9]{2,3}" onChange={getValue} name='stock' placeholder='stock' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getValue} name='brand' placeholder='brand' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="file" accept='application/pdf' className='form-control col-8' onChange={getValue} name='thumbnail' placeholder='thumbnail' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getValue} name='price' placeholder='price' />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getValue} name='discountPercentage' placeholder='discountPercentage' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getValue} name='category' placeholder='category' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3 mb-3'>
                                    <button className='btn btn-outline-info col-8'>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
