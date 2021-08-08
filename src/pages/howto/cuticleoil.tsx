import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"

interface Props {
    className: string
}

function CuticleOil({ className }: Props) {
    return (
        <Layout className={[className].join(' ')}>
            <Title>HOW TO</Title>
            <SubTitle>キューティクルオイルプッシャーの使い方</SubTitle>
            <Body>
                <GridBackground>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-d53daea8--img01.png?v=1625642178"
                                alt="STEP 1. プッシャーの準備"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 1. プッシャーの準備</GridHeading>
                            <GridParagraph>ボタンを「ON」の状態にし、キューティクルオイルがプッシャーの先端ま で染みるようにします。</GridParagraph>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem style={{ textAlign: `left` }}>
                            <GridHeading>STEP 2. 10分待つ</GridHeading>
                            <GridParagraph>初めて使用する際は、プッシャーにオイルがしっかり染みこむま で約10~15分待ちます。</GridParagraph>
                        </GridItem>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-3daea87d--img02.png?v=1625642267"
                                alt="STEP 2. 10分待つ"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-9798a39b--img03.png?v=1625640506"
                                alt="STEP 3. キューティクル除去"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 3. キューティクル除去</GridHeading>
                            <GridParagraph>キューティクルラインに沿ってプッシャーで丸を描きながらキューティク ルを除去してください。</GridParagraph>
                            <GridParagraph style={{ color: `#7c7c7c` }}>※キューティクルを除去しすぎると、爪にダメージを与える可能性があり ます。</GridParagraph>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem style={{ textAlign: `left` }}>
                            <GridHeading>STEP 4. 拭き取る</GridHeading>
                            <GridParagraph>同封のプレップパッドで爪の表面のオイルをしっかり拭き取ります。</GridParagraph>
                        </GridItem>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-a87d4d1e--img04.png?v=1625642418"
                                alt="STEP 4. 拭き取る"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-7d4d1e76--img05.png?v=1625642493"
                                alt="STEP 5. ボタンを戻す"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 5. ボタンを戻す</GridHeading>
                            <GridParagraph>オイルが乾かないよう、使用後はボタンを「OFF」の状態に戻します。</GridParagraph>
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
    padding: 0 180px 0 180px;
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

const GridParagraph = styled.h3`
    font-size: 18px;
    line-height: 32px;
    @media (max-width: 376px) {
        font-size: 16px;
        line-height: 24px;
    }
`

export default CuticleOil