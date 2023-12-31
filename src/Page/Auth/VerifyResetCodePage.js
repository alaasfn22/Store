import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const VerifyResetCodePage = () => {
    return (
        <div className='text-center' style={{ minHeight: "715px", backgroundColor: "#fff" }}>
            <Container >

                <div className='login-form d-flex gap-4 flex-column align-items-center '>
                    <div className='mt-5 pt-5'>
                        <h3> Verify Code</h3>
                    </div>
                    <input
                        placeholder="Enter the Verify code"
                        type="text"
                        className="user-input "
                    />
                    <Link to="/login/resetpassword" style={{ textDecoration: "none" }}>
                        <button className="btn-login w-100 p-2 ">Change Password</button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default VerifyResetCodePage