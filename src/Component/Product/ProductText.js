import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Product_Details_Hook from '../../Hook/ProductDetailsHook/Product_Details_Hook'
import Add_To_Cart_Hook from '../../Hook/Cart/Add_To_Cart_Hook'
import { ToastContainer } from 'react-toastify'

const ProductText = () => {
    const { id } = useParams()
    const [item, dataImages, imageCover, brand, category, prod] = Product_Details_Hook(id)
    const [colorCheck, handelSelectColor, onAddProductToCart] = Add_To_Cart_Hook(id, item)
    return (
        <div className='mx-auto details-content ms-md-3 py-4'>
            <div className='mb-4'>
                <h3 className='product-title'>{item.title}</h3>
                <p className='my-0'>Category / <span className='brand-name'>{category.name}</span> </p>
                <p className='brand my-0'>Brand / <span className='brand-name'>{brand.name}</span></p>
                <p className='stock-text my-0'>{item.quantity} in Stock</p>
            </div>
            <Row className='mx-auto mb-2'>
                <Col md="8" className="m-0 p-0 d-flex  flex-wrap ">
                    {
                        item.availableColors ? (item.availableColors.map((color, index) => {
                            return (
                                <div key={index}
                                    onClick={() => handelSelectColor(index, color)}
                                    className={colorCheck === index ? "color ms-2 border active my-1" : "color my-1 ms-2 border"}
                                    style={{ backgroundColor: `${color}` }}>
                                </div>
                            )
                        })) : (null)
                    }
                </Col>
            </Row>
            <div className='d-flex align-items-center '>
                <p className='price me-5 m-0'>$ {item.price}</p>
                {/* <del className='after-price'>$12800</del> */}
            </div>
            <div className=' d-flex  '>
                <ul className='d-flex me-3  m-0 p-0'>
                    <li> <FontAwesomeIcon icon={faStar} className='ratio-icon' /></li>
                </ul>
                <p className='ratio-number'>({item.ratingsQuantity})</p>
            </div>
            <div className='w-100 py-1'>
                <p className='details-title m-0'>Description:</p>
                <p>{item.description}</p>
            </div>
            <div className='btn-box d-flex justify-content-between mt-2  justify-content-md-start'>
                <Button className='me-4 btn-buy btns' variant="">Buy Now</Button>
                <Button onClick={onAddProductToCart} className='btn-add btns' variant="">Add To Cart</Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProductText