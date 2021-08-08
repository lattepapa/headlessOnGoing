import React from 'react'
import styled from 'styled-components'
import { Toolbar, IconButton, InputBase, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import UserIcon from '../../icons/user'
import { Link } from 'gatsby'
import CartButton from '../cart-button'
import MenuDrawer from './MenuDrawer'

interface Props {
    quantity: number
}

function HeaderResponsive({ quantity }: Props) {
    const [open, setOpen] = React.useState<boolean>(false)

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return
        }

        setOpen(open)
    }

    return (
        <React.Fragment>
            <HeaderTag>
                {/* Navigation mennu button */}
                <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </MenuButton>
                {/* Search */}
                <SearchBar>
                    <Input placeholder="Search..." />
                    <SearchButton to="/search">
                        <SearchIcon />
                    </SearchButton>
                </SearchBar>
                {/* Login/Userpage button link */}
                <UserButton to="/login">
                    <UserIcon />
                </UserButton>
                {/* Cart button link */}
                <CartButtonDiv quantity={quantity} />
            </HeaderTag>
            <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
        </React.Fragment>
    )
}

export default HeaderResponsive

const HeaderTag = styled.div`
    display: grid;
    width: 100%;
    padding: 8px 12px;
    grid-template-columns: min-content 40px 1fr 40px min-content min-content;
    grid-template-areas: 'menu nada searchBar noth userButton cartButton';
    align-items: center;
    margin: 0 auto;
    max-width: 1920px;
    @media screen and (max-width: 768px) and (min-width: 1025px) {
        display: none;
    }
`

const MenuButton = styled(IconButton)`
    grid-area: menu;
`

const SearchButton = styled(Link)`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    &:hover {
        color: #78757a;
    }
`

const SearchBar = styled.form`
    grid-area: searchBar;
    background-color: #e6e4e4;
    border-radius: 16px;
    height: 40px;
    min-width: 160px;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    padding: 8px;
`

const Input = styled(InputBase)`
    padding-left: 8px;
    flex-grow: 1;
`
const CartButtonDiv = styled(CartButton)`
    display: grid;
    place-items: center;
`

const UserButton = styled(Link)`
    grid-area: userButton;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: center;
    color: black;
    &:hover {
        color: #78757a;
    }
`
