import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/image/6310507.jpg'
import './Auth.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LoginHook from '../../Hook/Auth/LoginHook'
import { ToastContainer } from 'react-toastify'
import Loading from '../../Utility/Loading/Loading'
const LoginPage = () => {
    const [email, password, loading, onpress, onChangeEmail, onChangePassword, onSubmite] = LoginHook()
    return (
        <div className=' login-page ' >
            <Container>
                <Row className='d-flex p-0 m-0 align-items-center'>
                    <Col md={6} className='d-none d-md-block  p-0' >
                        <LazyLoadImage effect='blur' src={logo} style={{ width: "", height: "" }} alt='' className='img-fluid object-fit-contain' />
                    </Col>
                    <Col md={6} className='py-5 text-center ' >

                        <h3 className='header py-5 text-center'>Login Account</h3>
                        <div className='login-form d-flex gap-3 flex-column align-items-center'>
                            <input
                                placeholder="email"
                                value={email}
                                onChange={onChangeEmail}
                                type="text"
                                className="user-input "
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={onChangePassword}
                                className="user-input "
                            />
                            <div>
                                <label className="mx-auto my-4">
                                    Forget password?{" "}
                                    <Link to="/user/forgetpassword" style={{ textDecoration: 'none' }}>
                                        <span style={{ cursor: "pointer" }} className="text-danger">
                                            click
                                        </span>
                                    </Link>
                                </label>
                            </div>
                            <div className='d-flex flex-wrap justify-content-between gap-3 py-4 w-75 mx-auto '>
                                <Link style={{ textDecoration: "none" }}>
                                    <button onClick={onSubmite} className="btn-login  ">Login</button>
                                </Link>

                                <Link to="/register" style={{ textDecoration: "none" }}>
                                    <button className="btn-login create-btn   ">Create account</button>
                                </Link>
                            </div>
                            {
                                onpress ? (
                                    loading ? (<Loading />) : null
                                ) : (null)
                            }
                        </div>
                        <ToastContainer />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage