import * as React from "react"
import { graphql, Link } from "gatsby"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { IndexQuery } from "../../graphql-types"
import MarkdownBlock, { Align } from "../components/markdown-block"
import { Banner } from "../components/banner"
import { ProductHighlights } from "../templates/product-highlights"
import { HTMLContent } from "../components/content"

interface GraphQLProps {
	data: IndexQuery;
}

const Index: React.FC<GraphQLProps> = ({data}) => {
	const { backgroundImage, title, description, heading, subheading, callToAction, callToActionSmallText, callToActionURL } = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark
	const blocks = data.allMarkdownRemark.nodes;

	return (
	  <Layout>
	    <SEO title={ title } description={ description } />
			{/* <Banner
				header={ heading }
				subheader={ subheading }
				backgroundImage={ backgroundImage }
				callToAction={ callToAction }
				callToActionSmallText={ callToActionSmallText }
				callToActionURL={ callToActionURL }
			/> */}
			<SectionBody>

				{/* <div className="box" style={{ backgroundColor: '#fdddd0'}}>
						<h1 className="title">
							Learn how Wish to go can help you to enhance your readers experience
						</h1>
				</div> */}

				{
					blocks.map( block =>
						<MarkdownBlock
							className={`index-block ${ block.frontmatter.className }`}
							key={ block.id }
							content={ block.html }
							leftImage={ block.frontmatter.leftImage }
							rightImage={ block.frontmatter.rightImage }
							imageColumnWidth={ block.frontmatter.imageColumnWidth }
							align={ block.frontmatter.align as Align }
						/>
					)
				}

				<HTMLContent className="index-header" content={ html } />
		
				{/* <img
					src={logo}
					alt="Wish to go"
					style={{ height: '15em' }}
				/> */}

				<ProductHighlights />

        {/* <div className="columns">
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/plans/">
              See all plans
            </Link>
          </div>
        </div> */}

      </SectionBody>
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
			description
			heading
			subheading
			callToAction
			callToActionURL
			callToActionSmallText
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
				className
				imageColumnWidth
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
