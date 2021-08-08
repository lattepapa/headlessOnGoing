import * as React from 'react'
import ProductCard from './product-card'
import { listingContainerStyle } from './product-listing.module.css'

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
function ProductListing({ products }: any) {
    return (
        <div className={listingContainerStyle}>
            {products.map((p: any, index: number) => (
                <ProductCard product={p} key={p.id} eager={index === 0} />
            ))}
        </div>
    )
}

export default ProductListing
