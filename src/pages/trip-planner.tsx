import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { TripPlannerQuery } from "../../graphql-types"

interface GraphQLProps {
	data: TripPlannerQuery;
}

export class TripPlanner extends React.Component<GraphQLProps> {
	render() {
		const { data } = this.props;

		return (
		<Layout>
			<SEO title="Home" />

			<div className="hero is-primary" style={{ textAlign: 'center' }}>
			<div className="hero-body">
				<MarkdownBlock
					content={ data.markdownRemark.html }
				/>
			</div>
			</div>

			<SectionBody>

				<MarkdownBlock
					content={ data.markdownRemark.frontmatter.tripPlanner }
					contentColumnWidht={ 8 }
				/>

			</SectionBody>
		</Layout>
	)
	}
}

export default TripPlanner

export const query = graphql`
query TripPlanner {
  markdownRemark(frontmatter: {pageTemplate: {eq: "trip-planner"}, blockName: {eq: "header"}}) {
		html
		id
		frontmatter {
			tripPlanner
		}
  }
}`
