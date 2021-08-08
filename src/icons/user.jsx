import * as React from 'react'

function UserIcon(props) {
    return (
        <svg width={20} height={20} role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
            </g>
        </svg>
    )
}

export default UserIcon
