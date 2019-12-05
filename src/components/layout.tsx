/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import * as React from 'react';
import { Fragment } from "react"
import * as PropTypes from "prop-types"
import './all.sass'
import { Navbar } from "./navbar";
import Footer from './footer'

export const Layout = ({ children }) => {
  return (
    <Fragment>
			<Navbar/>
      <main>{children}</main>
			<Footer/>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
