import React from 'react'
import img1 from '../../assets/image/photo-1618898909019-010e4e234c55.avif'
import img2 from '../../assets/image/photo-1624623278313-a930126a11c3.avif'
import { Col, Container, Row } from 'react-bootstrap'
import './homeComponent.css'
const Landing = () => {
    return (
        <Container className='py-3'>
            <Row className='g-2  m-0'>
                <Col className='col-12 col-md-6  '>
                    <div className='position-relative landing-box overflow-hidden  rounded-3' >
                        <img src={img1} style={{ width: "100%", height: "350px" }} alt='' className='object-fit-cover' />
                        <div className='landing-overlay'>
                            <h3>Winter Jumpers</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum officia autem libero!</p>
                        </div>
                    </div>
                </Col>
                <Col className=' col-12 col-md-6' >
                    <div className='position-relative landing-box overflow-hidden  rounded-3' >
                        <img src={img2} style={{ width: "100%", height: "350px" }} alt='' className=' object-fit-cover' />
                        <div className='landing-overlay'>
                            <h3>Winter Jumpers</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum officia autem libero!</p>
                        </div>
                    </div>
                </Col>
            </Row >
        </Container>

    )
}

export default Landing