import React from 'react'
import Slider from 'react-slick'
import Item from './MainItem'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const MainCarousel = () => {
    let settings: any = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // // autoplay: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    }
    let contentfuls = [
        {
            image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page1.jpg?v=1626068480',
            mini: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page1_mini.jpg?v=1626068480',
            mainText: 'オープン記念 キャンペーン中',
            pageText: 'OPEN EVENT',
            description: '嬉しい特典が 盛りだくさん！',
            buttonText: '詳細はこちら',
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page2.jpg?v=1626068480',
            mini: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page2_mini.jpg?v=1626068480',
            mainText: 'YOUTH COLLECTION',
            pageText: 'New Collection',
            description: '好きなことをしているとき張る エネルギーで、今この瞬間を 楽しみたいあなたへ。',
            buttonText: '商品ページへ',
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page3.jpg?v=1626068480',
            mini: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page3_mini.jpg?v=1626068480',
            mainText: 'はじめまして、 FINGER SUITです。',
            pageText: 'FINGER SUIT',
            description: '素早く簡単に完璧なスタイルへ 導くマジカルタッチ。',
            buttonText: '私たちについて',
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page4.png?v=1626068480',
            mini: 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/Test_carousel_image_page4_mini.png?v=1626068480',
            mainText: '会員様だけ！ お得な会員特典',
            pageText: 'FINGER SUIT 会員限定特典',
            description: 'リムーバーキットが無料！ 会員登録でお買い物ポイントGET',
            buttonText: '詳細はこちら',
        },
    ]
    return (
        <Wrapper>
            <Slider {...settings}>
                {contentfuls.map((content: any, idx: any) => {
                    return <Item content={content} key={idx} />
                })}
            </Slider>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    max-width: 1920px;
    .slick-prev {
        &::before {
            display: none;
        }
    }
    .slick-next {
        &::before {
            display: none;
        }
    }
`
/*
function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <div
            style={{
                color: 'blue',
                position: 'absolute',
                top: '50%',
                zIndex: 2,
                display: 'none',
            }}
            onClick={onClick}
        >
            {'<'}
        </div>
    )
}
function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <div style={{ right: 0, color: 'red', position: 'absolute', top: '50%', display: 'none' }} onClick={onClick}>
            {'>'}
        </div>
    )
}
*/
export default MainCarousel
