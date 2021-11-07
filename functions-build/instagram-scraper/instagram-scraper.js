const Insta = require("scraper-instagram")
const InstaClient = new Insta()

const handler = async event => {
  console.log("here!")
  InstaClient.getProfilePosts("derekinthekitchen", "20")
    .then(posts => {
      console.log(posts)
      return {
        statusCode: 200,
        body: JSON.stringify(posts),
      }
    })
    .catch(e => {
      return { statusCode: 500, body: e.toString() }
    })
}

module.exports = { handler }
