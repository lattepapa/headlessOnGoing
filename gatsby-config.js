require('dotenv').config()

const customQueries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    maxMd: '(max-width: 1024px)',
    l: '(max-width: 1536px)',
    minMd: '(min-width: 1025px)',
}
module.exports = {
    siteMetadata: {
        siteTitle: 'gatsby-starter-shopify',
        siteTitleDefault: 'gatsby-starter-shopify by @GatsbyJS',
        siteUrl: 'https://shopify-demo.gatsbyjs.com',
        hrefLang: 'en',
        siteDescription: 'A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.',
        siteImage: '/default-og-image.jpg',
        twitter: '@gatsbyjs',
    },
    flags: {
        FAST_DEV: true,
    },
    plugins: [
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: 'ShopifyAdmin',
                fieldName: 'admin',
                url: `https://fingersuit-japan.myshopify.com/admin/api/2021-07/graphql.json`,
                headers: {
                    'X-Shopify-Access-Token': process.env.SHOPIFY_SHOP_PASSWORD,
                },
                fetchOptions: {
                    method: 'POST',
                },
            },
        },
        {
            resolve: 'gatsby-source-shopify',
            options: {
                apiKey: process.env.SHOPIFY_API_KEY,
                password: process.env.SHOPIFY_SHOP_PASSWORD,
                storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
                shopifyConnections: ['collections'],
            },
        },
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: customQueries,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-material-ui',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        // Add your Google Analytics ID to the .env file to enable
        // Otherwise, this plugin can be removed
        process.env.GOOGLE_ANALYTICS_ID && {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
    ].filter(Boolean),
}
