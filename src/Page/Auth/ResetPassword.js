import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Reset_Password_Hook from '../../Hook/Auth/Reset_Password_Hook'

const ResetPassword = () => {
    const [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit] = Reset_Password_Hook()
    return (
        <div className='text-center' style={{ minHeight: "715px", backgroundColor: "#fff" }}>
            <Container >

                <div className='login-form d-flex gap-4 flex-column align-items-center'>
                    <div className='mt-5 pt-5'>
                        <h3> Reset Password</h3>
                    </div>
                    <input
                        placeholder="New PassWord"
                        type="password"
                        value={password}
                        onChange={OnChangePassword}
                        className="user-input "
                    />
                    <input
                        placeholder="New PassWord"
                        type="password"
                        value={confirmPassword}
                        onChange={OnChangeConfirmPassword}
                        className="user-input "
                    />
                    <Link style={{ textDecoration: "none" }}>
                        <button onClick={onSubmit} className="btn-login w-100 p-2 ">Reset Password</button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default ResetPassword