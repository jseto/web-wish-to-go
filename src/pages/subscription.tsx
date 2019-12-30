import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import * as firebase from 'firebase/app'
import 'firebase/auth'

interface SubscriptionProps {
	location: Location;
}

interface SubscriptionState {
	email: string;
	password: string;
}

export class Subscription extends React.Component<SubscriptionProps, SubscriptionState> {
	static initialized = false;

	constructor( props: SubscriptionProps ) {
		super( props );
		this.plan = location.search.slice(6);

		this.state = {
			email: '',
			password: ''
		}

		const firebaseConfig = { 															// cspell: disable
			apiKey: "AIzaSyAL7HGSveC9Qo_hUA-pIShdlEi3XWGI-Sg",
			authDomain: "wish-to-go.com",
			databaseURL: "https://wish-to-go.firebaseio.com",
			projectId: "wish-to-go",
			storageBucket: "wish-to-go.appspot.com",
			messagingSenderId: "760218719658",
			appId: "1:760218719658:web:5eddc4739e81f6fdaa87d3",
			measurementId: "G-KYSSTEMQCG" 											// cspell: enable
		};

		if ( !Subscription.initialized ) {
			firebase.initializeApp(firebaseConfig);
			Subscription.initialized = true;
		}
	} 

	render() {
		const { email, password } = this.state;

		return (
			<Layout>
				<SEO title="Sign-up" />

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<h1 className="title">Subscribe to { this.plan } plan</h1>
				</div>
				</div>

				<SectionBody>

					<div className="columns is-vcentered">
						<div className="column is-4 is-offset-2 subscription-group">
							<div className="box">
								<div className="field control has-icons-left">
									<input
										className="input"
										placeholder="Email"
										type="email"
										onChange={ event => this.setState({ email: event.target.value })}
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
										type="password"
										onChange={event => this.setState({ password: event.target.value })}
										value={password}
									/>
									<span className="icon is-small is-left">
										<i className="fas fa-lock"></i>
									</span>
								</div>
								<div className="field control is-grouped is-grouped-centered">
									<button	
										className="button is-success"
										onClick={ () => this.emailSignUp() }
									>
										Subscribe with Email
									</button>
								</div>
							</div>
						</div>

						<div className="column is-4 buttons subscription-group">
							<p>
								<button 
									className="button is-info is-fullwidth"
									onClick={() => this.signUp( new firebase.auth.GoogleAuthProvider() ) }
								>
									<span>Subscribe with Google</span>
									<span className="icon">
										<i className=" fab fa-google"></i>
									</span>
								</button>
							</p>
							<p>
								<button 
									className="button is-info is-fullwidth"
									onClick={() => this.signUp( new firebase.auth.FacebookAuthProvider() )}
								>
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

	private async emailSignUp() {
		const { email, password } = this.state;
		try {
			const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)	
			await userCredential.user.sendEmailVerification({
				url: `https://wish-to-go.com/payment?plan=${this.plan}`
			})
			console.log( 'sent email' );
			window.location.href = `/verification-email-sent`
		}
		catch ( error ) {
			console.error( 'Error when sign-up: ', error.code );
		}
	}

	private async signUp( provider: firebase.auth.AuthProvider ) {
		try {
			const userCredential = await firebase.auth().signInWithPopup(provider)
			console.log( userCredential.user );
			window.location.href = `/payment?plan=${this.plan}`
		}
		catch( error ) {
			console.error( 'Error when sign-up: ', error.code );
		}
	}

	private plan: string;
}

export default Subscription
