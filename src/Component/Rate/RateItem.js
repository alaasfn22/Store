import React from 'react'
import { Row, Col } from 'react-bootstrap'
import rate from '../../assets/image/rate.png'
const RateItem = () => {
    return (
        <div className=''>
            <Row className="mx-auto mt-3">
                <Col className="d-felx  ">
                    <div className="rate-name me-1 d-inline">Alaa ali</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 ">4.3</div>
                </Col>
            </Row>
            <Row className="mx-auto border-bottom mx-2 p-0">
                <Col className="d-felx ms-4 p-0 pb-2">
                    <div className="rate-description  d-inline me-2">
                        A suitable product at its current price, a very good face and an extra shield
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RateItem
