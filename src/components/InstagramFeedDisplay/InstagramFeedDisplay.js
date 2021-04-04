import React, { useEffect, useState } from "react"

const InstagramFeedDisplay = () => {
  const [hashtags, setHashtags] = useState({
    data: {},
    isLoading: true,
    errorMessage: "",
  })
  useEffect(() => {
    // const getData = async () => {
    //   //   const data = await fetch(`/netlify/functions/fetchHashTags`)
    //   try {
    //     const response = await fetch(`/.netlify/functions/fetchHashTags`)
    //     const body = await response.json()
    //     console.log("awaiting body", body)

    //     console.log(body)
    //     setHashtags(body)
    //   } catch (e) {
    //     console.error("There was an issue getting : ", e)
    //   }
    // }
    // getData()

    fetch("/.netlify/functions/fetchHashTags")
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
