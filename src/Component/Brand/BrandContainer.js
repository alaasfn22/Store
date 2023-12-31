import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import Loading from '../../Utility/Loading/Loading'
import BrandHook from '../../Hook/BrandHook/BrandHook'
const BrandContainer = () => {
    const [brand, loading, pageCount, paginationSelected] = BrandHook()
    return (
        <Container>
            <Row className='g-2'>
                {
                    loading === false ? (
                        brand ? brand.data.map((brand) => {
                            return (
                                <Col key={brand._id} xs={6} sm={4} md={3}>
                                    <BrandCard img={brand.image} title={brand.name} />
                                </Col>
                            )
                        }) : (<h3>There are no brands</h3>)
                    ) : (<Loading />)
                }

            </Row>
        </Container>
    )
}

export default BrandContainer