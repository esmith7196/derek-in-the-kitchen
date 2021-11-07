import React, { useEffect } from "react"
import axios from "axios"

import Layout from "../components/layout"

const Gallery = () => {
  useEffect(() => {
    axios
      .get("/.netlify/functions/instagram-scraper")
      .then(res => {
        console.log("res: ", res)
        return res
      })
      .catch(e => console.log(e))
  }, [])

  return <Layout>Hi</Layout>
}

export default Gallery
