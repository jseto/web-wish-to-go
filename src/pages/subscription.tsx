import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'

interface SubscriptionProps {
	location: Location;
	name: string;
	email: string;
	blogTitle: string;
	blogUrl: string;
}

export class Subscription extends React.Component<SubscriptionProps> {
	constructor( props: SubscriptionProps ) {
		super( props );

		// this.ui = new firebaseui.auth.AuthUI(firebase.auth());
	} 

	render() {
		const { location, name, email, blogTitle, blogUrl } = this.props;
		const plan = location.search.slice( 6 );

		return (
			<Layout>
				<SEO title="Sign-up" />

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<h1 className="title">Subscribe to { plan } plan</h1>
				</div>
				</div>

				<SectionBody>

					<div className="columns is-vcentered">
						<div className="column is-4 is-offset-2 subscription-group">
							<form 
									className="box"
									onSubmit={ ()=> this.emailSignUp()}>
								<div className="field control has-icons-left">
									<input
										className="input"
										placeholder="Email"
										value={email}
									/>
									<span className="icon is-small is-left">
										<i className="fas fa-envelope"></i>
									</span>
								</div>
								<div className="field control has-icons-left">
									<input
										className="input"
										placeholder="Password"
										value={blogTitle}
									/>
									<span className="icon is-small is-left">
										<i className="fas fa-lock"></i>
									</span>
								</div>
								<div className="field control is-grouped is-grouped-centered">
									<button	className="button is-success">
										Subscribe with Email
									</button>
								</div>
							</form>
						</div>

						<div className="column is-4 buttons subscription-group">
							<p>
								<button 
									className="button is-info is-fullwidth"
									onClick={ ()=> this.googleSignUp() }
								>
									<span>Subscribe with Google</span>
									<span className="icon">
										<i className=" fab fa-google"></i>
									</span>
								</button>
							</p>
							<p>
								<button className="button is-info is-fullwidth">
									<span>Subscribe with Facebook</span>
									<span className="icon">
										<i className=" fab fa-facebook"></i>
									</span>
								</button>
							</p>
						</div>
					</div>
					
				</SectionBody>
			</Layout>
		)
	}

	private emailSignUp() {
		throw new Error("Method not implemented.")
	}

	private async googleSignUp() {
		const provider = new firebase.auth.GoogleAuthProvider();

		try {
			const result = await firebase.auth().signInWithPopup(provider)
			console.log( result.user );
		}
		catch( error ) {
			console.error( 'Error when sign-up with Google: ', error.code );
		}
	}

	private ui: firebaseui.auth.AuthUI;
}

export default Subscription
