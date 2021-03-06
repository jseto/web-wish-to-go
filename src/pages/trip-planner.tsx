import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { HowToUseQuery } from "../../graphql-types"

interface GraphQLProps {
	data: HowToUseQuery;
}

export class TripPlanner extends React.Component<GraphQLProps> {
	render() {
		const { data } = this.props;
		const blocks = data.allMarkdownRemark.nodes;

		return (
			<Layout>
				<SEO title="Trip planner" />

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<MarkdownBlock
						content={ data.markdownRemark.html }
					/>
				</div>
				</div>

				<SectionBody>
					{
						blocks.map( block =>
							<MarkdownBlock
								className="index-block"
								key={ block.id }
								content={ block.html }
							/>
						)
					}


					<MarkdownBlock
						className="trip-planner"
						content={ data.markdownRemark.frontmatter.tripPlanner }
						contentColumnWidth={ 8 }
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
	allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "trip-planner"}, blockName: {eq: "block"}}}, sort: {order: ASC, fields: frontmatter___order}) {
		nodes {
			html
			id
		}
	}
}`
