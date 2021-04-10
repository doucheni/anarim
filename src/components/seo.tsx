import React from "react"
import { Helmet } from "react-helmet"

type SEOProps = {
  title: string
  description: string
}

export const SEO = ({ title, description }: SEOProps) => (
  <Helmet
    htmlAttributes={{ lang: "fr" }}
    title={title}
    meta={[
      { name: "description", content: description },
      { name: "author", content: "Nicolas DOUCHET" },
      { name: "charset", content: "UTF-8" },
    ]}
  />
)
