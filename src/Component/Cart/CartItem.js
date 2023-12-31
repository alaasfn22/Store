import React from 'react'
import './Cart.css'
import { Button, Row, Table } from 'react-bootstrap'
import img1 from '../../assets/image/3.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { baseUrlImage, baseUrlImageCart } from '../../API/baseURLImage';
import Delete_Item_Cart_Hook from '../../Hook/Cart/Delete_Item_Cart_Hook';
import { ToastContainer } from 'react-toastify';
import UpDateCountCartHook from '../../Hook/Cart/upDateCountCartHook';
import { useState } from 'react';
import { useEffect } from 'react';
const CartItem = ({ cartProducts }) => {
    const [clearAll, removeofCart] = Delete_Item_Cart_Hook()
    const [counter, handelChangecont] = UpDateCountCartHook(cartProducts)
    


    return (
        <Row className='flex-column   cart-content'>
            <ToastContainer />
            <div className='res-table bg-white p-2 shadow-sm '>


                <Table className=' table   ' hover bordered >
                    <thead className='text-center'>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Product</th>
                            <th>Prie</th>
                            <th>Quntity</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            cartProducts.length >= 1 ? cartProducts.map((items, index) => {
                                return (
                                    <tr key={index} >
                                        <td className=' '>
                                            <FontAwesomeIcon onClick={() => removeofCart(items._id)} icon={faXmark} className='close-icon' />
                                        </td>
                                        <td >
                                            <img src={`${baseUrlImageCart}${items.product.imageCover.slice(9) || img1}`} alt=''
                                                width={"80px"} height={"100px"} className='rounded object-fit-contain ' />
                                        </td>
                                        <td>{items.product.title}</td>
                                        <td>${items.price}</td>
                                        <td>
                                            <div key={index}>
                                                <input
                                                    className="  text-center  rounded-3 border-1 "
                                                    type="tel"
                                                    value={items.count}
                                                    onChange={(e, id) => handelChangecont(e, items._id)}
                                                    style={{ width: "70px", height: "35px" }}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                className="color  mx-auto border mt-4 active"
                                                style={{ backgroundColor: `${items.color || "null"}` }}>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }) : (null)
                        }


                    </tbody>
                </Table>

                <div className=' p-2'>
                    <Button onClick={clearAll} className='check-btn my-3'>
                        <FontAwesomeIcon icon={faTrashCan} className='me-2' />
                        Remove All
                    </Button>

                </div>
            </div>


        </Row>
    )
}

export default CartItem