import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { Link } from "gatsby";

export class Contact extends React.Component {
	static initialized = false;

	render() {

		return (
			<Layout>
				<SEO title="Contact" description="Contact"/>

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<h1 className="title">Contact Form</h1>
				</div>
				</div>

				<SectionBody>

					<div className="columns is-vcentered">
						<div className="column is-4 is-offset-2 subscription-group">
							<form action="https://getform.io/f/ae767e74-fec0-42ee-8b49-3a99250ddfc8" method="POST">
								<div className="field">
									<div className="control">
										<input className="input" placeholder="Enter your name" type="text" name="name"/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<input className="input" placeholder="Enter your email" type="email" name="email"/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<textarea className="textarea" placeholder="Explain how we can help you" name="text"/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<button className="button is-primary" type="submit">Send</button>
									</div>
								</div>
							</form>
						</div>
					</div>

				</SectionBody>
			</Layout>
		)
	}
}

export default Contact