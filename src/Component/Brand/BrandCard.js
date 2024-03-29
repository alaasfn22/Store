import React from 'react'
import './BrandStyle.css'
import { baseUrlImage } from '../../API/baseURLImage'

const BrandCard = ({ img, title }) => {
    return (

        <div className='mx-1 bg-white text-center  p-2'>
            <img src={baseUrlImage+img.slice(9)} alt={title} style={{ width: "100px", height: "75px" }} className='object-fit-contain  mx-auto' />
        </div>

    )
}

export default BrandCard