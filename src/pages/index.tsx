import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import ProductListing from '../components/product-listing'
import MainCarousel from '../components/Carousel/MainCarousel'
import ContentCarousel from '../components/Carousel/ContentCarousel'

export const query = graphql`
    query {
        shopifyCollection(handle: { eq: "shop-all" }) {
            products {
                ...ProductCard
            }
        }
    }
`
function IndexPage({ data }: any) {
    return (
        <Layout>
            <MainCarousel />
            <ContentCarousel />
            {/* <ProductListing products={data.shopifyCollection.products} /> */}
        </Layout>
    )
}
export default IndexPage
