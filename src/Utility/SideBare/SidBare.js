import React from 'react'
import { Accordion, Row } from 'react-bootstrap'
import './SidBar.css'
import SideBarFilterHook from '../../Hook/Search/SideBarFilterHook'
const SidBare = () => {
    const [cat, brn, onClickCategory, onClickBrand, priceFrom, priceTo] = SideBarFilterHook()
    let localto = "", localfrom = "";
    if (sessionStorage.getItem("pricefrom") !== null)
        localfrom = sessionStorage.getItem("pricefrom")
    if (sessionStorage.getItem("priceto") !== null)
        localto = sessionStorage.getItem("priceto")
    return (
        <Row className='d-flex flex-column p-1 shadow-sm overflow-hidden  mt-md-5  sideBare-filter  '>
            <h5>Filters</h5>
            <Accordion className='my-3  p-0 m-0'>
                <Accordion.Item className=' shadow-none' eventKey="0">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body className='p-1'>
                        <div className='d-flex flex-row align-items-center'>
                            <input onChange={onClickCategory} type='checkbox' value="0" />
                            <label className='ms-2'>All</label>
                        </div>
                        {
                            cat ? (cat.map((item, index) => {
                                return (
                                    <div key={index} className='d-flex flex-row align-items-center'>
                                        <input onChange={onClickCategory} type='checkbox' value={item._id} />
                                        <label className='ms-2'>{item.name}</label>
                                    </div>
                                )
                            })) : (<h6>Not Found Category</h6>)
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className='my-3 p-0 m-0'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Brand</Accordion.Header>
                    <Accordion.Body className='p-1'>
                        <div className='d-flex flex-row align-items-center'>
                            <input onChange={onClickBrand} type='checkbox' value="0" />
                            <label className='ms-2'>All</label>
                        </div>

                        {
                            brn ? (brn.map((item, index) => {
                                return (
                                    <div key={index} className='d-flex flex-row align-items-center'>
                                        <input onChange={onClickBrand} type='checkbox' value={item._id} />
                                        <label className='ms-2'>{item.name}</label>
                                    </div>
                                )
                            })) : (<h6>Not Found Brand</h6>)
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className='my-3 p-0 m-0 '>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body className='p-1'>
                        <div className="d-flex gap-2  py-2 align-items-center justify-content-center flex-wrap ">
                            <input
                                className=" p-1 rounded-3 border-1"
                                type="number"
                                placeholder='from'
                                value={localfrom}
                                onChange={priceFrom}
                                style={{ width: "70px", height: "35px" }}
                            />
                            <input
                                className="p-1 rounded-3 border-1"
                                placeholder='to'
                                type="number"
                                value={localto}
                                onChange={priceTo}
                                style={{ width: "70px", height: "35px" }}
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Row>

    )
}

export default SidBare