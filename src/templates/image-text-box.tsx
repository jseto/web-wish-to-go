import * as React from 'react';
import { HTMLContent } from '../components/content';
import { graphql, StaticQuery } from 'gatsby';
import logo from '../images/logo.svg';
import { WhatIsItQuery } from '../../graphql-types';

interface GraphQLProps {
	data: WhatIsItQuery;
}

const ImageTextBox: React.FC<GraphQLProps> = ({ data }) => {
	const { html } = data.markdownRemark;

	return (
		<div className="content">
			<div className="columns is-vcentered">
				<div className="column is-4">
					<img src={logo} alt="Wish to go" style={{
						marginRight: '20px'
					 }} />
				</div>
				<div className="column">
					<HTMLContent className="content" content={html} />
				</div>
			</div>
		</div>
	);
};

export default (props: any) => (
	<StaticQuery
		query={graphql`
			query WhatIsIt {
				markdownRemark(
					frontmatter: {
						pageTemplate: { eq: "index" }
						blockName: { eq: "whatIsIt" }
					}
				) {
					html
				}
			}
		`}
		render={data => <ImageTextBox data={data} {...props} />}
	/>
);
