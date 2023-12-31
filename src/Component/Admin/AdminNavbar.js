import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const AdminNavbar = ({ Togel }) => {
    return (
        <div className="container d-flex justify-content-between pt-2 ">
            <FontAwesomeIcon icon={faBars} onClick={Togel} className=' mb-1 fs-4  ' />
        </div>

    )
}

export default AdminNavbar