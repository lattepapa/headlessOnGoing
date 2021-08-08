import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css, keyframes } from "styled-components"
import Layout from "../../components/layout"

interface Props {
    className: string
}

function About({ className }: Props) {

    return (
        <Layout className={[className].join(' ')}>
            <Body>
                <Pinned>STYLE IN PROGRESS</Pinned>
                <Section>
                    <ATF>
                        <StaticImage
                            src="https://cdn.shopify.com/s/files/1/0553/5950/4574/t/7/assets/pf-12f7f7cb--sectionBg08.png?v=1620901523"
                            alt="About"
                            layout="constrained"
                            quality={100}
                        />
                    </ATF>
                </Section>

                <Banner>STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT STYLE IN PROGRESS, FINGER SUIT
                </Banner>

                {/* Section */}

                <Section>
                    <ShortBar1 />
                    <Text1>FINGER SUITは日常の中、</Text1>
                    <Text1>簡単に楽しめる多様でお洒落な Press-on ネイルを提供します。</Text1>
                    <br />
                    <Text1>私たちは最新トレンドに合う色んなデザインを披露します。</Text1>
                    <Text1>FINGER SUITのトレンディで活用度満点の様々なコレクションは</Text1>
                    <Text1>あなたのユニークなルックスの完成を手伝います。</Text1>
                    <br />
                    <Pic1>
                        <StaticImage
                            src="https://cdn.shopify.com/s/files/1/0553/5950/4574/t/7/assets/pf-f7f7cbaa--sectionBg03.png?v=1620901587"
                            alt="FINGER SUITは日常の中"
                            layout="constrained"
                            quality={100}
                        />
                    </Pic1>
                    <ShortBar2 />
                    <Text2>ネイルは自分を表すシンプル＆完璧な方法です。</Text2>
                    <Text2>FINGER SUITはファッションとムードのプラスとなり、</Text2>
                    <Text2>あなたの日常に楽しさをプレゼントします。</Text2>
                    <br />
                    <Text2>FINGER SUITと一緒に「自分らしさ」を表現した</Text2>
                    <Text2>ファッションを完成してみませんか？</Text2>
                    <br />
                    <Text2>さあ、始めましょう！</Text2>
                    <Text2>FINGER SUIT のクォリティーの高いオリジナルデザインと</Text2>
                    <Text2>共にスタイルアップ！スーツアップ！</Text2>
                </Section>
                <Section>
                    <Text3></Text3>
                    <Pic2></Pic2>
                    <Pic3></Pic3>
                </Section>
                <Section>
                    <Text4></Text4>
                    <Pic4></Pic4>
                    <Pic5></Pic5>
                </Section>
                <Section>
                    <Pic6></Pic6>
                    <Pic7></Pic7>
                </Section>
                <Section>
                    <Text5></Text5>
                    <ButtonSection>
                        <Button>商品ページへ</Button>
                    </ButtonSection>
                </Section>
            </Body>
        </Layout>
    )
}

// styled-components

const Body = styled.div`
    display: block;
`

const Pinned = styled.span`
    position: fixed;
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    transform: rotate(-90deg);
    margin-top: 376px;
    @media (max-width: 1024px) {
        display: none;
    }
`

const ATF = styled.div`
    display: block;
    width: 60%;
    margin: -28px auto 200px auto;
    text-align: center;
    @media (max-width: 1024px) {
        width: 80%;
    }
    @media (max-width: 767px) {
        width: 80%;
        margin-top: 100px;
        margin-bottom: 60px;
    }
    @media (max-width: 376px) {
        width: 80%;
        margin-top: 80px;
        margin-bottom: 60px;
    }
`

// Rolling text banner (from right to left)

const Banner = styled.h3`
    font-size: 110px;
    white-space: nowrap;
    letter-spacing: -1px;
    display: block;
    overflow: hidden;
    position: absolute;
    margin-top: -52%;
    ${props => {
        if (props) {
            return css`animation: ${rollTo} 180s linear infinite;`;
        }
    }}
    @media (max-width: 1024px) {
        font-size: 88px;
        margin-top: -80%;
    }
    @media (max-width: 767px) {
        font-size: 64px;
        margin-top: -66%;
    }
    @media (max-width: 376px) {
        font-size: 48px;
    }
`

const rollTo = keyframes`
    from {transform: translate(0%);}
    to {transform: translate(-100%);}
`

// Section

const Section = styled.div`
    margin: 24px 168px 24px 168px;
    @media (max-width: 1024px) {
        margin: 24px 32px 24px 32px;
    }
`

const Pic1 = styled.div`
    text-align: right;
    margin: -60px -80px -620px 0;
    @media (max-width: 1460px) {
        margin-bottom: -620px;
        margin-left: 70%;
        width: 360px;
    }
    @media (max-width: 1024px) {
        display: block;
        text-align: center;
        margin: 84px auto 100px auto;
    } 
`
const Pic2 = styled.div``
const Pic3 = styled.div``
const Pic4 = styled.div``
const Pic5 = styled.div``
const Pic6 = styled.div``
const Pic7 = styled.div``

const ShortBar1 = styled.div`
    display: block;
    width: 40px;
    height: 3px;
    background: #000;
    font-size: 0px;
    padding-bottom: 0;
    padding-top: 0;
    margin-bottom: 38px;
    margin-top: 20px;
`

const ShortBar2 = styled.div`
    display: none;
    @media (max-width: 1024px) {
        display: block;
        width: 40px;
        height: 3px;
        background: #000;
        font-size: 0px;
        padding-bottom: 0;
        padding-top: 0;
        margin-bottom: 38px;
        margin-top: 20px;
    }
`

const Text1 = styled.div`
    font-size: 18px;
    @media (max-width: 767px) {
        font-size: 14px;
    }
    @media (max-width: 376px) {
        font-size: 12px;
    }
`
const Text2 = styled.div`
    font-size: 18px;
    @media (max-width: 767px) {
        font-size: 14px;
    }
    @media (max-width: 376px) {
        font-size: 12px;
    }
`
const Text3 = styled.div``
const Text4 = styled.div``
const Text5 = styled.div``

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

export default About