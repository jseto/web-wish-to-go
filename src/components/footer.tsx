import * as React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.svg'
import facebook from '../images/social/facebook.svg'
import instagram from '../images/social/instagram.svg'
import twitter from '../images/social/twitter.svg'
import vimeo from '../images/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
				<div className="content has-text-centered">
					<img
						src={logo}
						alt="Wish to go"
						style={{ height: '5em' }}
					/>
				</div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="columns" style={{
							marginLeft: 0, marginRight: 0
						}}>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/how-to-use/">
                        How to use
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/plans/">
                        Plans
                      </Link>
                    </li>
										<li>
                      <Link className="navbar-item" to="/blog/">
                        Blog Demo
                      </Link>
                    </li>
										<li>
                      <Link className="navbar-item" to="/trip-planner/">
                        Trip Planner
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog/">
                        Latest Stories
                      </Link>
                    </li>
										<li>
                      <Link className="navbar-item" to="/spain/spain/">
                        Spain
                      </Link>
                    </li>
										<li>
                      <Link className="navbar-item" to="/france/france/">
                        France
                      </Link>
                    </li>
										<li>
                      <Link className="navbar-item" to="/thailand/thailand/">
                        Thailand
                      </Link>
                    </li>
										<li>
                      <Link className="navbar-item" to="/contact/">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/legal/privacy-policy/">
                        Privacy Policy
                          </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/legal/terms/">
                        Terms and Conditions
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/wishtogotravel">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a title="twitter" href="https://twitter.com/wish_to_go">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a title="instagram" href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
						<div className="column">
							<small>
								Made with ❤️ in
								<Link to="/spain/barcelona"> Barcelona </Link>
								and
								<Link to="/thailand/bangkok"> Bangkok </Link>
							</small>
						</div>
          </div>
      </footer>
    )
  }
}

export default Footer
