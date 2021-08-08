import React from 'react'
import DropdownContent from './DropdownContent/DropdownContent'
import styled from 'styled-components'
import { Menu, MenuItem, Popper, Fade, Paper } from '@material-ui/core'
import { Link } from 'gatsby'

interface DropdownState {
    headerShop: boolean
    headerHowto: boolean
    headerAbout: boolean
    headerSpecials: boolean
    headerStyleboard: boolean
}

interface Props {
    openDropdown: any
    setOpenDropdown: React.Dispatch<React.SetStateAction<DropdownState>>
    anchorEl: HTMLElement | null
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    handleDropdownMenuOpen: React.MouseEventHandler<HTMLDivElement> | undefined
    handleDropdownMenuClose: React.MouseEventHandler<HTMLDivElement> | undefined
}

function DropdownMenu({ openDropdown, setOpenDropdown, anchorEl, setAnchorEl, handleDropdownMenuOpen, handleDropdownMenuClose }: Props) {
    const open = Boolean(Object.keys(openDropdown).some((t) => openDropdown[t]))

    return (
        <React.Fragment>
            {open && !openDropdown.headerHowto ? (
                <DropdownWrapper onMouseLeave={handleDropdownMenuClose}>
                    <DropdownContent anchorEl={anchorEl} />
                </DropdownWrapper>
            ) : undefined}
        </React.Fragment>
    )
}

export default DropdownMenu

const DropdownWrapper = styled.div`
    width: 100%;
    background-color: white;
    height: 20vh;
    border-top: 2px solid black;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    animation: growDown 0.3s ease-in-out forwards;
    transform-origin: top center;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;

    @keyframes growDown {
        0% {
            transform: scaleY(0);
        }
        80% {
            transform: scaleY(1.1);
        }
        100% {
            transform: scaleY(1);
        }
    }
`
