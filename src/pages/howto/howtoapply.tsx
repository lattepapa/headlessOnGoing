import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"

interface Props {
    className: string
}

function HowToApply({ className }: Props) {
    return (
        <Layout className={[className].join(' ')}>
            <Title>HOW TO</Title>
            <SubTitle>FINGER SUIT  ネイルチップの付け方</SubTitle>
            <Body>
                <ATF>
                    <ATFGrid>
                        <Link to={`/howto/howtoapply`}>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-9aeb382e--preppad.png?v=1625624689"
                                alt="整える"
                                layout="constrained"
                                quality={100}
                            />
                            <Span>STEP1</Span>
                            <ATFSpanText>整える</ATFSpanText>
                        </Link>
                    </ATFGrid>
                    <ATFGrid>
                        <Link to={`/howto/howtoapply`}>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-344a1c51--apply.png?v=1625625364"
                                alt="付ける"
                                layout="constrained"
                                quality={100}
                            />
                            <Span>STEP2</Span>
                            <ATFSpanText>付ける</ATFSpanText>
                        </Link>
                    </ATFGrid>
                    <ATFGrid>
                        <Link to={`/howto/howtoapply`}>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-4a1c517b--press.png?v=1625625422"
                                alt="密着させる"
                                layout="constrained"
                                quality={100}
                            />
                            <Span>STEP3</Span>
                            <ATFSpanText>密着させる</ATFSpanText>
                        </Link>
                    </ATFGrid>
                    <ATFGrid>
                        <Link to={`/howto/howtoapply`}>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-1c517b5d--file.png?v=1625625480"
                                alt="ファイリング"
                                layout="constrained"
                                quality={100}
                            />
                            <Span>STEP4</Span>
                            <ATFSpanText>ファイリング</ATFSpanText>
                        </Link>
                    </ATFGrid>
                </ATF>

                {/* Step1 ~ Step4 세부내용 */}


                <GridBackground>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-1961f4cf--img01.png?v=1625625824"
                                alt="STEP 1. 自爪を整える"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 1. 自爪を整える</GridHeading>
                            <GridParagraph>- 石鹸で手をきれいに洗い、しっかり乾かします。</GridParagraph>
                            <GridParagraph>- プレップパッドで爪の油分・水分をふき取ってください。(このステップは必ず行ってください！)</GridParagraph>
                            <GridParagraph>- 同封のファイルで爪の表面を軽くファイリングしてください。しっかり密着します。</GridParagraph>
                            <GridParagraph style={{ color: `#7c7c7c` }}>※ 爪の表面が粗いと密着力が上がります。</GridParagraph>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem style={{ textAlign: `left` }}>
                            <GridSubHeading style={{ textDecoration: `underline` }}>ポイント</GridSubHeading>
                            <GridParagraph><b>FINGER SUIT キューティクルオイルプッシャーでキュ</b></GridParagraph>
                            <GridParagraph>ーティクルラインを整え、よりきれいな仕上がりに！</GridParagraph>
                            <ButtonSection style={{ textAlign: `center` }}>
                                <ButtonLeft>
                                    <Link to="/howto/">使用方法</Link>
                                </ButtonLeft>
                                <ButtonRight>
                                    <Link to="/cart" data-product-id="6719912739006">ADD TO CART</Link>
                                </ButtonRight>
                            </ButtonSection>
                        </GridItem>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-578c748f--oilpusher.png?v=1625627532"
                                alt="Step 1 の ポイント"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                    </GridContainer>
                </GridBackground>
                <GridBackground>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-32d7bf50--img02.png?v=1625628551"
                                alt="STEP 2. ネイルチップを付ける"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 2. ネイルチップを付ける</GridHeading>
                            <GridParagraph>- 自爪のサイズより小さめのチップを選びます。</GridParagraph>
                            <GridParagraph>- 透明フィルムをはがし、爪にチップを貼ります。</GridParagraph>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem style={{ textAlign: `left` }}>
                            <GridSubHeading style={{ textDecoration: `underline` }}>ポイント</GridSubHeading>
                            <GridParagraph>フィルム側をキューティクルラインに合わせます。</GridParagraph>
                            <GridParagraph>キューティクルとネイルチップの間に少し隙間をあけて 貼ってください。</GridParagraph>
                        </GridItem>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-4991f6f1--tip.png?v=1625628738"
                                alt="Step 2 の ポイント"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                    </GridContainer>
                </GridBackground>
                <GridBackground>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-2692f7be--img03.png?v=1625629072"
                                alt="STEP 3. しっかり密着させる"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridHeading>STEP 3. しっかり密着させる</GridHeading>
                            <GridParagraph>- チップを全体的にしっかりと押し、チップがキューティクルラインを覆 わないようにします。</GridParagraph>
                            <GridParagraph>- 付けた後の1~2時間は、乳液や水に触れないよう注意してください。</GridParagraph>
                        </GridItem>
                    </GridContainer>
                </GridBackground>
                <GridBackground>
                    <GridContainer>
                        <GridItem style={{ textAlign: `left` }}>
                            <GridHeading>STEP 4. ファイリング</GridHeading>
                            <GridParagraph>- 自爪が短い場合は、爪切りで余分な部分を切り落とします。</GridParagraph>
                            <GridParagraph>- ファイルをかけて、きれいに仕上げます。</GridParagraph>
                        </GridItem>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-36a9378b--img04.png?v=1625640462"
                                alt="STEP 4. ファイリング"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/6166/7254/t/3/assets/pf-da0fc734--prepremver.png?v=1625629666"
                                alt="Step 4 の ポイント"
                                layout="constrained"
                                quality={100}
                            />
                        </GridItem>
                        <GridItem>
                            <GridSubHeading style={{ textDecoration: `underline` }}>ポイント</GridSubHeading>
                            <GridParagraph>FINGER SUITのネイルケア用品で、さらに高い品質、耐久</GridParagraph>
                            <GridParagraph>性、 付け心地をご体験いただけます。</GridParagraph>
                            <ButtonSection style={{ textAlign: `center` }}>
                                <ButtonLeft>
                                    <Link to="/products">
                                        今すぐチェック
                                    </Link>
                                </ButtonLeft>
                            </ButtonSection>
                        </GridItem>
                    </GridContainer>
                </GridBackground>

            </Body>
        </Layout >
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

const ATF = styled.div`
    display: flex;
    margin: auto;
    width: 625px;
    text-align: center;
    position: relative;
    @media (max-width: 767px) {
        width: 345px;
    }
    @media (max-width: 376px) {
        width: 300px;
    }
`

const ATFGrid = styled.div`
    float: left;
    width: 25%;
    padding: 50px 20px;
    @media (max-width: 767px) {
        display: block;
        padding: 0 4px 0 4px;
    }
`

const Span = styled.div`
    letter-spacing: -1px;
    font-size: 20px;
    background: #000;
    color: #fff;
    padding: 5px 10px 2px;
    display: inline-block;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 0;
    font-family: alternate-gothic-atf;
    line-height: 1em;
    @media (max-width: 767px) {
        font-size: 16px;
        margin: 24px 10px 2px;
    }
    @media (max-width: 376px) {
        font-size: 12px;
        margin: 24px 10px 2px;
    }
`

const ATFSpanText = styled.div`
    letter-spacing: -1px;
    font-size: 20px;
    margin-bottom: 0;
    margin-top: 10px;
    letter-spacing: -1px;
    line-height: 20px;
    @media (max-width: 767px) {
        font-size: 16px;
        margin: 10px 0 0;
    }
    @media (max-width: 376px) {
        font-size: 12px;
        margin: 10px 0 0;
    }
`

// Step1 ~ Step4 세부내용 그리드영역

const GridBackground = styled.div`
    padding: 132px 40px 132px 40px;
    text-align: center;
    &:nth-child(odd) {
        background: #f8f8f8;
    }
    @media (max-width: 376px) {
        padding: 60px 16px 60px 12px;
    }
`

const GridContainer = styled.div`
    display: inline-block;
    margin: auto;
`

const GridItem = styled.div`
    display: inline-block;
    float: left;
    padding-left: 24px;
    padding-right: 24px;
    margin: 24px 0 24px 0;
    width: 49%;
    text-align: right;
    &:nth-child(even) {
        text-align: left;
    }
    @media (max-width: 1024px) {
        display: block;
        overflow: hidden;
        width: 100%;
        text-align: left;
        margin: 12px 0 12px;
    }
    @media (max-width: 376px) {
        display: block;
        overflow: hidden;
        width: 100%;
        text-align: left;
        padding: 0 0 0 0;
        margin: 12px 0 12px;
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

const ButtonLeft = styled.div`
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

const ButtonRight = styled.div`
    display: inline-block;
    border-style: solid;
    border-color: #000;
    border-width: 1px;
    margin-right: 10px;
    width: 50%;
    padding: 14px 36px;
    background: white;
    color: black;
    &:hover {
        transition: all .6s;
        background: black;
        color: white;
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

export default HowToApply