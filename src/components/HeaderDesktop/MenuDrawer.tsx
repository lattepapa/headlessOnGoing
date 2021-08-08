import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import CloseIcon from '@material-ui/icons/Close'

interface Props {
    open: boolean
    toggleDrawer: Function
}

const useStyles = makeStyles(() =>
    createStyles({
        menu: {
            borderBottom: '1px solid whitesmoke',
            paddingBottom: '4px',
        },
        subMenu: {
            marginLeft: '40px',
        },
        icon: {
            color: 'whitesmoke',
            borderBottom: '1px solid whitesmoke',
            paddingBottom: '4px',
            display: 'flex',
            justifyContent: 'flex-end',
        },
        closeButton: {
            color: 'whitesmoke',
        },
    })
)

function MenuDrawer({ open, toggleDrawer }: Props) {
    const classes = useStyles()
    const [openCollapse, setOpenCollapse] = useState<any>({
        drawerShop: false,
        drawerHowto: false,
        drawerAbout: false,
        drawerSpecials: false,
        drawerStyleboard: false,
    })
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

    const toggleCollapseMenu = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const htmlTag = event.currentTarget
        if (anchorEl === htmlTag) {
            setAnchorEl(null)
            setOpenCollapse({ drawerShop: false, drawerHowto: false, drawerAbout: false, drawerSpecials: false, drawerStyleboard: false })
        } else {
            setAnchorEl(htmlTag)
            setOpenCollapse({
                drawerShop: false,
                drawerHowto: false,
                drawerAbout: false,
                drawerSpecials: false,
                drawerStyleboard: false,
                [htmlTag.id]: true,
            })
        }
    }

    const menu = [
        {
            title: 'SHOP',
            subMenu: [
                { subTitle: 'SHOP ALL', path: '/products/' },
                { subTitle: 'NEW', path: '/products/' },
                { subTitle: 'BEST SELLERS', path: '/products' },
            ],
            id: 'drawerShop',
        },
        { title: 'HOW TO', id: 'drawerHowto', path: '/howto' },
        {
            title: 'ABOUT',
            subMenu: [
                { subTitle: 'ABOUT FINGER SUIT', path: '/about/' },
                { subTitle: 'BRAND STORY', path: '/about/' },
                { subTitle: 'FAQ', path: '/about/' },
            ],
            id: 'drawerAbout',
        },
        {
            title: 'SPECIALS',
            subMenu: [
                { subTitle: 'REWARDS', path: '/specials/' },
                { subTitle: 'PROMOTIONS', path: '/specials/' },
            ],
            id: 'drawerSpecials',
        },
        {
            title: 'STYLEBOARD',
            subMenu: [
                { subTitle: 'STYLEBOARD', path: '/stylboard/' },
                { subTitle: 'MY #FINGER SUIT', path: '/styleboard/' },
            ],
            id: 'drawerStyleboard',
        },
    ]

    const content = () => (
        <React.Fragment>
            <CloseButtonWrapper>
                <IconButton className={classes.closeButton} onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>
            </CloseButtonWrapper>
            <Menu>
                <List>
                    {menu.map((el, index) => (
                        <React.Fragment>
                            {el.subMenu ? (
                                <ListItem button key={el.title} id={el.id} onClick={toggleCollapseMenu}>
                                    <ListItemText className={classes.menu} primary={el.title} />
                                    {el.subMenu && (
                                        <ListItemIcon className={classes.icon}>{openCollapse[el.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}</ListItemIcon>
                                    )}
                                </ListItem>
                            ) : (
                                <Link to={el.path}>
                                    <ListItem button key={el.title} id={el.id}>
                                        <ListItemText className={classes.menu} primary={el.title} />
                                    </ListItem>
                                </Link>
                            )}
                            {el.subMenu && (
                                <Collapse in={openCollapse[el.id]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {el.subMenu.map((subEl) => (
                                            <Link to={subEl.path}>
                                                <ListItemText className={classes.subMenu} primary={subEl.subTitle} />
                                            </Link>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Menu>
        </React.Fragment>
    )
    return (
        <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
            {content()}
        </Drawer>
    )
}

export default MenuDrawer

const Menu = styled.div`
    width: 320px;
    height: 100%;
    background-color: black;
    color: whitesmoke;
    padding-top: 80px;
`

const CloseButtonWrapper = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: flex-end;
`

const CloseButton = styled(IconButton)`
    background-color: black;
    color: white;
    float: right;
    width: 100%;
`
