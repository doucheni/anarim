import React from "react"
import { SEO } from "../components/seo"
import ThemeProvider from "@material-ui/core/styles/ThemeProvider"
import theme from "../components/theme"
import { Header } from "../components/molecules/header"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const { site, allDatoCmsEnTete } = data

  return (
    <ThemeProvider theme={theme}>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <Header
        image={
          <GatsbyImage
            image={allDatoCmsEnTete.nodes[0].logo.gatsbyImageData}
            alt={allDatoCmsEnTete.nodes[0].logo.title}
          />
        }
        links={allDatoCmsEnTete.nodes[0].lien.map((item: any) => ({
          label: item.titre,
          to: item.slug,
        }))}
      />
    </ThemeProvider>
  )
}

export const query = graphql`
  query headerquery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allDatoCmsEnTete {
      nodes {
        logo {
          gatsbyImageData(
            forceBlurhash: false
            placeholder: BLURRED
            width: 350
          )
          title
        }
        lien {
          titre
          slug
        }
      }
    }
  }
`

export default IndexPage
