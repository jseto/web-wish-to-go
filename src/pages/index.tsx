import * as React from "react"
import { graphql, Link } from "gatsby"
import {Layout} from "../components/layout"
import { SEO } from "../components/seo"
import { IndexQuery } from "../../graphql-types"
import logo from '../images/logo.svg';
import { HTMLContent } from "../components/content"

export interface GraphQLProps {
	data: IndexQuery;
}

const Index: React.FC<GraphQLProps> = ({data}) => {
	const { backgroundImage, title, heading, subheading } = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark;

	const description = 'description';
	const intro = 'intro';
	const BlogRoll = ()=><div>BlogRoll</div>
	const Features = ()=><div>Features</div>

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
	          {heading}
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

			<section className="section section--gradient">
	      <div className="container">
	        <div className="section">
	          <div className="columns">
	            <div className="column is-10 is-offset-1">
	              <div className="content">
	                <div className="content">
	                  <div className="tile">
											<img src={logo} alt="Wish to go" style={{ width: '200px' }} />
											<HTMLContent className="content" content={html} />
	                  </div>
	                </div>
	                <div className="columns">
	                  <div className="column is-12">
	                    <h3 className="has-text-weight-semibold is-size-2">
	                      {heading}
	                    </h3>
	                    <p>{description}</p>
	                  </div>
	                </div>
	                <Features />
	                <div className="columns">
	                  <div className="column is-12 has-text-centered">
	                    <Link className="btn" to="/products">
	                      See all products
	                    </Link>
	                  </div>
	                </div>
	                <div className="column is-12">
	                  <h3 className="has-text-weight-semibold is-size-2">
	                    Latest stories
	                  </h3>
	                  <BlogRoll />
	                  <div className="column is-12 has-text-centered">
	                    <Link className="btn" to="/blog">
	                      Read more
	                    </Link>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>


	  </Layout>
	)
}

export default Index

export const query = graphql`
query Index {
  markdownRemark(frontmatter: {pageTemplate: {eq: "index"}, blockName: {eq: "header"}}) {
		html
    frontmatter {
			title
			heading
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
