import * as React from 'react'
import { Link } from 'gatsby'

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
					textAlign: 'center'
				}}
			>
				<h1
					className="has-text-weight-bold is-size-3-mobile is-size-1-tablet is-size-1-widescreen"
					style={{
						// boxShadow:
						// 	'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
						// backgroundColor: 'rgb(255, 68, 0)',
						color: 'white',
						lineHeight: '1',
						padding: '0.25em',
					}}
				>
					{header}
				</h1>
				<h2
					className="has-text-weight-bold is-size-5-mobile is-size-3-tablet is-size-3-widescreen"
					style={{
						// boxShadow:
						// 	'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
						// backgroundColor: 'rgb(255, 68, 0)',
						color: 'white',
						lineHeight: '1',
						padding: '0.25em',
						marginBottom: '0.5em'
					}}
				>
					{subheader}
				</h2>
				<Link 
					className="button is-primary side-margin-1em"
					to="/plans/"
				>
					<h3 className="has-text-weight-bold">Start now for Free</h3>
				</Link>
				<small 
					className="side-margin-1em5"
					style={{
						color: 'lightgrey',
						fontSize: '0.8em',
						textAlign: 'left',
						marginTop: '0.3em'
					}}
				>
					*And get a 20% off from your next payed plan purchase. Limited time period.
				</small>
			</div>
		</div>
	)
}
