import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Loading from '../../Utility/Loading/Loading'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import Admin_View_products from '../../Hook/Admin/Admin_View_products';
import { useDispatch } from 'react-redux';
import { deleteProduct, getSearchProduct } from '../../redux/Actions/productAction';
import Admin_View_products_Hook from '../../Hook/Admin/Admin_View_products_Hook';

const AdminProducts = () => {
    const [items, loading] = Admin_View_products_Hook()
    const dispatch = useDispatch()
    const handelRemove = (id) => {
        if (window.confirm("Are you sure to delete this product?")) {
            dispatch(deleteProduct(id))
            window.location.reload()
        }
    }
    const [search, setSearch] = useState("")
    const serachWord = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        setTimeout(() => {
            dispatch(getSearchProduct(`keyword=${search}`))
        }, 1000);
    }, [search]);



    const columns = [
        {
            name: "id",
            selector: (row) => <p className='fs-6'> {row._id}</p>,
            sortable: true,
        },
        {
            name: "image",
            selector: (row) => <img src={row.imageCover} alt='' width={"60px"} height={"60px"} className='rounded object-fit-contain ' />
        },
        {
            name: "name",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "price",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "Actions",

            cell: (row) => (<div className='d-flex gap-1'>
                <Link to={`/admin/editproduct/${row._id}`}><Button className=''><FontAwesomeIcon icon={faPenToSquare} /></Button></Link>
                <Link to={`/productdetails/${row._id}`} ><Button className=''  ><FontAwesomeIcon icon={faEye} /></Button></Link>
                <Button onClick={() => handelRemove(row._id)} className='btn-remove'  ><FontAwesomeIcon icon={faTrashCan} /></Button>
            </div>)
        },
    ]

    return (
        <div className="m-auto px-2 ">
            <h3 className='mt-3'>All Products</h3>
            {
                loading === false ? <DataTable
                    columns={columns}
                    data={items ? items.map((item) => item) : <p>There are no Products</p>}
                    highlightOnHover={true}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="68vh"
                    subHeader
                    subHeaderComponent={
                        <div><input placeholder='Search' value={search} onChange={serachWord} className='form-control' type='text' /></div>
                    }

                /> : (<Loading />)
            }


        </div>
    )
}

export default AdminProducts