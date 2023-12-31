import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Loading from '../../Utility/Loading/Loading'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Admin_View_CategoryHook from '../../Hook/Admin/Admin_View_CategoryHook';
import { deleteCategory, getCategory, getSearchCategory } from '../../redux/Actions/categoryAction';
import { useDispatch } from 'react-redux';

const AdminCategory = () => {
    const [category, loading] = Admin_View_CategoryHook()
    const dispatch = useDispatch()
    const removeCategory = (id) => {
        if (window.confirm("Are you sure to delete this product?")) {
            dispatch(deleteCategory(id))
            window.location.reload()
        }
    }

    const [search, setSearch] = useState("")
    const serachWord = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        setTimeout(() => {
            dispatch(getSearchCategory(`keyword=${search}`))
        }, 1000)

    }, [search]);



    const columns = [
        {
            name: "id",
            selector: (row) => <p className='fs-6'> {row._id}</p>,
            sortable: true,
        },
        {
            name: "image",
            selector: (row) => <img src={row.image} alt='' width={"60px"} height={"60px"} className='rounded object-fit-contain ' />
        },
        {
            name: "name",
            selector: (row) => row.name,
            sortable: true
        },

        {
            name: "Actions",

            cell: (row) => (<div className='d-flex gap-1'>
                <Link ><Button className=''><FontAwesomeIcon icon={faPenToSquare} /></Button></Link>
                <Button onClick={() => removeCategory(row._id)} className='btn-remove'  ><FontAwesomeIcon icon={faTrashCan} /></Button>
            </div>)
        },
    ]

    return (
        <div className="m-auto px-2 ">
            <h3 className='mt-3'>All Products</h3>
            {
                loading === false ?
                    category ?
                        <DataTable
                            columns={columns}
                            data={category ? category.map((item) => item) : <p>There are no Products</p>}
                            highlightOnHover={true}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="68vh"
                            subHeader
                            subHeaderComponent={
                                <div><input placeholder='Search' value={search} onChange={serachWord} className='form-control' type='text' /></div>
                            }

                        />
                        : (<h3 className='py-5 text-center'>There are no category</h3>)

                    : (<Loading />)
            }


        </div>
    )
}

export default AdminCategory