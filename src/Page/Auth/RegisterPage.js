import React from 'react'
import './Auth.css'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/image/20944201.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ToastContainer } from 'react-toastify'
import RegisterHook from '../../Hook/Auth/RegisterHook'
const Register = () => {
    const [name, email, phone, password, passwordConfirm, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangePasswordConfirm, onSubmite] = RegisterHook()
    return (
        <div className=' redister-page ' >

            <Container>
                <Row className='d-flex  m-0 align-items-center'>
                    <Col md={6} className='d-none d-md-block  p-0' >
                        <LazyLoadImage effect='blur' src={logo} style={{ width: "", height: "" }} alt='' className='img-fluid object-fit-contain' />
                    </Col>
                    <Col md={6} className='py-5 text-center ' >

                        <h3 className='header py-5 text-center'>Login Account</h3>
                        <div className='login-form d-flex gap-3 flex-column align-items-center '>
                            <input
                                placeholder="Enter UserName"
                                type="text"
                                value={name}
                                onChange={onChangeName}
                                className="user-input   "
                            />
                            <input
                                placeholder="@gmail"
                                type="email"
                                value={email}
                                onChange={onChangeEmail}
                                className="user-input  "
                            />
                            <input
                                placeholder="phone"
                                type="tel"
                                value={phone}
                                onChange={onChangePhone}
                                className="user-input  "
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={onChangePassword}
                                className="user-input  "
                            />
                            <input
                                placeholder="confirm password"
                                type="password"
                                value={passwordConfirm}
                                onChange={onChangePasswordConfirm}
                                className="user-input  "
                            />
                            <div className='d-flex flex-wrap flex-column justify-content-center py-4 w-75 mx-auto '>
                                <Link to="/register" style={{ textDecoration: "none" }}>
                                    <button onClick={onSubmite} className="btn-login create-btn   ">Create account</button>
                                </Link>
                                <label className="mx-auto my-4">
                                    You already have an account?{" "}
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <span style={{ cursor: "pointer" }} className="text-danger">
                                            click
                                        </span>
                                    </Link>
                                </label>
                            </div>
                        </div>

                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    )
}

export default Register