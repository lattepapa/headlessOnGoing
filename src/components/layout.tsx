import React from 'react'
import { SkipNavContent, SkipNavLink } from './skip-nav'
import Header from './header'
import AppBarMobile from './HeaderMobile/AppBarMobile'
import Footer from './footer'
import Seo from './seo'
import styled from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

function Layout({ children }: any) {
    const breakpoints = useBreakpoint()

    return (
        <Wrapper>
            <Seo />
            <SkipNavLink />
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
            <AppBarMobile />
        </Wrapper>
    )
}

export default Layout

const Wrapper = styled.div``
const ContentWrapper = styled(SkipNavContent)`
    margin: 0 auto;
    max-width: 1920px;
`
