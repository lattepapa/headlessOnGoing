import React from 'react'
import { MenuLinks, ContentLink, MenuImgs } from './DropdownContentShop'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function DropdownContentAbout(props: any) {
    console.log(props)
    // const { src } = data.admin.files.edges[1].node.image
    return (
        <React.Fragment>
            <MenuLinks>
                <ContentLink to="/products/">ブランドストーリー</ContentLink>
                <ContentLink to="/products/">FINGER SUITについて</ContentLink>
                <ContentLink to="/products/">よくある質問</ContentLink>
                <ContentLink to="/products/">特商法に基づく表記</ContentLink>
            </MenuLinks>
            <MenuImgs>{/* <StaticImage alt={'aboutImg'} src={src} />{' '} */}</MenuImgs>
        </React.Fragment>
    )
}

export default DropdownContentAbout

export const query = graphql`
    query MyQuery($query: String = "646x205__210726___2") {
        admin {
            files(query: $query, first: 20) {
                edges {
                    node {
                        ... on ShopifyAdmin_MediaImage {
                            id
                            image {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`
