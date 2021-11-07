const Insta = require("scraper-instagram")
const InstaClient = new Insta()

const handler = async event => {
  console.log("here!")
  InstaClient.getProfilePosts("derekinthekitchen", "20")
    .then(posts => {
      console.log(posts)
      return posts
    })
    .catch(err => console.error(err))
}

module.exports = { handler }
