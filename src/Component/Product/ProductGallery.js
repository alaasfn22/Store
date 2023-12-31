import React, { useEffect, useState } from 'react'
import './productStyles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import Product_Details_Hook from '../../Hook/ProductDetailsHook/Product_Details_Hook'
const ProductGallery = () => {
    const { id } = useParams()
    const [item, dataImages, imageCover, brand, category, prod] = Product_Details_Hook(id)

    const [updataMainImg, setUpdataMainImg] = useState(null)
    const [imgData, setImgData] = useState([])

    useEffect(() => {
        const imgFunction = async () => {
            await setImgData(dataImages)
        }
        imgFunction();
    }, [dataImages]);

    useEffect(() => {
        setUpdataMainImg(imageCover)
    }, [imageCover]);

    // hendel change img
    const handelChangImg = async (i) => {
        await setUpdataMainImg(dataImages[i])
    }

    return (

        <div className='gallery-container p-2  d-flex  flex-wrap flex-lg-nowrap  justify-content-center align-items-start    '>
            {/*  */}
            <div className='choice-img d-none d-lg-block  '>
                <ul className='d-flex flex-column mx-1 justify-content-center p-0 gap-1'>
                    {imgData ? imgData.map((img, index) => {
                        return (
                            <li key={index}>
                                <LazyLoadImage effect='blur' src={img} key={index} onMouseMove={() => handelChangImg(index)} alt={item.title}
                                    style={{ width: "100px", height: "100px" }}
                                    className={updataMainImg === img ? "active object-fit-contain img-size" : "img-size object-fit-contain"} />
                            </li>
                        )
                    }) : (null)}
                </ul>
                {/*  */}
            </div>
            <div className='main-imgBox overflow-hidden p-1 text-center  '>
                <LazyLoadImage effect='blur' src={updataMainImg || ""} alt={item.title} style={{ width: "100%", height: "400px" }}
                    className='object-fit-contain   img-fluid ' />
            </div>
            {/*  */}
            <div className='choice-img d-lg-none  '>
                <ul className='d-flex  mt-2 justify-content-center p-0 gap-1'>
                    {imgData ? imgData.map((img, index) => {
                        return (
                            <li key={index}>
                                <LazyLoadImage effect='blur' src={img} key={index} onMouseMove={() => handelChangImg(index)} alt={item.title}
                                    style={{ width: "100px", height: "100px" }}
                                    className={updataMainImg === img ? "active object-fit-contain img-size" : "img-size object-fit-contain"} />
                            </li>
                        )
                    }) : (null)}
                </ul>
            </div>

        </div>
    )
}

export default ProductGallery