import React from 'react'
import Landing from '../../Component/Home/Landing'
import HomeFeatureCategory from '../../Component/Home/HomeFeatureCategory'
import HomeBanar from '../../Component/Home/HomeBanar'
import HomeBrandFeature from '../../Component/Home/HomeBrandFeature'

import HoomProductHook from '../../Hook/HomeHook/HoomProductHook'
import ProductContainer from '../../Component/Product/ProductContainer'

const Home = () => {
    const [items, loading] = HoomProductHook()
    return (
        <div>

            <Landing />
            <HomeFeatureCategory />
            <ProductContainer product={items} loading={loading} title="Products" btnName="more" path="/allproducts" />
            <HomeBanar />
            <ProductContainer product={items} loading={loading} title="best seller" btnName="more" path="/allproducts" />
            <HomeBrandFeature />

        </div>

    )
}

export default Home