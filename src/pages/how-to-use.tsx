import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { HowToUseQuery } from "../../graphql-types"

interface GraphQLProps {
	data: HowToUseQuery;
}

export class HowToUse extends React.Component<GraphQLProps> {
	render() {
		const { data } = this.props;

		return (
			<Layout>
				<SEO title="Home" />

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
				</div>
				</div>

				<SectionBody>

					<MarkdownBlock
						content={ data.markdownRemark.html }
						contentColumnWidth={ 10 }
					/>

				</SectionBody>
			</Layout>
		)
	}
}

export default HowToUse

export const query = graphql`
query HowToUse {
  markdownRemark(frontmatter: {pageTemplate: {eq: "how-to-use"}, blockName: {eq: "content"}}) {
		html
		id
		frontmatter {
			tripPlanner
		}
  }
}`
