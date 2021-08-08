import React from 'react'
import { MenuLinks, ContentLink, MenuImgs } from './DropdownContentShop'

function DropdownContentStyleboard() {
    return (
        <React.Fragment>
            <MenuLinks>
                <ContentLink to="/products/">マガジン</ContentLink>
                <ContentLink to="/products/">My #FINGER SUIT</ContentLink>
            </MenuLinks>
            <MenuImgs>Image</MenuImgs>
        </React.Fragment>
    )
}

export default DropdownContentStyleboard
