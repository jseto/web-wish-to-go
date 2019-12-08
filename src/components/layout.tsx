/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import * as React from 'react';
import { Fragment } from "react"
import './all.sass'
import { Navbar } from "./navbar";
import Footer from './footer'

interface LayoutState {
	script: any;
}

export class Layout extends React.Component<{}, LayoutState> {
	render() {
		const children = this.props.children;

	  return (
	    <Fragment>
				<Navbar/>
	      <main>{children}</main>
				<Footer/>
				{ this.state && this.state.script }
	    </Fragment>
	  )
	}
}

export const SectionBody: React.FC = ({ children })=>{
	return (
		<section className="section">
			<div className="columns">
				<div className="column is-8 is-offset-2">
					<div className="content">
						{ children }
						</div>
          </div>
        </div>
      </section>
	)
}

export default Layout
