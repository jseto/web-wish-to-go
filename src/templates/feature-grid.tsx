import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/preview-compatible-image';
import { FeatureGridQuery } from '../../graphql-types';

export interface GraphQLProps {
	data?: FeatureGridQuery;
}

const FeatureGrid: React.FC<GraphQLProps> = ({ data }) => (
  <div className="columns is-multiline">
    {data.markdownRemark.frontmatter.features.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

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
							text
						}
					}
				}
			}
		`}
		render={data => <FeatureGrid data={data} {...props} />}
	/>
);
