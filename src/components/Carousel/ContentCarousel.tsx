import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CardItem from './CardItem'
import styled from 'styled-components'

const ContentCarousel = () => {
    let settings: any = {
        // dots: true,
        infinite: true,
        centerMode: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
    }
    let contentfuls = [
        { image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/products/FND-072_210621___03_900x.jpg?v=1625024993' },
        { image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/products/FND-064_210621___03_900x.jpg?v=1625024877' },
        { image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/products/FND-074_210621___02_900x.jpg?v=1625025021' },
        { image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/products/FND-070_210621___03_900x.jpg?v=1625024920' },
        { image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/products/FNP-059_210621___04_900x.jpg?v=1625025055' },
        { image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/products/FNB-200_210621___04_900x.jpg?v=1625024769' },
    ]
    return (
        <ContentWrapper>
            <Title>新商品</Title>
            <Wrapper>
                <div style={{ width: '100%', marginBottom: '3%' }}>
                    <Slider {...settings}>
                        {contentfuls.map((content: any, idx: any) => {
                            return <CardItem content={content} key={idx} />
                        })}
                    </Slider>
                </div>
            </Wrapper>
        </ContentWrapper>
    )
}
const ContentWrapper = styled.div`
    margin-left: 20px;
`
const Title = styled.div`
    display: flex;
    font-size: 35px;
    margin-top: 20px;
    @media (max-width: 1920px) {
        justify-content: center;
    }
    @media (max-width: 1024px) {
        justify-content: flex-start;
    }
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .slick-prev {
        left: 0;
        &::before {
            display: none;
        }
    }
    .slick-next {
        left: 0;
        &:before {
            display: none;
        }
    }
`
export default ContentCarousel
