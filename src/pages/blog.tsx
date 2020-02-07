import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { BlogQuery } from "../../graphql-types"
import { BlogLastEntries } from "../templates/blog-last-entries"

interface GraphQLProps {
	data: BlogQuery;
}

export const Blog: React.FC<GraphQLProps> = ({ data }) => {
	return (
		<Layout>
			<SEO title="Travel Blog demo" />

			<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<MarkdownBlock
						content={ data.markdownRemark.html }
					/>
				</div>
			</div>

			<SectionBody>

				<BlogLastEntries />

			</SectionBody>
		</Layout>
	)
}

export default Blog

export const query = graphql`
query Blog {
  markdownRemark(frontmatter: {pageTemplate: {eq: "blog"}, blockName: {eq: "header"}}) {
		html
		id
  }
}`
