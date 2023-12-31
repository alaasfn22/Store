import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../assets/image/rate.png'
import RateItem from './RateItem';
import RatePost from './RatePost';
import Pagination from '../../Utility/Pagination/Pagination'
const RateContainer = () => {
    return (
        <Container dir='' className='rate-container bg-white my-3 py-4 rounded-2'>
            <Row className='mx-auto'>
                <Col className="d-flex align-items-center">
                    <div className="sub-tile d-inline p-1 ">Ratings</div>
                    <img className="mt-" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 ">4.3</div>
                    <div className="rate-count d-inline p-1 ">(160 evaluation)</div>
                </Col>
            </Row>
            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />

            <Pagination />
        </Container>
    )
}

export default RateContainer
