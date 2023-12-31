import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import i3 from '../../assets/image/sale.png'
import './homeComponent.css'
const HomeBanar = () => {
    return (
        <Container className='py-2 '>
            <Row className='mx-auto rounded-3 shadow-sm  d-flex flex-column flex-md-row  text-center align-items-center  align-items-center p-2   banner-box '>
                <Col sm={6} md={4} className='banar-img p-0 py-2 '>
                    <img src={i3} style={{ width: "300px" }} alt='' className='img-fluid object-fit-cover' />
                </Col>
                <Col sm={6} md={8} className='banar-info p-0 py-2  '>
                    <h3 className='banar-title text-center  '>
                        Up to 30% discount on laptops                    </h3>
                </Col>

            </Row>
        </Container>
    )
}

export default HomeBanar