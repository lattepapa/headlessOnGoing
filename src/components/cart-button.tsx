import * as React from 'react'
import { Link } from 'gatsby'
import CartIcon from '../icons/cart'
import { cartButton, badge } from './cart-button.module.css'

function CartButton({ quantity }: any) {
    return (
        <Link aria-label={`Shopping Cart with ${quantity} items`} to="/cart" className={cartButton}>
            <CartIcon />
            {quantity > 0 && <div className={badge}>{quantity}</div>}
        </Link>
    )
}

export default CartButton
