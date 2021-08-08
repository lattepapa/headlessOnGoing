import React from 'react'
import styled from 'styled-components'
export default function MainItem(props: any) {
    const { content } = props
    return (
        <Wrapper>
            <MainImage src={content.image} />
            <SmallBox>
                <MainText>{content.mainText}</MainText>
                <MiniWrapper>
                    <MiniImage src={content.mini} />
                    <TextWrapper>
                        <p>{content.pageText}</p>
                        <p>{content.description}</p>
                        <button>{content.buttonText}</button>
                    </TextWrapper>
                </MiniWrapper>
            </SmallBox>
        </Wrapper>
    )
}
//세부 아이템 스타일 조정 필요
const Wrapper = styled.div`
    height: 90vh;
    @media (max-width: 1920px) {
        display: flex;
    }
    @media (max-width: 1024px) {
        height: 140vh;
        display: block;
    }
`
const MainImage = styled.div<any>`
    position: relative;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: 50% center;
    flex: 0.6;
    @media (max-width: 1920px) {
        flex: 0.6;
    }
    @media (max-width: 1024px) {
        height: 100vh;
    }
`
const SmallBox = styled.div`
    display: flex;
    position: relative;
    align-items: flex-end;
    flex: 0.4;
    @media (max-width: 1920px) {
        flex: 0.4;
    }
    @media (max-width: 1024px) {
        height: 40vh;
    }
`
const MainText = styled.div`
    position: absolute;
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 700;
    word-break: keep-all;
    letter-spacing: -4px;
    @media (max-width: 1920px) {
        top: 100px;
        width: 550px;
        font-size: 75px;
        line-height: 75px;
        margin-left: -20px;
    }
    @media (max-width: 1024px) {
        top: -40px;
        margin-left: 20px;
    }
`
const MiniWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    @media (max-width: 1920px) {
        height: 400px;
        margin-bottom: 40px;
        margin-left: 30px;
        min-width: 420px;
    }
    @media (max-width: 1024px) {
        height: 240px;
        margin-left: 20px;
    }
`
const TextWrapper = styled.div`
    margin-left: 25px;
    max-width: 250px;
    p {
        margin-bottom: 10px;
    }
    button {
        background-color: black;
        color: white;
        height: 32px;
        width: 140px;
    }
`
const MiniImage = styled.div<any>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: 50% center;
    width: 150px;
    height: 300px;
    @media (max-width: 1920px) {
        width: 150px;
        height: 300px;
    }
    @media (max-width: 1024px) {
        display: none;
    }
`
