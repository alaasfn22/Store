import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const Checkout = ({ totalPrice }) => {
    return (
        <div className=' py-3 py-md-0 px-md-3' >
            <ToastContainer />
            <Col className='mb-3 p-3 rounded-3 border  bg-white'>
                <h4 className='mb-3'>Have Coupon?</h4>
                <div className=' d-flex mx-auto w-100  inpout-content  '>
                    <input
                        type="search"
                        placeholder="Coupon code"
                        className="custom-input w-100"
                        aria-label="Search"
                    />
                    <Button className='ms-0 custom-btn' variant="btn ">Apply </Button>
                </div>
            </Col>
            <Col className='bg-white p-3 rounded-3 border'>
                <div className=''>
                    <div className='d-flex justify-content-between  '>
                        <p className=''>Sub-total:</p>
                        <p className=''> $ {totalPrice}</p>
                    </div>
                    <div className='d-flex justify-content-between  '>
                        <p>Discount:</p>
                        <p className=''> $0</p>
                    </div>
                    {/* <div className='d-flex justify-content-between  '>
                        <p>Tax:</p>
                        <p className=''> $ 30</p>
                    </div> */}
                    <hr />
                    <div className='d-flex justify-content-between  '>
                        <p>Total:</p>
                        <p className=''> $ {totalPrice}</p>
                    </div>
                    <Button className='w-100 check-btn my-3'>
                        <FontAwesomeIcon icon={faLock} className='me-2' />
                        CHECKOUT
                    </Button>
                </div>
            </Col>
        </div>
    )
}

export default Checkout