import * as React from 'react'
import { ReactNode } from 'react'

export interface GridItem {
	id: string;
	html: string;
}

export interface FeatureGridProps {
  features: GridItem[];
	className: string;
	children: ( item: GridItem ) => ReactNode;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features, children }) => {
	return (
	  <div className="columns is-multiline">
	    {
				features.map( item => (
		      <div key={ item.id } className="column is-one-third">
						{ children( item ) }
		      </div>
		    ))
			}
	  </div>
	)
}
