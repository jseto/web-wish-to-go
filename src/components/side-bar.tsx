import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import { SideBarQuery } from "../../graphql-types";
import { HTMLContent } from "./content";

const SideBar = () => {
	
	return (
		<StaticQuery
		query={ query }
		render= {( data: SideBarQuery ) => {
				const blocks = data.allMarkdownRemark.nodes;
				
				return (
					<div className="side-bar">
						{
							blocks.map( block =>
								<HTMLContent
									className={`side-bar-block ${ block.frontmatter.className }`}
									key={ block.id }
									content={ block.html }
								/>
							)
						}
					</div>
				)}
			}
		/>
	)
}

export default SideBar

export const query = graphql`
query SideBar {
	allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "sideBar"}, blockName: {eq: "block"}}}, sort: {order: ASC, fields: frontmatter___order}) {
    nodes {
      html
      id
			frontmatter {
				className
			}
    }
  }
}
`
