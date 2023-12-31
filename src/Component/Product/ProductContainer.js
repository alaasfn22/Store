import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import SubTile from '../../Utility/subTile/SubTile'
import Loading from '../../Utility/Loading/Loading'


const ProductContainer = ({ product, loading, title, btnName, path }) => {

    return (
        <Container className='py-2'>
            {product && <SubTile title={title} btnName={btnName} path={path} />}
            <Row className=' gy-1 d-flex justify-content-start mx-auto   '>
                {
                    loading === false ? (
                        product ? (product.map((product) => {
                            return (
                                <ProductCard key={product._id} item={product} />
                            )
                        })) : (<h3 className='fs-3 text-bg-primary p-2 mt-4 text-center'>There are no products</h3>)
                    ) : (<Loading />)
                }
            </Row>
        </Container>
    )
}

export default ProductContainer