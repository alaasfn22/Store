import React from 'react'
import CategoryCard from '../Category/CategoryCard'
import { Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import SubTile from '../../Utility/subTile/SubTile';
import CategoryHook from '../../Hook/CategoryHook/CategoryHook';

const HomeFeatureCategory = () => {
    const [category, loading, pageCount, paginationSelected] = CategoryHook()
    var settings = {
        dots: false,
        className: "center",
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 6,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    className: "center",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    className: "center",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ],

    };
    return (
        <Container className='py-4'>
            <SubTile title="category" btnName="more" path="/allcategory" />
            <Row className='mx-auto'>
                <Slider {...settings} className='m-0 '>
                    {
                        loading === false ? (
                            category ? (category.data.slice(0, 10).map((cat) => {
                                return (
                                    <CategoryCard key={cat._id} title={cat.name} img={cat.image} />
                                )
                            })) : (<p>Not Found Category</p>)
                        ) : (null)
                    }



                </Slider>

            </Row>
        </Container>
    )
}

export default HomeFeatureCategory