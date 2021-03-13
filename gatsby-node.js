const slugify = require("slugify")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
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
              fluid {
                src
              }
            }
            prepTime
            servings
            steps {
              raw
            }
            alternativeIngredients {
              raw
            }
            featured
          }
        }
      }
    }
  `)
  result.data.allContentfulRecipe.edges.forEach(({ node }) => {
    createPage({
      path: `recipes/${slugify(node.title, { lower: true })}`,
      component: path.resolve(`./src/templates/recipe.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slugify(node.title, { lower: true }),
      },
    })
  })
}
