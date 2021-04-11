const slugify = require("slugify")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulRecipe {
        edges {
          node {
            title
            shortDescription {
              shortDescription
            }
            cookTime
            createdAt(formatString: "MMMM")
            fullDescription {
              raw
            }
            ingredient {
              ingredient
              amount
              measurement
            }
            mainImage {
              fluid(maxWidth: 1900, quality: 95) {
                srcWebp
              }
            }
            extraImages {
              fluid(maxWidth: 1500, quality: 95) {
                src
              }
              description
              title
            }
            prepTime
            servings
            steps {
              raw
            }
            featured
          }
        }
      }
    }
  `)
  console.log("Result.data: ", result)
  result.data.allContentfulRecipe.edges.forEach(({ node }) => {
    createPage({
      path: `recipes/${slugify(node.title, { lower: true })}`,
      component: path.resolve(`./src/templates/recipe.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        ...node,
      },
    })
  })
}
