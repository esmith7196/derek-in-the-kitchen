var ig = require("instagram-scraping")

const handler = async event => {
  console.log("here!")
  ig.scrapeUserPage("derekinthekitchen")
    .then(result => {
      console.dir("IG resultdsfs", result)
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      }
    })
    .catch(e => {
      console.log("e", e)
      return { statusCode: 500, body: e.toString() }
    })
}

module.exports = { handler }
