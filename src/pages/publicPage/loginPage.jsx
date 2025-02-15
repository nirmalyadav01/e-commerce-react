import React, { useEffect, useState } from 'react'
import HeroSection from '../../components/heroSection'
import { Link, useNavigate } from 'react-router-dom'
import { postRequest } from '../../webClient/apiClient'
import { Urls } from '../../webClient/apiUrls'
import { toast } from 'react-toastify'

export default function LoginPage() {
    const [user, setUser] = useState({ username: "", password: "", expiresInMins: 60 })
    const [response, setResponse] = useState()
    const navigate = useNavigate()

    function getUser(event) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    async function Submit(e) {
        e.preventDefault()
        let res = await postRequest(Urls.userLogin, user)
        if (res.message) {
            toast.error(res.message)
        }else{
            toast.success("Logged In")
            localStorage.setItem("user", JSON.stringify(res))
            navigate("/")
        }
    }

    useEffect(() => {
        localStorage.clear()
    }, [])


    return (
        <>
            <HeroSection heading={"Login"} />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6 bg-light shadow p-3'>
                        <div className='mt-1'>
                            <h4 className='text-center text-black-50'>Login</h4>
                            <form onSubmit={Submit}>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' onChange={getUser} name='username' placeholder='User Name' />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="password" className='form-control col-8' onChange={getUser} name='password' placeholder='Password' />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <div className='col-8'>
                                        <div className='d-flex justify-content-between'>
                                            <div><input type="checkbox" /> Remember Me</div>
                                            <Link to="/forgot-password">Forgot Password ?</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center mt-3 mb-3'>
                                    <button className='btn btn-outline-info col-8'>Login</button>
                                </div>
                            </form>
                            <Link to={"/sign-up"}>Or Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
