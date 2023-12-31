import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminSideBar from '../../Component/Admin/AdminSideBar'
import AdminHome from '../../Component/Admin/AdminHome'
import AdminNavbar from '../../Component/Admin/AdminNavbar'

const AdminHomePage = () => {
    const [togel, setTogel] = useState(true);
    const Togel = () => {
        setTogel(!togel)
    }
    return (
        <Row className='container-fluid bg-white p-0 m-0 flex-nowrap'>
            {togel === true && <Col className='p-0    col-2 col-md-2 '>
                <AdminSideBar />
            </Col>}
            <Col className='customCol  p-0'>
                < AdminNavbar Togel={Togel} />
                <AdminHome />
            </Col>
        </Row>

    )
}

export default AdminHomePage