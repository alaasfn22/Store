import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const RatePost = () => {

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      console.log(`Example 2: new value is ${newValue}`);
    }
  };



  return (
    <div className=''>
      <Row className="mt-3 mx-auto  ">
        <Col sm="12" className=" d-flex align-items-center">
          <div className="rate-name  d-inline mx-3 ">Alaa ali</div>
          <ReactStars {...setting} />
          {/* <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value={4.5}
            color="#979797"
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700" /> */}

        </Col>
      </Row>
      <Row className="border-bottom mt-1 mx-auto">
        <Col className="d-felx p-2  pb-2">
          <textarea
            className="input-form-area w-100 p-2 mt-3"
            rows="2"
            cols="5"
            placeholder="Write your comment...."
          />
          <div className=" d-flex justify-content-end al">
            <div className="product-cart-add px-3  py-2 text-center d-inline"> Add a comment</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RatePost
