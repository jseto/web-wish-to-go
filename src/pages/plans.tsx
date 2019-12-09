import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { PlansGrid } from "../templates/plans-grid"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { PlansQuery } from "../../graphql-types"

interface GraphQLProps {
	data: PlansQuery;
}

export const Plans: React.FC<GraphQLProps> = ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" />

			<div className="plans-header hero is-primary">
			<div className="hero-body">
				<MarkdownBlock
				content={ data.markdownRemark.html }
				/>
			</div>
			</div>

			<SectionBody>

				<PlansGrid />

			</SectionBody>
		</Layout>
	)
}

export default Plans

export const query = graphql`
query Plans {
  markdownRemark(frontmatter: {pageTemplate: {eq: "plans"}, blockName: {eq: "header"}}) {
	html
	id
  }
}`
