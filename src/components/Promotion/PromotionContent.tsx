import { MessageSharp } from '@material-ui/icons'
import React, { useState, useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'

interface Props {
    handleDropdownMenuClose: React.MouseEventHandler<HTMLDivElement> | undefined
}

function PromotionContent({ handleDropdownMenuClose }: Props) {
    const messageList = ['PROMOTION CONTENT 1', 'PROMOTION CONTENT 2', 'PROMOTION CONTENT 3', 'PROMOTION CONTENT 4']
    const [messageIndex, setMessageIndex] = useState(0)
    const messageCount = useMemo(() => messageList.length, [messageList])

    useEffect(() => {
        let timeout: any
        if (messageIndex === messageCount - 1) {
            timeout = setTimeout(() => setMessageIndex(0), 5000)
        } else if (messageIndex < messageCount - 1) {
            timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 5000)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [messageList, messageIndex])

    return (
        <Wrapper onMouseEnter={handleDropdownMenuClose}>
            <Content>{messageList[messageIndex]}</Content>
        </Wrapper>
    )
}

export default React.memo(PromotionContent)

const Wrapper = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    height: 44px;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
`
const Content = styled.p`
    color: white;
    letter-spacing: 2px;
    margin: 0 auto;
    max-width: 1920px;
    font-weight: 700;
`
