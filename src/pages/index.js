import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import staticNoise from "../images/static-noise-large.png"
import SEO from "../components/seo"
import VideoDisplay from "../components/video-display"

const IndexPage = () => {

  let names = new Map([
    [ 'Wayne & ', 'https://www.linkedin.com/in/wayne-barlow-47119815/'],
    [ 'Sandra', 'https://www.linkedin.com/in/sandra-bruening-121156a/']]);
  
    return (
      <Layout>
        <SEO title="Home" />

        <div>
        <VideoDisplay names={ names } image={staticNoise}>
        </VideoDisplay>
        </div>
      </Layout>
    )
  }

export default IndexPage
