import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby';
import PreviewCompatibleImage from '../components/preview-compatible-image';
import { FeatureGridQuery } from '../../graphql-types';

export interface GraphQLProps {
	data: FeatureGridQuery;
}

const FeatureGrid: React.FC<GraphQLProps> = ({ data }) => {
	const { features } = data.markdownRemark.frontmatter;

	return (
	  <div className="columns is-multiline">
	    {
				features.map( item => (
		      <div key={item.text} className="column">
		        <section className="section">

		          <div className="has-text-centered">
		            <div
		              style={{
		              }}
		            >
		              <PreviewCompatibleImage imageInfo={item} />
		            </div>
		          </div>

							<h3>{item.heading}</h3>

							<p>{item.text}</p>

							<ul>
								{
									item.list.map( line => <li key={ line }>{line}</li> )
								}
							</ul>
							{ item.readMore &&
								<Link to={ item.readMore }>Read more»</Link>
							}
		        </section>
		      </div>
		    ))
			}
	  </div>
	)
}

export default (props: any) => (
	<StaticQuery
		query={graphql`
			query FeatureGrid {
				markdownRemark(
					frontmatter: {
						pageTemplate: { eq: "index" }
						blockName: { eq: "featureGrid" }
					}
				) {
					html
					frontmatter {
						features {
							image {
								childImageSharp {
									fluid(maxWidth: 240, quality: 64) {
										...GatsbyImageSharpFluid
									}
								}
							}
							heading
							text
							list
							readMore
						}
					}
				}
			}
		`}
		render={data => <FeatureGrid data={data} {...props} />}
	/>
);
