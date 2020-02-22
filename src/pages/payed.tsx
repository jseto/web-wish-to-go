import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { Link } from "gatsby";

type Plan = ( 'backpacker' | 'explorer' | 'globetrotter' )

interface PayedProps {
	location: Location;
}

interface PayedState {
}

export class Payed extends React.Component<PayedProps, PayedState> {
	static initialized = false;

	constructor( props: PayedProps ) {
		super( props );
		this.plan = props.location.search.slice(6) as any;
	}

	render() {

		return (
			<Layout>
				<SEO title="Sign-up" />

				<div className="hero is-primary" style={{ textAlign: 'center' }}>
				<div className="hero-body">
					<h1 className="title">Welcome to { this.plan } plan</h1>
				</div>
				</div>

				<SectionBody>

					<div className="columns is-vcentered">
						<div className="column is-4 is-offset-2 subscription-group">
							<p>
								Thank you for subscribing to the { this.plan } plan. Now you can start 
								seting up <strong>Wish to go</strong> in your blog.
							</p>
							<p>
								You can find the technical detains in <Link to='/how-to-use'>this page</Link>
							</p>
							{ this.plan === 'backpacker' &&
								<div>
									<p>
										This is your voucher discount code: { this.createDiscountCode() } 
									</p>
									<p>
										Voucher discount conditions
										<ul>
											<li>Use the voucher in your next purchase of a payed plan.</li>
											<li>You will have a 20% discount on the selected payed plan.</li>
											<li>The voucher will expire in one month from today</li>
										</ul>
									</p>
								</div>
							}
						</div>
					</div>

				</SectionBody>
			</Layout>
		)
	}

	createDiscountCode() {
		const msFrom20200101 = Date.now() - new Date( '2020-01-01' ).getTime()
		const daysFrom20200101 = msFrom20200101 / 86400000
		
		return 'FFRE' + daysFrom20200101.toFixed( 0).padStart( 4, '0' ).split('').reverse().join('') 				//cSpell: disable-line
	}

	private plan: Plan
}

export default Payed