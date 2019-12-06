import * as React from 'react';
import { HTMLContent } from '../components/content';
import { graphql, StaticQuery } from 'gatsby';
import logo from '../images/logo.svg';
import { WhatIsItQuery } from '../../graphql-types';

interface GraphQLProps {
	data: WhatIsItQuery;
}

const WhatIsIt: React.FC<GraphQLProps> = ({ data }) => {
	const { html } = data.markdownRemark;

	return (
		<div className="content">
			<div className="tile">
				<img src={logo} alt="Wish to go" style={{ width: '200px' }} />
				<HTMLContent className="content" content={html} />
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
		render={data => <WhatIsIt data={data} {...props} />}
	/>
);
