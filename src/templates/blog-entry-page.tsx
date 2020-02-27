import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { BlogEntryPageQuery } from "../../graphql-types"
import { HTMLContent } from "../components/content"
import SideBar from "../components/side-bar"

interface GraphQLProps {
	data: BlogEntryPageQuery;
}

export const BlogEntryPage: React.FC<GraphQLProps> = ({ data }) => {
	const { title, category } = data.markdownRemark.frontmatter;

	return (
		<Layout>
			<SEO title={title} />

			<SectionBody>
				<div className="columns is-multiline blog-entry-page">

					<div className="column is-8">
						<MarkdownBlock 
							className={ `main-column ${ category || '' }` }
							content={ data.markdownRemark.html }
						/>
					</div>
					<div className="column is-4">
						<SideBar/>
					</div>
				</div>
				
				{ category !== 'generic' &&
					<HTMLContent 
						className="stick-to-bottom" 
						content="<WishCounterWidget></WishCounterWidget>" 
					/>
				}
			</SectionBody>
		</Layout>
	)
}

export default BlogEntryPage

export const query = graphql`
query BlogEntryPage( $slug: String! ) {
  markdownRemark( fields: { slug: { eq: $slug } } ) {
		html
		id
		tableOfContents
		frontmatter {
			title
			date
			category
			tags
		}
  }
}`
