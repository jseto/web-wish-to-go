/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import * as React from 'react';
import { Fragment } from "react"
import './all.sass'
import './wish-to-go-widget-customization.scss'
import { Navbar } from "./navbar";
import Footer from './footer'
import CookieConsent from 'react-cookie-consent'

interface LayoutState {
	script: any;
}

export class Layout extends React.Component<{}, LayoutState> {
	componentDidMount() {
		window[ 'wtgInit' ]()
	}

	componentWillUnmount() {
			window[ 'wtgDismount' ]()
	}

	render() {
		const children = this.props.children;

	  return (
	    <Fragment>
				<Navbar/>
	      <main>{children}</main>
				<Footer/>

				{ this.state && this.state.script }

				<CookieConsent 
			    acceptOnScroll={true}
				>
					We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
				</CookieConsent>

	    </Fragment>
	  )
	}
}

export const SectionBody: React.FC = ({ children })=>{
	return (
		<section className="section">
			<div className="container">
				<div className="content">
					<div className="columns is-desktop">
						<div className="column is-8-fulscreen is-offset-2-fulscreen">
							{ children }
						</div>
					</div>
				</div>
			</div>
  	</section>
	)
}

export default Layout
