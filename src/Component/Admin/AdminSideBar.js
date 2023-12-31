import { faB, faBasketShopping, faGauge, faPlus, faTableCells } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Admin.css'


const AdminSideBar = () => {

    return (
        <div className=' py-4  admin-sidebar '>
            <Link to="/"> <div className='mb-5 px-3 d-flex '>
                <FontAwesomeIcon icon={faBasketShopping} className='text-white side-icon  ' />
                <h3 className='header p-0 m-0 ms-3'>BasketShopping</h3>
            </div></Link>
            <div >
                <NavLink to="/admin/home" className='d-flex align-items-center px-3 py-3 text-decoration-none side-title-box '>
                    <FontAwesomeIcon icon={faGauge} className='side-icon' />
                    <h3 className='p-0 m-0 ms-3 side-title'>Dashbord</h3>
                </NavLink>
                <hr className='text-dark m-0' />
            </div>
            <div >
                <NavLink to="/admin/allproducts" className='d-flex align-items-center px-3 py-3 text-decoration-none side-title-box '>
                    <FontAwesomeIcon icon={faTableCells} className='side-icon' />

                    <h3 className='p-0 m-0 ms-3 side-title'>Products</h3>
                </NavLink>
                <hr className='text-dark m-0' />
            </div>
            <div >
                <NavLink to="/admin/allcategory" className='d-flex align-items-center px-3 py-3 text-decoration-none side-title-box '>
                    <FontAwesomeIcon icon={faTableCells} className='side-icon' />
                    <h3 className='p-0 m-0 ms-3 side-title'>All Category</h3>
                </NavLink>
                <hr className='text-dark m-0' />
            </div>
            {/* <div >
                <NavLink to="/" className='d-flex align-items-center ps-3 py-3 text-decoration-none side-title-box '>
                    <FontAwesomeIcon icon={faScrewdriverWrench} className='side-icon' />
                    <h3 className='p-0 m-0 ms-3 side-title'>Order management</h3>
                </NavLink>
                <hr className='text-dark m-0' />
            </div> */}
            <div >
                <NavLink to="/admin/addbrand" className='d-flex align-items-center px-3 py-3 text-decoration-none side-title-box '>
                    <FontAwesomeIcon icon={faB} className='side-icon' />
                    <h3 className='p-0 m-0 ms-3 side-title'>Add a brand</h3>
                </NavLink>
                <hr className='text-dark m-0' />
            </div>
            <div >
                <NavLink to="/admin/addsubcategory" className='d-flex align-items-center px-3 py-3 text-decoration-none side-title-box '>
                    <FontAwesomeIcon icon={faB} className='side-icon' />
                    <h3 className='p-0 m-0 ms-3 side-title'>Add a SubCategory</h3>
                </NavLink>
                <hr className='text-dark m-0' />
            </div>

            <div >
                <NavLink to="/admin/addproduct" className='d-flex align-items-center px-3 py-3 text-decoration-none side-title-box '>
                    <FontAwesomeIcon icon={faPlus} className='side-icon' />
                    <h3 className='p-0 m-0 ms-3 side-title'>Add a product</h3>
                </NavLink>
                <hr className='text-dark m-0' />
            </div>
        </div>

    )
}

export default AdminSideBar