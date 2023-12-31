import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from '../Brand/BrandCard'
import SubTile from '../../Utility/subTile/SubTile'
import Slider from 'react-slick'
import BrandHook from '../../Hook/BrandHook/BrandHook'
const HomeBrandFeature = () => {
    const [brand, loading, pageCount, paginationSelected] = BrandHook()
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
        <Container className='py-4 pb-5'>
            <SubTile title="Brand" btnName="more" path="/allbrand" />
            <Row className='mx-auto'>
                <Slider {...settings} className='m-0'>
                    {
                        loading === false ? (
                            brand ? (brand.data.slice(0, 10).map((brand) => {
                                return (
                                    <BrandCard key={brand._id} img={brand.image} title={brand.name} />
                                )
                            })) : (null)
                        ) : (null)
                    }

                </Slider>
            </Row>
        </Container>
    )
}
export default HomeBrandFeature