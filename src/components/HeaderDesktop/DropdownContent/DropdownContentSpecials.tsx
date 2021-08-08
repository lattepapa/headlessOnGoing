import React from 'react'
import { MenuLinks, ContentLink, MenuImgs } from './DropdownContentShop'

function DropdownContentSpecials() {
    return (
        <React.Fragment>
            <MenuLinks>
                <ContentLink to="/products/">会員制度</ContentLink>
                <ContentLink to="/products/">キャンペーン</ContentLink>
            </MenuLinks>
            <MenuImgs>Image</MenuImgs>
        </React.Fragment>
    )
}

export default DropdownContentSpecials
