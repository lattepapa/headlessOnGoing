import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface Props {
    handleDropdownMenuOpen: React.MouseEventHandler<HTMLAnchorElement> | undefined
    handleDropdownMenuClose: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

function Navigation({ handleDropdownMenuClose, handleDropdownMenuOpen }: Props) {
    return (
        <NavTag>
            <ContentWrapper>
                <NavLink id="headerShop" key="Shop" to="/products/" onMouseEnter={handleDropdownMenuOpen}>
                    ショップ
                </NavLink>
                <NavLink id="headerHowto" key="Howto" to="/howto/" onMouseEnter={handleDropdownMenuOpen}>
                    使い方
                </NavLink>
                <NavLink id="headerAbout" key="About" to="/about/" onMouseEnter={handleDropdownMenuOpen}>
                    ABOUT
                </NavLink>
                <NavLink id="headerSpecials" key="Specials" to="/specials/" onMouseEnter={handleDropdownMenuOpen}>
                    キャンペーン
                </NavLink>
                <NavLink id="headerStyleboard" key="Styleboard" to="/styleboard/" onMouseEnter={handleDropdownMenuOpen}>
                    マガジン
                </NavLink>
            </ContentWrapper>
        </NavTag>
    )
}

export default Navigation

const NavTag = styled.nav`
    grid-area: navHeader;
    display: flex;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    font-weight: 500;
    justify-content: center;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 824px;
`

const NavLink = styled(Link)`
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    height: 48px;
    display: flex;
    color: black;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;

    &:hover {
        color: #f94c43;
        border-bottom: 2px solid black;
    }
    &:active {
        color: #78757a;
    }
`
