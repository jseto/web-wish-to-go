import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { SlideShowQuery } from '../../graphql-types';
import { HTMLContent } from '../components/content';
import { Slider } from '../components/slider';

export const SlideShow = ( ) => (
	<StaticQuery
		query={graphql`
			query SlideShow {
			  allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "index"}, section: {eq: "slide"}}}, sort: {order: ASC, fields: frontmatter___order}) {
			    nodes {
			      html
						id
						frontmatter {
							image {
								publicURL
							}
						}
			    }
			  }
			}
		`}
		render={
			( data: SlideShowQuery ) => (
				<Slider slides={ data.allMarkdownRemark.nodes.map( item => (
					<div className="columns is-multiline is-centered is-vcentered is-tablet slide-index">
						<div className="column -is-5 image-container">
							<img src={ item.frontmatter.image.publicURL } />
						</div>
						<HTMLContent
							className="column -is-7"
							content={ item.html }
						/>
					</div>
				))}/>
			)
		}
	/>
);
