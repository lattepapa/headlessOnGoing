import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Menu, MenuItem, Popper, Fade, Paper } from '@material-ui/core'
import ShopMenu from './DropdownContentShop'
import AboutMenu from './DropdownContentAbout'
import SpecialsMenu from './DropdownContentSpecials'
import StyleboardMenu from './DropdownContentStylboard'

interface Props {
    anchorEl?: any
}

function DropdownContent({ anchorEl }: Props) {
    return (
        <Wrapper>
            {(anchorEl.id === 'headerShop' && <ShopMenu />) ||
                (anchorEl.id === 'headerAbout' && <AboutMenu />) ||
                (anchorEl.id === 'headerSpecials' && <SpecialsMenu />) ||
                (anchorEl.id === 'headerStyleboard' && <StyleboardMenu />)}
        </Wrapper>
    )
}

export default DropdownContent

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 40px 2fr;
    grid-template-areas: 'link nada img';
    width: 824px;
`
