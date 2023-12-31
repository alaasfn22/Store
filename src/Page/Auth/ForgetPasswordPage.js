import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ForgetPasswordHook from '../../Hook/Auth/ForgetPasswordHook'

const ForgetPasswordPage = () => {
    const [email, onChangeEmail, onSubmit] = ForgetPasswordHook()


    return (
        <div className='text-center' style={{ minHeight: "715px", backgroundColor: "#fff" }}>
            <Container >
                <ToastContainer />
                <div className='login-form d-flex gap-4 flex-column align-items-center '>
                    <div className='mt-5 pt-5'>
                        <h3> Change Password</h3>
                    </div>
                    <input
                        placeholder="Enter Your Email"
                        type="text"
                        value={email}
                        onChange={onChangeEmail}
                        className="user-input "
                    />
                    <Link style={{ textDecoration: "none" }}>
                        <button onClick={onSubmit} className="btn-login w-100 p-2 ">Send Verify code</button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default ForgetPasswordPage