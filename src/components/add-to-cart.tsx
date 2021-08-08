import * as React from 'react'
import { StoreContext } from '../context/store-context'
import { addToCart as addToCartStyle } from './add-to-cart.module.css'

function AddToCart({ variantId, quantity, available, ...props }: any) {
    const { addVariantToCart, loading } = React.useContext<any>(StoreContext)

    function addToCart(e: any) {
        e.preventDefault()
        addVariantToCart(variantId, quantity)
    }

    return (
        <button type="submit" className={addToCartStyle} onClick={addToCart} disabled={!available || loading} {...props}>
            {available ? 'Add to Cart' : 'Out of Stock'}
        </button>
    )
}

export default AddToCart
