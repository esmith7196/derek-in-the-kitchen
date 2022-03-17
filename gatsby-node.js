const slugify = require("slugify")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProduct {
        edges {
          node {
            title
            tags
            slug {
              current
            }
            id
            defaultProductVariant {
              price
              taxable
              title
              images {
                asset {
                  url
                }
              }
            }
            variants {
              price
              taxable
              title
              images {
                asset {
                  url
                  size
                }
              }
            }
            categories {
              title
            }
            body {
              _rawEn
            }
            blurb
          }
        }
      }
    }
  `)
  result.data.allSanityProduct.edges.forEach(({ node }) => {
    createPage({
      path: `menu/${node.slug.current}`,
      component: path.resolve(`./src/templates/MenuItemTemplate.js`),
      context: {
        ...node,
      },
    })
  })
}
