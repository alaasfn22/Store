import React from 'react'
import BrandContainer from '../../Component/Brand/BrandContainer'
import Pagination from '../../Utility/Pagination/Pagination'

import BrandHook from '../../Hook/BrandHook/BrandHook'

const BrandPage = () => {
    const [brand, loading, pageCount, paginationSelected] = BrandHook()

    return (
        <div >

            <div className='pt-4' style={{ minHeight: '330px' }}>
                <BrandContainer />
                {
                    pageCount > 1 && <Pagination pageCount={pageCount} paginationSelected={paginationSelected} />
                }
            </div>

        </div>
    )
}

export default BrandPage