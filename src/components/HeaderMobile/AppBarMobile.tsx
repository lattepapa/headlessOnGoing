import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import CartButton from '../cart-button'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import MoreIcon from '@material-ui/icons/MoreVert'
import { StoreContext } from '../../context/store-context'
import Toast from '../toast'
import UserIcon from '../../icons/user'
import { Link } from 'gatsby'
import MenuTopDrawer from './MenuTopDrawer'
import { StaticImage } from 'gatsby-plugin-image'
// import Promotion from '../Promotion/PromotionContent'

// AppBar material-ui styling
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            top: 'auto',
            bottom: 0,
            backgroundColor: 'white',
            ['@media (min-width: 769px)']: {
                display: 'none',
            },
        },
        toolBar: {
            color: 'black',
        },
        tools: {
            // flexGrow: 1,
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
        header: {
            top: 0,
            backgroundColor: 'white',
        },
        cartButton: {
            padding: 0,
        },
    })
)

function AppBarMobile() {
    // AppBar style
    const classes = useStyles()
    const logoImage = 'https://cdn.shopify.com/s/files/1/0553/5950/4574/files/FINGER_SUIT_BI_____20210105.png?v=1618997870'
    // Cart update
    const { checkout, loading, didJustAddToCart }: any = React.useContext(StoreContext)
    const items = checkout ? checkout.lineItems : []
    const quantity = items.reduce((total: any, item: any) => {
        return total + item.quantity
    }, 0)

    const [open, setOpen] = React.useState<boolean>(false)

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return
        }

        setOpen(open)
    }

    return (
        <React.Fragment>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.tools}>
                        <IconButton>
                            <UserButton to="/">
                                <HomeIcon />
                            </UserButton>
                        </IconButton>
                        <IconButton color="inherit">
                            <SearchButton to="/search">
                                <SearchIcon />
                            </SearchButton>
                        </IconButton>
                        {/* Login/Userpage button link */}
                        <IconButton>
                            <UserButton to="/login">
                                <UserIcon />
                            </UserButton>
                        </IconButton>
                        {/* Cart button link */}
                        <IconButton className={classes.cartButton}>
                            <CartButtonDiv quantity={quantity} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <MenuTopDrawer open={open} toggleDrawer={toggleDrawer} />
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
        </React.Fragment>
    )
}

export default AppBarMobile

const Container = styled.div``

const UserButton = styled(Link)`
    color: black;
`

const CartButtonDiv = styled(CartButton)`
    display: grid;
    place-items: center;
    color: black;
`

const SearchButton = styled(Link)`
    color: black;
`
