const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	if ( node.internal.type !== `MarkdownRemark` ) return;
	const category = node.frontmatter.category;
	if ( !( category && category.length )	) return;

  const { createNodeField } = actions;

	const isTravelBlogPage = category !== 'generic';
	const isGenericBlog = category === 'generic';
	const slug = createFilePath({
		node,
		getNode,
		basePath: 'src/posts'
	})

	console.log('Post found at: ', slug)

	createNodeField({
    node,
    name: `slug`,
    value: slug,
  })
}

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(edge => {
		const fields = edge.node.fields
		if ( fields && fields.slug ) {
    	const slug = fields.slug
	    actions.createPage({
	      path: slug,
	      component: require.resolve(`./src/templates/blog-entry-page.tsx`),
	      context: { slug: slug },
	    })
		}
  })
}
