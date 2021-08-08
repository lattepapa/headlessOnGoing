import { graphql, useStaticQuery, Link } from 'gatsby'
import * as React from 'react'
import slugify from '@sindresorhus/slugify'
import { navStyle, navLink, activeLink } from './navigation.module.css'

interface Props {
    className: string
}

function Navigation({ className }: any) {
    const {
        allShopifyProduct: { productTypes },
    } = useStaticQuery(graphql`
        query {
            allShopifyProduct {
                productTypes: distinct(field: productType)
            }
        }
    `)

    return (
        <nav className={[navStyle, className].join(' ')}>
            <Link key="All" className={navLink} to="/products/" activeClassName={activeLink}>
                All products
            </Link>
            {productTypes.map((name: any) => (
                <Link key={name} className={navLink} to={`/products/${slugify(name)}`} activeClassName={activeLink}>
                    {name}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation
