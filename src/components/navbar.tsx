import * as React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';
// import navbarEndIcon from '../img/github-icon.svg'

const navbarEndIcon = '';
const navbarEndIconAlt = '';
const navbarEndIconUrl = '';

interface NavbarState {
	active: boolean;
	navBarActiveClass: string;
}

export class Navbar extends React.Component<{}, NavbarState> {
	constructor(props: Readonly<{}>) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: ''
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active'
					  })
					: this.setState({
							navBarActiveClass: ''
					  });
			}
		);
	};

	render() {
		return (
			<nav
				className="navbar is-transparent"
				role="navigation"
				aria-label="main-navigation"
			>
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item" title="Logo">
							<img src={logo} alt="Wish to go" style={{ width: '88px' }} />
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id="navMenu"
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className="navbar-start has-text-centered">
							<Link className="navbar-item" to="/use">
								How to use
							</Link>
							<Link className="navbar-item" to="/plans">
								Plans
							</Link>
							<Link className="navbar-item" to="/blog">
								Blog Demo
							</Link>
							<Link className="navbar-item" to="/planner">
								Travel Planner
							</Link>
						</div>
						<div className="navbar-end has-text-centered">
							<a
								className="navbar-item"
								href={navbarEndIconUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon">
									<img src={navbarEndIcon} alt={navbarEndIconAlt} />
								</span>
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
