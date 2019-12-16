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
						frontmatter: {
							category: { ne: "generic" }
						}
					},
					sort: {
						fields: frontmatter___date, order: DESC
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
				<>
					<BlogEntryCard
						key={ data.allMarkdownRemark.nodes[0].id }
						postData={ data.allMarkdownRemark.nodes[0] as BlogEntryData }
					/>

					<FeatureGrid
						features={data.allMarkdownRemark.nodes.slice( 1 )}
						compact={ true }
						{...props}
					>

						{
							item => (
								<BlogEntryCard
									key={ item.id}
									postData={ item as BlogEntryData }
								/>
							)
						}

					</FeatureGrid>
				</>
			)
		}
	/>
);
