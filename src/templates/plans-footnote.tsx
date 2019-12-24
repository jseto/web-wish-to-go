import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import MarkdownBlock from '../components/markdown-block';
import { PlansFootnotesQuery } from '../../graphql-types';

export const PlansFootnotes = () => (
	<StaticQuery
		query={graphql`
			query plansFootnotes {
				markdownRemark(frontmatter: {pageTemplate: {eq: "plans"}, blockName: {eq: "footnotes"}}) {
					html
					id
			  }
			}
		`}
		render={
			( data: PlansFootnotesQuery ) => (
				<MarkdownBlock
					content={ data.markdownRemark.html }
				/>
			)
		}
	/>
);
