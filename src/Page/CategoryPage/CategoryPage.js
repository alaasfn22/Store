import React from 'react'
import CategoryContainer from '../../Component/Category/CategoryContainer'
import Pagination from '../../Utility/Pagination/Pagination'
import CategoryHook from '../../Hook/CategoryHook/CategoryHook'
const CategoryPage = () => {
    const [category, loading, pageCount, paginationSelected] = CategoryHook()
    return (
        <div className='' >

            <div className='pt-4 ' style={{ minHeight: '330px' }}>
                <CategoryContainer category={category} loading={loading} />
                {pageCount > 1 && <Pagination pageCount={pageCount} paginationSelected={paginationSelected} />}
            </div>

        </div>
    )
}

export default CategoryPage