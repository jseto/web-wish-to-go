import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { PlansGrid } from "../templates/plans-grid"
import MarkdownBlock from "../components/markdown-block"
import { graphql } from "gatsby"
import { PlansQuery } from "../../graphql-types"
import { PlansFootnotes } from "../templates/plans-footnote"

interface GraphQLProps {
	data: PlansQuery;
}

export const Plans: React.FC<GraphQLProps> = ({ data }) => {

	typeof window !== 'undefined' && 
		window['gtag'] &&																																							// cSpell: disable-line
			window['gtag']('event', 'conversion', {'send_to': 'AW-661213510/Ul9xCKXKpskBEMaipbsC'}) 		// cSpell: disable-line

	return (
		<Layout>
			<SEO title="Plans" /> 

			<div className="plans-header hero is-primary">
			<div className="hero-body">
				<MarkdownBlock
					content={ data.markdownRemark.html }
				/>
			</div>
			</div>

			<SectionBody>

				<PlansGrid />

				<PlansFootnotes />
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
