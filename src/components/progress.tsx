import * as React from 'react'
import { spinner } from './progress.module.css'

function Spinner(props: any) {
    return <span role="progressbar" className={spinner} {...props} />
}

export default Spinner
