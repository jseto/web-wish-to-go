import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import * as firebase from 'firebase/app'
import 'firebase/auth'

interface PaymentProps {
	location: Location;
}

interface PaymentState {
}

export class Payment extends React.Component<PaymentProps, PaymentState> {
	static initialized = false;

	constructor( props: PaymentProps ) {
		super( props );
		this.plan = location.search.slice(6);
	}

	render() {
		// const { email, password } = this.state;

		return (
			<Layout>
				<SEO title="Sign-up" />

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<h1 className="title">Payment for { this.plan } plan</h1>
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
										// value={email}
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
										// value={password}
									/>
									<span className="icon is-small is-left">
										<i className="fas fa-lock"></i>
									</span>
								</div>
								<div className="field control is-grouped is-grouped-centered">
									<button	
										className="button is-success"
										// onClick={ () => this.emailSignUp() }
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
									// onClick={() => this.signUp( new firebase.auth.GoogleAuthProvider() ) }
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
									// onClick={() => this.signUp( new firebase.auth.FacebookAuthProvider() )}
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

	private plan: string;
}

export default Payment
