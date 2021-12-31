const Insta = require("scraper-instagram")
const InstaClient = new Insta()

const handler = async event => {
  console.log("herfdsfse!")
  InstaClient.getProfilePosts("derekinthekitchen", "5")
    .then(posts => {
      console.log(posts)
      return {
        statusCode: 200,
        body: JSON.stringify(posts),
      }
    })
    .catch(e => {
      console.log("in err", e)
      return { statusCode: 500, body: e.toString() }
    })
}

module.exports = { handler }
