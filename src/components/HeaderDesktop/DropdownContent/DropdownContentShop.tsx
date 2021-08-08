import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

function DropdownContentShop() {
    return (
        <React.Fragment>
            <MenuLinks>
                <ContentLink to="/products/">商品一覧</ContentLink>
                <ContentLink to="/products/">ベストセラー</ContentLink>
                <ContentLink to="/products/">新商品</ContentLink>
            </MenuLinks>
            <MenuImgs>Image</MenuImgs>
        </React.Fragment>
    )
}

export default DropdownContentShop

export const MenuLinks = styled.div`
    display: flex;
    align-items: center;
    grid-area: link;
    justify-content: space-around;
    flex-direction: column;
`

export const ContentLink = styled(Link)`
    font-size: 16px;
    margin-bottom: 3px;

    &:hover {
        color: #78757a;
        border-bottom: 2px solid #78757a;
        padding: 0;
        margin-bottom: 1px;
    }
    &:active {
        color: #78757a;
    }
`

export const MenuImgs = styled.div`
    grid-area: img;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`
