import React from 'react'
import CategoryHeader from '../../Component/Category/CategoryHeader'
import SerachContent from '../../Component/Product/SerachContent'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../../Utility/Pagination/Pagination'
import SidBare from '../../Utility/SideBare/SidBare'
import ProductContainer from '../../Component/Product/ProductContainer'
import ProductSearchHook from '../../Hook/ProductHook/ProductSearchHook'
const SearchProductsPage = () => {
    const [items, loading, pagecount, paginationSelected, results, getSearch] = ProductSearchHook()
    return (
        <div className=''>

            <CategoryHeader />
            <Container className='py-4 bg-white  rounded-3'>
                {/* this sort by price */}
                <SerachContent results={results} myClick={getSearch} />
                <Row className='mx-auto'>
                    <Col xs={2} md={2} className='d-none d-md-block'>
                        {/* sidebar filter */}
                        <SidBare />
                    </Col>
                    <Col xs={12} md={10} className='p-0 m-0 ' >
                        {/* view products */}
                        <ProductContainer product={items} loading={loading} title="" btnName="" path="" />
                    </Col>
                </Row>
                {
                    pagecount > 1 && <Pagination pageCount={pagecount} paginationSelected={paginationSelected} />
                }
            </Container>

        </div>
    )
}

export default SearchProductsPage