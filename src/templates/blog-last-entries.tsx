import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { BlogLastEntriesQuery } from '../../graphql-types';
import { FeatureGrid } from '../components/feature-grid';
import { BlogEntryCard, BlogEntryData } from '../components/blog-entry-card';

export const BlogLastEntries = ( props: any ) => (
	<StaticQuery
		query={graphql`
			query BlogLastEntries {
			  allMarkdownRemark(
					filter: {
						fields: {
							slug: { ne: null }
						}
					},
					sort: {
						fields: frontmatter___date, order: ASC
					}) {
			    nodes {
			      excerpt( format: HTML )
						id
						fields {
							slug
						}
			      frontmatter {
			        pageTemplate
							title
							date
							tags
			      }
			    }
			  }
			}
		`}
		render={
			( data: BlogLastEntriesQuery ) => (
				<FeatureGrid
					features={data.allMarkdownRemark.nodes}
					{...props}
				>

					{ item => <BlogEntryCard articleData={ item as BlogEntryData }/> }

				</FeatureGrid>
			)
		}
	/>
);
