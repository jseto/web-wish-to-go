import * as React from 'react'
import { ReactNode } from 'react'

export interface GridItem {
	id: string;
	html: string;
}

export interface FeatureGridProps {
  features: GridItem[];
	className: string;
	compact: boolean;
	children: ( item: GridItem ) => ReactNode;
}

export class FeatureGrid extends React.Component<FeatureGridProps> {

	render() {
		const { compact, className } = this.props

		return(
			<div className={ `columns is-multiline ${ className }` }>

				{ compact
					? this.renderCompactGrid()
					: this.renderSpareGrid()
				}

			</div>
		)
	}

	private renderSpareGrid() {
		const { features, children } = this.props
		return features.map( item => (
      <div key={ item.id } className="column is-one-third">
				{ children( item ) }
      </div>
    ))
	}

	private renderCompactGrid() {
		const { features, children } = this.props
		const childrenElement = features.map( item => children( item ) )

		return (
		  <>
				<div className="column is-one-third">
					{ childrenElement.filter( ( _item, i ) => i % 3 === 0 ) }
				</div>
				<div className="column is-one-third">
					{ childrenElement.filter( ( _item, i ) => i % 3 === 1 ) }
				</div>
				<div className="column is-one-third">
					{ childrenElement.filter( ( _item, i ) => i % 3 === 2 ) }
				</div>
		  </>
		)
	}
}
