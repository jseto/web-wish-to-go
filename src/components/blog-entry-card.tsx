import * as React from 'react'
import { GridItem } from './feature-grid'
import { HTMLContent } from './content';
import { Link } from 'gatsby';

export interface BlogEntryData extends GridItem {
	excerpt: string;
	fields: {
		slug: string;
	}
	frontmatter: {
		title: string;
		featuredImage: any;
	}
}

interface BlogEntryCardProps {
	postData: BlogEntryData;
}

export class BlogEntryCard extends React.Component< BlogEntryCardProps > {
	render () {
		const { excerpt, fields } = this.props.postData;

		// const noWtgExcerpt = excerpt.replace( '<WishWidget', '<!---' )
		// 	.replace( '</WishWidget>', '--->');

		return (
			<div className="blog-entry-card" onClick={ ()=>window.location.href = fields.slug }>
				<HTMLContent
					content={ excerpt }
				/>
				<Link to={ fields.slug }>Read More→</Link>
			</div>
		)
	}
}
