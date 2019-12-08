import * as React from 'react'

interface BannerProps {
	backgroundImage: any;
	header: string;
	subheader: string;
}

export const Banner: React.FC<BannerProps> = ({ backgroundImage, header, subheader })=>{
	return (
		<div
			className="full-width-image margin-top-0"
			style={{
				backgroundImage: `linear-gradient( #111a, #111a ), url(${
					!!backgroundImage.childImageSharp ? backgroundImage.childImageSharp.fluid.src : backgroundImage
				})`,
				backgroundPosition: `top left`,
				backgroundAttachment: `fixed`,
			}}
		>
			<div
				style={{
					display: 'flex',
					height: '150px',
					lineHeight: '1',
					justifyContent: 'space-around',
					alignItems: 'left',
					flexDirection: 'column',
				}}
			>
				<h1
					className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
					style={{
						boxShadow:
							'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
						backgroundColor: 'rgb(255, 68, 0)',
						color: 'white',
						lineHeight: '1',
						padding: '0.25em',
					}}
				>
					{header}
				</h1>
				<h3
					className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
					style={{
						boxShadow:
							'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
						backgroundColor: 'rgb(255, 68, 0)',
						color: 'white',
						lineHeight: '1',
						padding: '0.25em',
					}}
				>
					{subheader}
				</h3>
			</div>
		</div>
	)
}
