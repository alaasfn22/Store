import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import Sub_Category_Hook from '../../Hook/SubCategoryHook/Sub_Category_Hook'

const AdminSubCategory = () => {
    //custome subcategory hook
    const [category, subName, subLoading, subPress, handelSubName, handelSelectOption, saveSubCategory] = Sub_Category_Hook()
    return (
        <Row className='gy-3 m-auto px-2'>

            <Col xs="12" md="6" className='text-center' >
                <div className="fs-4 pb-2">Add New SubCategory</div>
                <div className='border py-5 p-2 flex-column  d-flex align-items-center'>
                    <input
                        type="text"
                        value={subName}
                        onChange={handelSubName}
                        className="input-form d-block my-3  p-1 px-3 w-75 user-input"
                        placeholder="SubCategory Name"
                    />
                    <select onChange={handelSelectOption} name="category" className="select rounded-3 w-75 mt-3 p-2 ">
                        <option value="0">Select the subcategory</option>
                        {
                            category ? category.map((item, index) => {
                                return (<option key={index} value={item._id}>{item.name}</option>)
                            }) : null
                        }
                    </select>
                </div>
                <div className="py-3 py-5  ">
                    <button onClick={saveSubCategory} className="btn-login  w-25 ">Save </button>
                </div>
                {
                    subPress ? (
                        subLoading ? (<Spinner animation="grow" variant="primary" />) : (<p>done</p>)
                    ) : (null)
                }
            </Col>

            <ToastContainer />
        </Row>
    )
}

export default AdminSubCategory