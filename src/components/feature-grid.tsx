import * as React from 'react'
import { HTMLContent } from './content'

export interface GridItem {
	id: string;
	html: string;
}

export interface FeatureGridProps {
  features: GridItem[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
	return (
	  <div className="columns is-multiline">
	    {
				features.map( item => (
		      <div key={ item.id } className="column is-one-third">
		        <section className="section">

							<HTMLContent className="content" content={item.html} />

		        </section>
		      </div>
		    ))
			}
	  </div>
	)
}
