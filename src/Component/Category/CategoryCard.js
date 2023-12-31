import React from 'react'
import './CategoryStyles.css'
const CategoryCard = ({ title, img, id }) => {
    return (
        <div className='cat-content mx-1 p-1'>
            <div className='cat-card w-100 h-100  py-2 d-flex justify-content-between  align-items-center  '>
                <div className='cat-img p-1 me-2 '>
                    <img src={img} style={{ width: "80px" }} alt='' className='img-fluid object-fit-cover' />
                </div>
                <p className='cat-name  text-end w-75 text-capitalize p-1 m-0 '>{title}</p>
            </div>
        </div>
    )
}

export default CategoryCard