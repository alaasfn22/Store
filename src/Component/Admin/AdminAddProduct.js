import Multiselect from 'multiselect-react-dropdown'
import React from 'react'
import add from '../../assets/image/add.png'
import { Col, Row } from 'react-bootstrap'
import MultiImageInput from 'react-multiple-image-input'
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify'
import Admin_Add_Products_Hook from '../../Hook/Admin/Admin_Add_Products_Hook'

const AdminAddProduct = () => {
    const [colors, showColor, name, description, priceAfter, quntity, images, options, handelInputName, handelInputDescription,
        handelInputPriceAfter, handelInputQuntity, handelChoiseBrand, handelChoiseCategory, categoryData, brandData,
        saveNewProduct, setImages, handelSelectColor, handelShowColorPicker, onRemove, onSelect, ColorRemove] = Admin_Add_Products_Hook()
    return (
        <Row className='m-auto px-2 py-3 g-2 text-center'>
            <ToastContainer />
            <Col sm="6" className=' p-md-3'>
                <div style={{ cursor: "pointer ", height: "" }} className='border text-center p-3 '>
                    <div className="text-form mb-2"> صور للمنتج</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}

                    />
                </div>
                <input
                    type="text"
                    value={name}
                    onChange={handelInputName}
                    className="user-input d-block w-100 mt-3 px-3"
                    placeholder="اسم المنتج"
                />

            </Col>
            <Col sm="6" className='p-md-3'>
                <textarea
                    className=" user-input  w-100  p-2 "
                    style={{ height: "120px" }}
                    rows="4"
                    value={description}
                    onChange={handelInputDescription}
                    cols="50"
                    placeholder="وصف المنتج"
                />
                <input
                    type="number"
                    value={priceAfter}
                    onChange={handelInputPriceAfter}
                    className="user-input  d-block mt-3 w-100 px-3"
                    placeholder="السعر "
                />
                <input
                    type="number"
                    value={quntity}
                    onChange={handelInputQuntity}
                    className="user-input  d-block mt-3 w-100 px-3"
                    placeholder="الكمية المتاحة"
                />
                <select

                    onChange={handelChoiseCategory}
                    className="user-input input-form-area w-100 mt-3 px-2 ">
                    <option value="0">التصنيف الرئيسي</option>
                    {
                        categoryData ? (categoryData.map((cat, index) => {
                            return (<option key={index} value={cat._id}>{cat.name}</option>)
                        })) : (null)
                    }
                </select>

                <select

                    onChange={handelChoiseBrand}
                    className="user-input w-100 input-form-area mt-3 px-2 ">
                    <option value="0">الماركة</option>
                    {
                        brandData ? (brandData.map((brn, index) => {
                            return (<option key={index} value={brn._id}>{brn.name}</option>)
                        })) : (null)
                    }

                </select>

                <Multiselect
                    className="mt-3 "
                    placeholder="التصنيف الفرعي"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    style={{ color: "red" }}
                />
                <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>

                <div className="mt-3 ">
                    <div className='d-flex flex-wrap'>
                        <img onClick={handelShowColorPicker} src={add} alt="" width="25px" height="30px" style={{ cursor: "pointer" }} className="flex-shrink-0" />
                        {
                            colors.length >= 1 ? colors.map((coloritem, index) => {
                                return (<div key={index} onClick={() => ColorRemove(coloritem)}
                                    className="color mx-1 border  mt-1"
                                    style={{ backgroundColor: `${coloritem}` }}>
                                </div>)
                            }) : null
                        }

                    </div>
                    <div className='mt-2'>
                        {
                            showColor && <CompactPicker onChangeComplete={handelSelectColor} />
                        }
                    </div>
                </div>
            </Col>
            <Row className=' mx-auto py-2 d-flex justify-content-center mt-4'>
                <button onClick={saveNewProduct} className="btn-login   ">Save </button>
            </Row>
        </Row>
    )
}

export default AdminAddProduct