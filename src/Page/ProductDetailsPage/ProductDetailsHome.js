import React from 'react'
import ProductDetailsContainer from '../../Component/Product/ProductDetailsContainer'
import RateContainer from '../../Component/Rate/RateContainer'
import { useParams } from 'react-router-dom'
import Product_Details_Hook from '../../Hook/ProductDetailsHook/Product_Details_Hook'
import ProductContainer from '../../Component/Product/ProductContainer'


const ProductDetailsHome = () => {
    const { id } = useParams()
    const [item, dataImages, imageCover, brand, category, prod, loading] = Product_Details_Hook(id)
    let items = []
    if (prod) {
        items = prod.data
    } else {
        items = []
    }
    return (
        <div>

            <div className='pt-4'>
                <ProductDetailsContainer />
                <RateContainer />
                <ProductContainer product={items} loading={loading} title="Products you may like" />

            </div>
        </div>
    )
}

export default ProductDetailsHome