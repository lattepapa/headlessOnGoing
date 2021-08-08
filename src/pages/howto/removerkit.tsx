import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"

interface Props {
    className: string
}

function RemoverKit({ className }: Props) {
    return (
        <Layout className={[className].join(' ')}>
            <Title>HOW TO</Title>
            <SubTitle>FINGER SUITリムーバーキットの使い方</SubTitle>
            <Body>
                <GridBackground>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-4c829798--img01.png?v=1625640370"
                                alt="STEP 1. リムーバーを垂らす"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 1. リムーバーを垂らす</GridHeading>
                            <GridParagraph>- ネイルチップの端にリムーバーを1～2滴垂らしてください。</GridParagraph>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem style={{ width: `460px`, textAlign: `left` }}>
                            <GridSubHeading style={{ textDecoration: `underline` }}>ポイント</GridSubHeading>
                            <GridParagraph>FINGER SUIT リムーバーキットを使用すると、爪への ダメージを抑えることができます。</GridParagraph>
                            <GridParagraph style={{ color: `#7c7c7c` }}>※ 一般的なリムーバーより刺激を与えずにやさしく外 すことができます。</GridParagraph>
                            <ButtonSection style={{ textAlign: `center` }}>
                                <Button>
                                    <Link to="/cart" data-product-id="6694666305726">ADD TO CART</Link>
                                </Button>
                            </ButtonSection>
                        </GridItem>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-829798a3--img02.png?v=1625640484"
                                alt="Step 1 の ポイント"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-9798a39b--img03.png?v=1625640506"
                                alt="STEP 2. チップを外す"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 2. チップを外す</GridHeading>
                            <GridParagraph>- ウッドスティックを自爪とチップの間に挟み、リムーバーを適量流し込 んでください。</GridParagraph>
                            <GridParagraph>- チップをゆっくり持ち上げて外してください。</GridParagraph>
                            <br />
                            <GridSubHeading style={{ textDecoration: `underline` }}>ポイント</GridSubHeading>
                            <GridParagraph>チップを外した後、爪に汚れが残る場合はウェットティッシュにリムーバ ーを垂らして汚れを拭き取ってください。</GridParagraph>
                        </GridItem>
                    </GridContainer>
                </GridBackground>
            </Body>
        </Layout>
    )
}

// styled-components
// ATF 영역

const Body = styled.div`
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    @media (max-width: 767px) {
        margin: 0;
        width: 100%;
    }
`

const Title = styled.h1`
    font-size: 80px;
    font-family: alternate-gothic-atf;
    letter-spacing: -1px;
    text-align: center;
    margin-top: 40px;
    @media (max-width: 767px) {
        margin-top: 24px;
        font-size: 60px;
    }
    @media (max-width: 376px) {
        margin-top: 24px;
        font-size: 40px;
    }
`

const SubTitle = styled.h3`
    font-size: 25px;
    text-align: center;
    letter-spacing: -1px;
    @media (max-width: 767px) {
        width: 100%;
        margin-top: 0;
        margin-bottom: 32px;
    }
    @media (max-width: 376px) {
        margin-top: 8px;
        font-size: 20px;
    }
`
// Step1, Step2 세부내용 그리드영역

const GridBackground = styled.div`
    padding: 132px 40px 132px 40px;
    text-align: center;
    }
    @media (max-width: 376px) {
        padding: 60px 16px 60px 12px;
    }
`

const GridContainer = styled.div`
    display: inline-block;
    margin: auto;
    padding: 0 120px 0 120px;
    @media (max-width: 1024px) {
        padding: 0;
    }
`

const GridItem = styled.div`
    display: inline-block;
    float: left;
    padding-left: 24px;
    padding-right: 24px;
    margin: 24px 0 24px 0;
    width: 50%;
    text-align: right;
    &:nth-child(even) {
        text-align: left;
    }
    @media (max-width: 1024px) {
        display: block;
        overflow: hidden;
        width: 100%;
        text-align: left;
    }
    @media (max-width: 376px) {
        display: block;
        overflow: hidden;
        width: 100%;
        text-align: left;
        padding: 0 0 0 0;
    }
`

const GridHeading = styled.h2`
    font-size: 40px;
    letter-spacing: -1px;
    line-height: 72px;
    @media (max-width: 376px) {
        font-size: 28px;
        line-height: 40px;
    }
`

const GridSubHeading = styled.h2`
    font-size: 28px;
    letter-spacing: -1px;
    line-height: 72px;
    @media (max-width: 376px) {
        font-size: 24px;
        line-height: 40px;
    }
`

const GridParagraph = styled.h3`
    font-size: 18px;
    line-height: 32px;
    @media (max-width: 376px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const ButtonSection = styled.div`
    display: flex;
    margin-top: 30px;
`

const Button = styled.div`
    display: inline-block;
    border-style: solid;
    border-color: #000;
    border-width: 1px;
    margin-right: 10px;
    width: 50%;
    padding: 14px 36px;
    background: black;
    color: white;
    &:hover {
        transition: all .6s;
        background: white;
        color: black;
    }
    @media (max-width: 512px) {
        font-size: 14px;
        padding: 14px 0;
    }
    @media (max-width: 368px) {
        font-size: 12px;
        padding: 10px 0;
    }
`

export default RemoverKit