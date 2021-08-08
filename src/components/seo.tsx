import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

// interface Props {
//     title: string
//     description: string
//     pathname: string
//     image: string
//     children: any
// }
function Seo({ title = '', description = '', pathname = '', image = '', children = null }: any) {
    const location: any = useLocation()
    const {
        site: { siteMetadata },
    }: any = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteTitle
                    siteTitleDefault
                    siteUrl
                    hrefLang
                    siteDescription
                    siteImage
                    twitter
                }
            }
        }
    `)

    const { siteTitle, siteTitleDefault, siteUrl, siteDescription, siteImage, hrefLang, twitter }: any = siteMetadata

    const seo: any = {
        title: title || siteTitleDefault,
        description: description || siteDescription,
        url: pathname ? `${siteUrl}${pathname}` : location.href,
        image: `${siteUrl}${image || siteImage}`,
    }

    return (
        <Helmet title={title} defaultTitle={siteTitleDefault} titleTemplate={`%s | ${siteTitle}`}>
            <html lang={hrefLang} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={twitter} />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            {children}
        </Helmet>
    )
}

export default Seo
