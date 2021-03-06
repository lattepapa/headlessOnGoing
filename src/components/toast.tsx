import * as React from 'react'
import { toastWrapper, hiding, showing } from './toast.module.css'

function Toast({ show, duration = 1000, className, ...props }: any) {
    const [visible, setVisible] = React.useState<boolean>(show)
    const [animation, setAnimation] = React.useState<string>('')

    React.useEffect(() => {
        if (show) {
            setVisible(true)
        }
        const timeout = setTimeout(() => {
            setAnimation('')
            setVisible(show)
        }, duration)
        setAnimation(show ? showing : hiding)
        return () => clearTimeout(timeout)
    }, [show, duration])

    return visible ? <div className={[toastWrapper, animation, className].join(' ')} {...props} /> : null
}

export default Toast
