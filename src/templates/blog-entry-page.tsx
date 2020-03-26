import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { BlogEntryPageQuery } from "../../graphql-types"
import { HTMLContent } from "../components/content"
import SideBar from "../components/side-bar"
import { Social } from "../components/social"

interface GraphQLProps {
	data: BlogEntryPageQuery;
	location: Location;
}

export const BlogEntryPage: React.FC<GraphQLProps> = ( {data, location} ) => {
	const { title, category } = data.markdownRemark.frontmatter;

	return (
		<Layout>
			<SEO
				title={ title } 
				description={ data.markdownRemark.excerpt }
				featuredImage={ data.markdownRemark.frontmatter.featuredImage?.publicURL }
			/>

			<SectionBody>
				<div className="columns is-multiline blog-entry-page">

					<div className="column is-8">

						<Social url={location.href}/>

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
		excerpt
		frontmatter {
			title
			date
			category
			featuredImage {
				publicURL
				internal {
					mediaType
				}
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
		tags
		}
  }
}`
