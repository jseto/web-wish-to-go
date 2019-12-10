import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { ProductHighlightsQuery } from '../../graphql-types';
import { FeatureGrid } from '../components/feature-grid';
import { HTMLContent } from '../components/content';

export const ProductHighlights = ( props: any ) => (
	<StaticQuery
		query={graphql`
			query productHighlights {
			  allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "index"}, section: {eq: "productHighlights"}}}, sort: {order: ASC, fields: frontmatter___order}) {
			    nodes {
			      html
			      id
			    }
			  }
			}
		`}
		render={
			( data: ProductHighlightsQuery ) => (
				<FeatureGrid
					features={ data.allMarkdownRemark.nodes }
					{...props}
				>
					{ item => (
						<HTMLContent
							content={ item.html }
						/>
					) }
				</FeatureGrid>
			)
		}
	/>
);
