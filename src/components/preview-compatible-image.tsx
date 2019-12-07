import * as React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

	// Is not trivial to show SGV
	// if ( imageInfo.internal && imageInfo.internal['mediaType']==='image/svg+xml')
	// 	return <img style={imageStyle} src={imageInfo.absolutePath} alt={alt} />

  return null
}

export default PreviewCompatibleImage
