import React, { useEffect, useState } from "react"

const InstagramFeedDisplay = () => {
  const [hashtags, setHashtags] = useState({
    data: {},
    isLoading: true,
    errorMessage: "",
  })
  useEffect(() => {
    fetch("/.netlify/functions/hell-world")
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log("e", e)
      })
  }, [])
  return <div>feed display</div>
}

export default InstagramFeedDisplay
