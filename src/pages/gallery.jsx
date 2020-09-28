import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(
        filter: {
          extension: { eq: "jpg" }
          absolutePath: { regex: "/images/" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxHeight: 500, maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Gallery</h1>
          </div>
        </div>
        <div className="row">
          {gallery.nodes.map(image => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Img
                key={image.id}
                fluid={image.childImageSharp.fluid}
                alt="Gallery"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
