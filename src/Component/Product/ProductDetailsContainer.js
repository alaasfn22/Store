import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetailsContainer = () => {
    return (
        <Container className='bg-white  rounded-2 shadow-sm '>
            <Row className='mx-auto g-2 p-0'>
                <Col className='  p-lg-2' xs={12} sm={12} md={6} xl={5}  >
                    <ProductGallery />
                </Col>
                <Col className='  p-lg-3' xs={12} sm={12} md={6} xl={7}>
                    <ProductText />
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsContainer