import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin_AddCategory_Hook from '../../Hook/CategoryHook/Admin_AddCategory_Hook';
import Admin_AddBrand_Hook from '../../Hook/BrandHook/Admin_AddBrand_Hook';
const AdminBrand = () => {
    // cutome brand hook 
    const [brandImg, brandName, brandLoading, brandPress, handelBrandChangeCatName, handelBrandSelectImage, saveNewBrand] = Admin_AddBrand_Hook()
    // cutome category hook 
    const [catLoading, catPress, categoryImg, categoryName, handelChangeCatName, handelSelectImage, saveNewCategory] = Admin_AddCategory_Hook()

    return (
        <Row className='gy-3 m-auto px-2'>
            <Col xs="12" md="6" className='text-center'>
                <div className="fs-4 pb-2">Add New Brand</div>
                <div style={{ cursor: "pointer", height: "200px" }} className=' p-4 border position-relative overflow-hidden'>
                    <div className="text-form pb-2">Brand Photo</div>
                    <label id="brand">
                        <input onChange={handelBrandSelectImage} for="brand" style={{ position: "absolute", left: "0", opacity: "0", cursor: "pointer" }} type='file' />
                        <img src={brandImg} alt="" height="120px" width="150px" />
                    </label>
                </div>
                <div className="d-flex align-items-center flex-column gap-3 ">
                    <input
                        type="text"
                        value={brandName}
                        onChange={handelBrandChangeCatName}
                        className=" d-block mt-3 p-1 px-3 w-75 user-input"
                        placeholder="Brand Name"
                    />
                    <button onClick={saveNewBrand} className="btn-login  w-25 ">Save </button>
                    {
                        brandPress ? brandLoading ? (<Spinner animation="grow" variant="primary" />) : (<p>done</p>) : null
                    }
                </div>
            </Col>
            {/* category form */}
            <Col xs="12" md="6" className='text-center'>
                <div className="fs-4 pb-2">Add New Category</div>
                <div style={{ cursor: "pointer", height: "200px" }} className=' p-4 border position-relative overflow-hidden'>
                    <div className="text-form mb-2 ">upload Category Photo</div>
                    <label id="cat">
                        <input for="cat" onChange={handelSelectImage} className='' style={{ position: "absolute", left: "0", opacity: "0", zIndex: "-1" }} type='file' />
                        <img src={categoryImg} alt="" height="120px" width="150px" className='object-fit-contain' />
                    </label>
                </div>
                <div className="d-flex align-items-center flex-column gap-3 ">
                    <input
                        type="text"
                        value={categoryName}
                        onChange={handelChangeCatName}
                        className="input-form d-block mt-3 p-1 px-3 w-75 user-input"
                        placeholder="Category Name"
                    />
                    <button onClick={saveNewCategory} className="btn-login  w-25 ">Save </button>
                    {
                        catPress ? (
                            catLoading ? (<Spinner animation="grow" variant="primary" />) : (<p>done</p>)
                        ) : (null)
                    }
                </div>
                <ToastContainer />
            </Col>
        </Row>

    )
}

export default AdminBrand