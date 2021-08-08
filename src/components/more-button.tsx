import * as React from 'react'
import { Link } from 'gatsby'
import { moreButton } from './more-button.module.css'

function MoreButton({ className, ...props }: any) {
    return <Link className={[className, moreButton].join(' ')} {...props} />
}

export default MoreButton
