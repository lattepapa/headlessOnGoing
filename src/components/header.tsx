import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StoreContext } from '../context/store-context'
import CartButton from './cart-button'
import SearchIcon from '../icons/search'
import UserIcon from '../icons/user'
import Toast from './toast'
import Navigation from './HeaderDesktop/Navigation'
import DropdownMenu from './HeaderDesktop/DropdownMenu'
import PromotionContent from './Promotion/PromotionContent'
import HeaderResponsive from './HeaderDesktop/HeaderResponsive'
import { header, container, logo as logoCss, searchButton, nav } from './header.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { AppBar, InputBase } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

/* AppBar material-ui styling 
    화면 768px 이하: 헤더 컴포넌트 display: none
*/
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            backgroundColor: 'white',
            position: 'sticky',
            paddingLeft: '40px',
            paddingRight: '40px',
            top: '44px',
            borderBottom: '1px solid rgba(0,0,0, 0.1)',
            boxShadow: 'none',
            width: '100%',
            ['@media (max-width:768px)']: {
                display: 'none',
            },
            ['@media screen and (min-width: 769px) and (max-width: 1024px)']: {
                paddingLeft: '0px',
                paddingRight: '0px',
            },
        },
    })
)

function Header() {
    const breakpoints = useBreakpoint()
    // AppBar style
    const classes = useStyles()
    // Cart update
    const { checkout, loading, didJustAddToCart }: any = React.useContext(StoreContext)
    const items = checkout ? checkout.lineItems : []
    const quantity = items.reduce((total: any, item: any) => {
        return total + item.quantity
    }, 0)
    // Logo src path
    const logoImage = 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/FINGER_SUIT_BI_____20210105.png?v=1618997870'

    // Dropdown menu props
    const [openDropdown, setOpenDropdown] = useState({
        headerShop: false,
        headerHowto: false,
        headerAbout: false,
        headerSpecials: false,
        headerStyleboard: false,
    })
    // Navigation의 각 Link html태그(<a>) 상태관리
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
    // 각 Navigation menu hover 시 드랍다운 메뉴 활성화 헨들러
    const handleDropdownMenuOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const htmlTag = event.currentTarget
        setAnchorEl(htmlTag)
        setOpenDropdown({ headerShop: false, headerHowto: false, headerAbout: false, headerSpecials: false, headerStyleboard: false, [`${htmlTag.id}`]: true })
    }
    const handleDropdownMenuClose = () => {
        setAnchorEl(null)
        setOpenDropdown({ headerShop: false, headerHowto: false, headerAbout: false, headerSpecials: false, headerStyleboard: false })
    }

    return (
        <React.Fragment>
            <PromotionContent handleDropdownMenuClose={handleDropdownMenuClose} />
            <AppBar color="transparent" className={classes.header}>
                {breakpoints.minMd ? (
                    <HeaderTag>
                        {/* Logo */}
                        <Link to="/" style={{ gridArea: 'logo' }}>
                            <StaticImage src={logoImage} alt="Fingersuit" layout="constrained" objectFit="contain" style={{ padding: '16px' }} quality={100} />
                        </Link>
                        {/* Header navigation */}
                        <Navigation handleDropdownMenuOpen={handleDropdownMenuOpen} handleDropdownMenuClose={handleDropdownMenuClose} />
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
                ) : (
                    <HeaderResponsive quantity={quantity} />
                )}
            </AppBar>
            {/* Cart update toast */}
            <Toast show={loading || didJustAddToCart}>
                {!didJustAddToCart ? (
                    'Updating…'
                ) : (
                    <>
                        Added to cart{' '}
                        <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z" fill="#fff" />
                            <path
                                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                                fill="#fff"
                            />
                            <path d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z" fill="#fff" />
                        </svg>
                    </>
                )}
            </Toast>
            {/* Dropdown menu */}
            <DropdownMenu
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                handleDropdownMenuOpen={handleDropdownMenuOpen}
                handleDropdownMenuClose={handleDropdownMenuClose}
            />
        </React.Fragment>
    )
}

export default React.memo(Header)

// Header style, Header order grid. 헤더의 요소 순서는 grid-template-areas 수정 필요
const HeaderTag = styled.div`
    display: grid;
    width: 100%;
    padding: 8px 12px;
    grid-template-columns: 120px 40px 1fr auto min-content min-content;
    grid-template-areas: 'logo nada navHeader searchBar userButton cartButton';
    align-items: center;
    margin: 0 auto;
    max-width: 1920px;
`

// const NavigationDiv = styled(Navigation)`
//     grid-area: navHeader;
// `howto/   /howtoapply  /removerkit /cuticleoil

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
    max-width: 320px;
    min-width: 160px;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    padding: 8px;
`

const Input = styled(InputBase)`
    padding-left: 8px;
`
