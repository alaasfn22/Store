import { faBasketShopping, faCopyright, faEnvelope, faFaceGrinBeam, faHatWizard, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import facebook from '../../assets/image/facebook.png'

const Footer = () => {
    return (
        <div className='bg-white  p-0 mx-auto  py-3 mt-5 border-top footer'>
            <Container>
                <Row className='mx-auto g-4 py-3'>
                    <Col xs="12" md="3" >
                        <div className='conent1 d-flex flex-column gap-3'>
                            <div className='d-flex '>
                                <FontAwesomeIcon icon={faBasketShopping} className='logo-icon mb-1 fs-4  ' />
                                <h3 className='ms-2 my-0 logo-text'>Basket</h3>
                            </div>
                            <p className='footer-des '>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                                consequuntur amet culpa cum itaque neque.
                            </p>
                            <ul className='m-0 p-0 d-flex'>
                                {/* <li>
                                    <Link to="#"><img src={facebook} width="30px" className='rounded-5 ' alt='' /></Link>
                                </li>
                                <li>
                                    <Link to="#"><img src={facebook} width="30px" className='rounded-5 ' alt='' /></Link>
                                </li>
                                <li>
                                    <Link to="#"><img src={facebook} width="30px" className='rounded-5 ' alt='' /></Link>
                                </li> */}
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12" md="6" className='d-flex flex-row justify-content-around '>
                        <div className=''>
                            <p className='footer-title mb-3 '>About Us</p>
                            <ul >
                                <Link to="#"><li><p>Find Stor</p></li></Link>
                                <Link to="#"><li><p>Location</p></li></Link>
                                <Link to="#"><li><p>Blogs&News</p></li></Link>
                                <Link to="#"><li><p>Affiliate Service</p></li></Link>
                            </ul>
                        </div>
                        <div>
                            <p className='footer-title mb-3 '>Informations</p>
                            <ul >
                                <Link to="#"><li><p>Help Center</p></li></Link>
                                <Link to="#"><li><p>Refund Queries</p></li></Link>
                                <Link to="#"><li><p>Shipping QnA</p></li></Link>
                                <Link to="#"><li><p>Blogs</p></li></Link>
                            </ul>
                        </div>
                        <div>
                            <p className='footer-title mb-3 '>Support</p>
                            <ul >
                                <Link to="#"><li><p>FAQs</p></li></Link>
                                <Link to="#"><li><p>Support</p></li></Link>
                                <Link to="#"><li><p>Contact Us</p></li></Link>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12" md="3" className='d-flex justify-content-md-center'>
                        <div>
                            <p className='footer-title mb-3 '>Contact Us</p>
                            <ul >
                                <li><p><FontAwesomeIcon icon={faPhone} className='me-2' />01021218466</p></li>
                                <li><p> <FontAwesomeIcon icon={faEnvelope} className='me-2' />aa0173422@gmail.com</p></li>
                                <li><p><FontAwesomeIcon icon={faLocationDot} className='me-2' />Mansoura,Egypt</p></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className='mx-auto' >
                    <Col className='d-flex flex-wrap justify-content-center justify-content-md-between align-items-center'>
                        <p className='pe-2'>© 2023 Basket</p>
                        <div className='d-flex justify-content-between gap-3 '>
                            <Link to="#"><p className=''>Terms & Conditions</p></Link>
                            <Link to="#"> <p>Privacy Policy</p></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer