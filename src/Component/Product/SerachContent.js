import React, { useState } from 'react'
import UnopDropdown from 'unop-react-dropdown'
import sort from '../../assets/image/sort.png'
import filter from '../../assets/image/filter.png'
import { Offcanvas } from 'react-bootstrap'
import SidBare from '../../Utility/SideBare/SidBare'
const SerachContent = ({ results, myClick }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handler = () => {

    }

    //when select value save on storage and start function of getSearchProduct
    const clickMMe = (key) => {
        sessionStorage.setItem('sort', key)
        myClick()
    }
    return (
        <>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <p className='my-0 products-length '>results {results}</p>
                <div className='d-flex justify-content-between gap-3  align-items-center p-1'>
                    <UnopDropdown
                        onAppear={handler}
                        onDisappearStart={handler}
                        trigger={<p className='my-0 mb-1'>
                            <img src={sort} alt='' style={{ width: "20px", height: "20px" }} className='mx-1 ' />
                            Sort By
                        </p>}
                        delay={0}
                        align="CENTER"
                        hover
                    >
                        <div className='card-filter ' >
                            <div onClick={() => clickMMe("")} className='border-bottom card-filter-item'>Out of order</div>
                            <div onClick={() => clickMMe("Price From lowest to highest")} className='border-bottom card-filter-item'>Price From lowest to highest</div>
                            <div onClick={() => clickMMe("Price From highest to lowest")} className='border-bottom card-filter-item'>Price From highest to lowest</div>
                            <div onClick={() => clickMMe("Highest rated")} className='border-bottom card-filter-item'>Highest rated</div>
                            <div onClick={() => clickMMe("best seller")} className='border-bottom card-filter-item'>best seller</div>
                            <div onClick={() => clickMMe("quantity")} className='card-filter-item'> quantity</div>
                        </div>
                    </UnopDropdown>
                    <div onClick={handleShow} className='d-flex align-items-center filter-btn p-0 d-md-none '>
                        <img src={filter} alt='' style={{ width: "20px", height: "" }} className='mx-1 ' />
                        <p className='my-0'>Filter</p>
                    </div>
                </div>
            </div>
            <Offcanvas className="d-md-none" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidBare className="mt-0" />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SerachContent