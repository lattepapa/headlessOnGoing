import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton: React.FC<any> = (props: any) => {
    const { name, icon, color } = props
    return (
        <Wrapper color={color} onClick={() => console.log('onClick')}>
            <a>
                <span>Sign up with {name}</span>
                <div>
                    <FontAwesomeIcon icon={icon} />
                </div>
            </a>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.color};
    margin-top: 8px;
    cursor: pointer;
    &:hover {
        opacity: 0.65;
    }
    a {
        text-align: left;
        padding-left: 20px;
        height: 40px;
        display: block;
        background-size: 40px 40px;
        color: white;
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 14px;
        margin-bottom: 8px;
        -webkit-font-smoothing: antialiased;
        line-height: 40px;
    }
    span {
        color: white;
        text-align: left;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;
        height: 40px;
        line-height: 40px;
        width: 40px;
        font-size: 24px;
        background-color: rgba(255, 255, 255, 0.1);
    }
`
export default SocialButton
