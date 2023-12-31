import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SubTitle.css'
import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubTile = ({ title, btnName, path }) => {

    return (
        <Row className='m-0 py-2 '>
            <div className='d-flex justify-content-between pb-3'>
                <h3 className='sub-title text-capitalize position-relative'> {title} </h3>
                {
                    btnName && (
                        <Link to={path} style={{ textDecoration: "none" }}>
                            <div className='sub-btn d-flex  justify-content-between align-items-center'>
                                <span className='sub-btn-title me-2 text-capitalize '>more</span>
                                <FontAwesomeIcon icon={faArrowRight} className='sub-btn-icon' />
                            </div>
                        </Link>)
                }

            </div>
        </Row>
    )
}

export default SubTile