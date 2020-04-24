import * as React from "react"
import { graphql } from "gatsby"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { IndexQuery } from "../../graphql-types"
import MarkdownBlock, { Align } from "../components/markdown-block"
import { ProductHighlights } from "../templates/product-highlights"

interface GraphQLProps {
	data: IndexQuery;
}

const Index: React.FC<GraphQLProps> = ({data}) => {
	const { title, description } = data.markdownRemark.frontmatter;
	const blocks = data.allMarkdownRemark.nodes;
	return (
	  <Layout>
	    <SEO title={ title } description={ description } />

			<SectionBody>
				<div className="index-page">
					<PageBlock blocks={ blocks } blockName="header" />
					<PageBlock blocks={ blocks } blockName="readersBenefit" />
					<PageBlock blocks={ blocks } blockName="bookDemo" />
					<ProductHighlights />
					<PageBlock blocks={ blocks } blockName="video" />
					<PageBlock blocks={ blocks } blockName="joannaBanner" />
				</div>
      </SectionBody>
	  </Layout>
	)
}

const PageBlock = props => {
	const { blocks, blockName } = props
	const block = blocks.find( block => block.frontmatter.blockName === blockName )
	
	return (
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

export default Index

export const query = graphql`
query Index {
  markdownRemark(frontmatter: {pageTemplate: {eq: "index"}, blockName: {eq: "header"}}) {
		html
    frontmatter {
			title
			description
    }
  }
	allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "index"}}}, sort: {order: ASC, fields: frontmatter___order}) {
    nodes {
      html
      id
			frontmatter {
				blockName
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
