import * as React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { wrap, increment, decrement, input } from './numeric-input.module.css'

// interface Props {
//     onIncrement: React.MouseEventHandler<HTMLButtonElement> | undefined
//     onDecrement: React.MouseEventHandler<HTMLButtonElement> | undefined
//     className: string
//     disabled: boolean
//     onChange: any
//     value: any
//     props: any
// }

function NumericInput({ onIncrement, onDecrement, className, disabled, ...props }: any) {
    return (
        <div className={wrap}>
            <input disabled={disabled} type="numeric" className={[input, className].join(' ')} {...props} />
            <button disabled={disabled} className={increment} aria-label="Increment" onClick={onIncrement}>
                <span>+</span>
                <MdArrowDropUp />
            </button>
            <button disabled={disabled} className={decrement} aria-label="Decrement" onClick={onDecrement}>
                <span>-</span>
                <MdArrowDropDown />
            </button>
        </div>
    )
}

export default NumericInput
