import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"

interface Props {
    className: string
}

function HowTo({ className }: Props) {

    return (
        <Layout className={[className].join(' ')}>
            <Title>使い方</Title>
            <Body>
                <Section>
                    <SectionGrid>
                        <Link to={`/howto/howtoapply`}>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/5950/4574/t/7/assets/pf-14294c31--sumnail01Mo_500x.png?v=1620812746"
                                alt="HOW TO APPLY"
                                layout="constrained"
                                quality={100}
                            />
                            <SectionHeading>ネイルチップの使用方法</SectionHeading>
                        </Link>
                    </SectionGrid>
                    <SectionGrid>
                        <Link to={`/howto/removerkit`}>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/5950/4574/t/7/assets/pf-8a9ab03f--sumnail03Mo_500x.png?v=1621250172"
                                alt="REMOVER KIT"
                                layout="constrained"
                                quality={100}
                            />
                            <SectionHeading>リムーバーキットの使い方</SectionHeading>
                        </Link>
                    </SectionGrid>
                    <SectionGrid>
                        <Link to={`/howto/cuticleoil`}>
                            <StaticImage
                                src="https://cdn.shopify.com/s/files/1/0553/5950/4574/t/7/assets/pf-74e0c7db--cuticlenodimMo_500x.jpg?v=1621833055"
                                alt="CUTICLE OIL"
                                layout="constrained"
                                quality={100}
                            />
                            <SectionHeading>キューティクルオイルプッシャーの使い方</SectionHeading>
                        </Link>
                    </SectionGrid>
                </Section>
            </Body>
        </Layout>
    )
}

// styled-components

const Body = styled.div`
    display: block;
    margin-left: 80px;
    margin-right: 80px;
    @media (max-width: 767px) {
        margin: 0;
        width: 100%;
    }
`

const Title = styled.h1`
    font-size: 80px;
    margin-top: 60px;
    margin-bottom: 60px;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 40px;
    }
`

const Section = styled.div`
    margin: auto;
    text-align: center;
    position: relative;
`

const SectionHeading = styled.div`
    letter-spacing: -1px;
    font-size: 20px;
    margin-top: 12px;
    text-align: left;
    @media (max-width: 767px) {
        font-size: 16px;
        width: 100%;
        margin-top: 8px;
        margin-bottom: 32px;
    }
`

const SectionGrid = styled.div`
    display: inline-block;
    padding-left: 16px;
    padding-right: 16px;
    vertical-align: top;
    position: relative;
    width: 33.333%;
    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
    }
`

export default HowTo