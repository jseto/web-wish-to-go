import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { graphql } from "gatsby";
import { SubscriptionQuery } from "../../graphql-types";
import MarkdownBlock from "../components/markdown-block";

interface UserCredential {
	authId: string;
	email: string;
	name?: string;
	pictureUrl?: string;
	phoneNumber?: string;
}

interface SignData {
	authProvider: string; 
	email?: string; 
	password?: string;
	verificationLink?: string;
}

interface Auth {
	signUp( signData: SignData ): Promise<UserCredential>;
	login( signData: SignData ): Promise<UserCredential>;
	logout(): Promise<void>;
}

interface SubscriptionProps {
	location: Location;
	data: SubscriptionQuery;
}

interface SubscriptionState {
	email: string;
	password: string;
}

export class Subscription extends React.Component<SubscriptionProps, SubscriptionState> {
	static initialized = false;

	constructor( props: SubscriptionProps ) {
		super( props );
		this.plan = props.location.search.slice(6);

		this.state = {
			email: '',
			password: ''
		}

	} 

	render() {
		const { email, password } = this.state;

		const content = this.props.data.allMarkdownRemark.nodes.find( 
			value => value.frontmatter.plan === this.plan 
		)

		return (
			<Layout>
				<SEO title="Sign-up" />

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<h1 className="title">Subscribe to { this.plan } plan</h1>
				</div>
				</div>

				<SectionBody>
					{ content &&
						<MarkdownBlock content={ content.html } contentColumnWidth={8}/>
					}

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
										onClick={ () => this.signWithEmail( email, password ) }
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
									onClick={() => this.signWithProvider( 'google' ) }
								>
									<span>Subscribe with Google</span>
									<span className="icon">
										<i className=" fab fa-google"></i>
									</span>
								</button>
							</p>
							{/* <p>
								<button 
									className="button is-info is-fullwidth"
									onClick={() => this.signWithProvider( 'facebook' )}
								>
									<span>Subscribe with Facebook</span>
									<span className="icon">
										<i className=" fab fa-facebook"></i>
									</span>
								</button>
							</p> */}
						</div>
					</div>
					
				</SectionBody>
			</Layout>
		)
	}

	private signWithEmail( email: string, password: string) {
		this.auth().signUp({ 
			authProvider: 'email', 
			email: email, 
			password: password,
			verificationLink: `https://wish-to-go.com/${this.plan === 'backpacker'? 'payed' : 'payment'}?plan=${this.plan}`,
		}).then( userCredential => {
			console.log( 'Signed Up with Email', userCredential )
			window.location.href = `/verification-email-sent`
		}).catch( error => {
			console.error( 'Cannot sign up. Reason: ', error )
		})
	}

	private signWithProvider( provider: string ) {
		this.auth().signUp({ 
			authProvider: provider,
		}).then( userCredential => {
			console.log( 'Signed Up with ' + provider, userCredential )
			window.location.href = `/${this.plan === 'backpacker'? 'payed' : 'payment'}?plan=${this.plan}`
		}).catch( error => {
			console.error( 'Cannot sign up. Reason: ', error ) 
		})
	}

	private auth(): Auth {
		return window[ 'wtgAuth' ]()
	}

	private plan: string;
}

export default Subscription


export const query = graphql`
query Subscription {
	allMarkdownRemark(filter: {frontmatter: {pageTemplate: {eq: "subscription"}}}) {
    nodes {
      html
      id
			frontmatter {
				plan
			}
    }
  }
}
`
