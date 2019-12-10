import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { PlansGridQuery } from '../../graphql-types';
import { FeatureGrid } from '../components/feature-grid';
import { HTMLContent } from '../components/content';

export const PlansGrid = ( props: any ) => (
	<StaticQuery
		query={graphql`
			query plansGrid {
			  allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "plans"}, section: {eq: "plans"}}}, sort: {order: ASC, fields: frontmatter___order}) {
			    nodes {
			      html
			      id
			    }
			  }
			}
		`}
		render={
			( data: PlansGridQuery ) => (
				<FeatureGrid
					features={ data.allMarkdownRemark.nodes }
					{...props}
				>
					{
						item => (
							<HTMLContent
								className="plans-grid"
								content={ item.html }
							/>
						)
					}
				</FeatureGrid>
			)
		}
	/>
);
