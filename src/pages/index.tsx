import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { IndexQuery } from "../../graphql-types"

export interface GraphQLProps {
	data: IndexQuery;
}

const Index: React.FC<GraphQLProps> = ({data}) => {
	const { backgroundImage, title, subheading } = data.markdownRemark.frontmatter;

	return (
	  <Layout>
	    <SEO title="Home" />
			<div
				className="full-width-image margin-top-0"
				style={{
					backgroundImage: `linear-gradient( #111a, #111a ), url(${
						!!backgroundImage.childImageSharp ? backgroundImage.childImageSharp.fluid.src : backgroundImage
					})`,
					backgroundPosition: `top left`,
					backgroundAttachment: `fixed`,
				}}
			>
				<div
	        style={{
	          display: 'flex',
	          height: '150px',
	          lineHeight: '1',
	          justifyContent: 'space-around',
	          alignItems: 'left',
	          flexDirection: 'column',
	        }}
	      >
	        <h1
	          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
	          style={{
	            boxShadow:
	              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
	            backgroundColor: 'rgb(255, 68, 0)',
	            color: 'white',
	            lineHeight: '1',
	            padding: '0.25em',
	          }}
	        >
	          {title}
	        </h1>
	        <h3
	          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
	          style={{
	            boxShadow:
	              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
	            backgroundColor: 'rgb(255, 68, 0)',
	            color: 'white',
	            lineHeight: '1',
	            padding: '0.25em',
	          }}
	        >
	          {subheading}
	        </h3>
	      </div>
	    </div>

	    <h1>Hi people</h1>
	    <p>Welcome to your new Gatsby site.{data.markdownRemark.frontmatter.title}</p>
	    <p>Now go build something great.</p>
	    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
	      <Image src="gatsby-astronaut.png" maxWidth="300"/>
	    </div>
	    <Link to="/page-2/">Go to page 2</Link>
	  </Layout>
	)
}

export default Index

export const query = graphql`
query Index {
  markdownRemark(frontmatter: {pageTemplate: {eq: "index"}, blockName: {eq: "header"}}) {
    frontmatter {
			title
			subheading
      backgroundImage {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
