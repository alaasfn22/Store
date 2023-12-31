import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import Loading from '../../Utility/Loading/Loading'
const CategoryContainer = ({ category, loading }) => {
    return (
        <Container>
            <Row className='g-2'>
                {
                    loading === false ? (
                        category ? (
                            category.data.map((cat, index) => {
                                return (
                                    <Col key={index} xs={6} sm={4} md={3}>
                                        <CategoryCard title={cat.name} img={cat.image} />
                                    </Col>
                                )
                            })
                        ) : (<h3 className='text-center mt-5'>There are no categorys</h3>)
                    ) : (<Loading />)
                }

            </Row>
        </Container>
    )
}

export default CategoryContainer