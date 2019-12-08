import * as React from "react"
import { graphql, Link } from "gatsby"
import {Layout} from "../components/layout"
import { SEO } from "../components/seo"
import { IndexQuery } from "../../graphql-types"
import MarkdownBlock, { Aling } from "../components/markdown-block"
import { Banner } from "../components/banner"
import { ProductHighlights } from "../templates/product-highlights"

interface GraphQLProps {
	data: IndexQuery;
}

const Index: React.FC<GraphQLProps> = ({data}) => {
	const { backgroundImage, heading, subheading } = data.markdownRemark.frontmatter;
	const blocks = data.allMarkdownRemark.nodes;

	return (
	  <Layout>
	    <SEO title="Home" />
			<Banner
				header={ heading }
				subheader={ subheading }
				backgroundImage={ backgroundImage }
			/>
      <section className="section">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="content">

							<ProductHighlights />

							{
								blocks.map( block =>
									<MarkdownBlock
										key={ block.id }
										content={ block.html }
										leftImage={ block.frontmatter.leftImage }
										rightImage={ block.frontmatter.rightImage }
										align={ block.frontmatter.align as Aling }
									/>
								)
							}

              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/products">
                    See all products
                  </Link>
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
	allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "index"}, blockName: {eq: "block"}}}, sort: {order: ASC, fields: frontmatter___order}) {
    nodes {
      html
      id
			frontmatter {
				align
				rightImage {
					absolutePath
					internal {
						mediaType
					}
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
				leftImage {
					absolutePath
					internal {
						mediaType
					}
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
    }
  }
}
`
