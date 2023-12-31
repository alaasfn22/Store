import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Component/Cart/CartItem'
import Checkout from '../../Component/Cart/Checkout'
import GetLoggedCartHook from '../../Hook/Cart/getLoggedCartHook'
import cart from '../../assets/image/Cart-PNG-Clipart.png'
import Delete_Item_Cart_Hook from '../../Hook/Cart/Delete_Item_Cart_Hook'

const Cart = () => {
    const [cartNumbers, cartProducts, totalPrice] = GetLoggedCartHook()

    return (
        <div>

            <Container>

                <Row className='g-2 py-4'>
                    <h3 className=''>Shopping Cart</h3>
                    {/* <p > The number of products in the shopping cart = {cartNumbers}</p> */}
                    <Col md={8}>
                        <CartItem cartProducts={cartProducts} />
                    </Col>
                    <Col md={4} className=''>
                        <Checkout totalPrice={totalPrice} />
                    </Col>
                </Row>


            </Container>

        </div>
    )
}

export default Cart