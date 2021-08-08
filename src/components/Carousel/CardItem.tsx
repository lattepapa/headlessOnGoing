import React from 'react'
import styled from 'styled-components'
export default function CardItem(props: any) {
    const { content } = props
    return (
        <Wrapper>
            <Card content={content.image}></Card>
        </Wrapper>
    )
}
//세부 아이템 스타일 조정 필요
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
`
const Card = styled.div<any>`
    width: 350px;
    height: 400px;
    background-image: url(${(props) => props.content});
    background-position: center;
    background-size: cover;
    margin-left: 10%;
`
