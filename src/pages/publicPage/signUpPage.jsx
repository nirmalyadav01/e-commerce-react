import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Urls } from '../../webClient/apiUrls'
import HeroSection from '../../components/heroSection'
import { postRequest } from '../../webClient/apiClient'
import { toast } from 'react-toastify'
import axiosClient from '../../webClient/axiosClient'

export default function SignUpPage() {
    const [user, setUser] = useState({ firstName: "", lastName: "", age: 60 })
    const [response, setResponse] = useState()
    const navigate = useNavigate()

    function getUser(event) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    async function Submit(e) {
        e.preventDefault()
        let res = await axiosClient.post(Urls.sign_Up, user)
        if (res.message) {
            toast.error(res.data)
        } else {
            toast.success("Sign Up Success")
            navigate(-1)
            console.log(res);
        }
    }
    return (
        <>
            <HeroSection heading={"Sign Up"} />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6 bg-light shadow p-3'>
                        <div className='mt-1'>
                            <h4 className='text-center text-black-50'>Sign Up Form</h4>
                            <form onSubmit={Submit}>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getUser} name='firstName' placeholder='first Name' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getUser} name='lastName' placeholder='last Name' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="number" className='form-control col-8' onChange={getUser} name='age' placeholder='age' />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getUser} name='username' placeholder='User Name' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="password" className='form-control col-8' onChange={getUser} name='password' placeholder='Password' required />
                                </div>
                                <div className='d-flex justify-content-center mt-3 mb-3'>
                                    <button className='btn btn-outline-info col-8'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
