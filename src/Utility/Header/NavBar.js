import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Button, Container, NavDropdown, Navbar } from 'react-bootstrap'
import Hamburger from 'hamburger-react'
import ButtonTop from '../../Component/ButtonTop/ButtonTop'
import NavBarSearchHook from '../../Hook/Search/NavBarSearchHook'
import { Link, useNavigate } from 'react-router-dom'
import GetLoggedCartHook from '../../Hook/Cart/getLoggedCartHook'

const NavBar = () => {
    const navigate = useNavigate()
    const [searchWord, handelSearch] = NavBarSearchHook();


    let word = ""
    if (window.sessionStorage.getItem("searchword") !== null)
        word = window.sessionStorage.getItem("searchword")

    const [userData, setUserData] = useState("")
    useEffect(() => {
        if (localStorage.getItem("data") != null) {
            setUserData(JSON.parse(localStorage.getItem("data")))
        }
    }, []);


    const logOut = () => {
        localStorage.removeItem("data")
        localStorage.removeItem("token")
        setUserData("")
        // window.location.pathname("/")
        navigate("/")

        // window.location.reload(false)
    }
    const [cartNumbers] = GetLoggedCartHook()

    return (

        <div>
            <Navbar expand="md" className=" navbar p-3">
                <Container >
                    <Navbar.Brand href="#/"><div className='d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faBasketShopping} className='logo-icon mb-1 fs-4  ' />
                        <h3 className='ms-2 my-0 logo-text'>Basket</h3>
                    </div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"  ><Hamburger /></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <div
                            className="mx-auto my-4 my-md-1 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className=' d-flex mx-auto  inpout-content  '>
                                <input
                                    value={word}
                                    onChange={handelSearch}
                                    type="search"
                                    placeholder="Search"
                                    className="custom-input w-100"
                                    aria-label="Search"
                                />
                                <Button className='ms-0 custom-btn' variant="btn ">Search</Button>

                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly align-items-center icon-content'>
                            {
                                userData ? (<NavDropdown title={userData.name} id="basic-nav-dropdown" className='d-flex me-3  '>
                                    {
                                        userData.role === "admin" ? (<Link to="/admin/home"><NavDropdown.Item href="#action/3.0" >Dashboard</NavDropdown.Item>  </Link>)
                                            : (<NavDropdown.Item href="#action/3.1">Your Profile</NavDropdown.Item>)
                                    }

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut} href="">Logout </NavDropdown.Item>
                                </NavDropdown>) : (<Link to="/login" className='d-flex me-3 flex-column justify-content-center icon-box '>
                                    <FontAwesomeIcon icon={faUser} className='nav-icon' />
                                    <span className='icon-name'>Login</span>
                                </Link>)
                            }

                            {
                                userData.role === "user" ? <Link to='/cart' className='d-flex  me-3 flex-column justify-content-center  icon-box'>
                                    <FontAwesomeIcon icon={faBagShopping} className='nav-icon ' />
                                    <span className='order-count'>{cartNumbers}</span>
                                    <span className='icon-name'>My Cart</span>
                                </Link> : null
                            }

                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ButtonTop />
            {/* <div className=' .navbar bg-danger p-2 w-100 min-vw-100 fixed-bottom'>
                <div className='d-flex justify-content-evenly align-items-center icon-content'>
                    <NavLink href="/login" className='d-flex me-3 flex-column justify-content-center icon-box '>
                        <FontAwesomeIcon icon={faUser} className='nav-icon' />
                        <span className='icon-name'>Profile</span>
                    </NavLink>
                    <NavLink href='/cart' className='d-flex  me-3 flex-column justify-content-center  icon-box'>
                        <FontAwesomeIcon icon={faBagShopping} className='nav-icon ' />
                        <span className='order-count'>10</span>
                        <span className='icon-name'>My Cart</span>
                    </NavLink>
                </div>
            </div> */}
        </div>






    )
}

export default NavBar