import React from 'react'
import { Container, } from 'react-bootstrap'
import CategoryHook from '../../Hook/CategoryHook/CategoryHook'

const CategoryHeader = () => {
    const [category, loading, pageCount, paginationSelected] = CategoryHook()
    return (
        <Container className='py-2 my-2 rounded-3 bg-white'>
            <div className='cat-header d-flex flex-row flex-wrap '>
                <p className='cat-header-name my-0 mx-1'>All</p>
                {/* {
                    loading === false ? (
                        category.data ? category.data.map((cat) => {
                            return (<p key={cat._id} className='cat-header-name my-0 mx-1'>{cat.name}</p>)
                        }) : (null)
                    ) : (null)
                } */}

                <p className='cat-header-name my-0 mx-1'>tv</p>
                <p className='cat-header-name my-0 mx-1'>clothes</p>
                <p className='cat-header-name my-0 mx-1'>tv</p>
                <p className='cat-header-name my-0 mx-1'>clothes</p>
                <p className='cat-header-name my-0 mx-1'>More...</p>
            </div>
        </Container>

    )
}

export default CategoryHeader