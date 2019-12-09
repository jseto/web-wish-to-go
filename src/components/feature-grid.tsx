import * as React from 'react'
import { HTMLContent } from './content'

export interface GridItem {
	id: string;
	html: string;
}

export interface FeatureGridProps {
  features: GridItem[];
	className: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className }) => {
	return (
	  <div className="columns is-multiline">
	    {
				features.map( item => (
		      <div key={ item.id } className="column is-one-third">
						<HTMLContent className={ className } content={item.html} />
		      </div>
		    ))
			}
	  </div>
	)
}
