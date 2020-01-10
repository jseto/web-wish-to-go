import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"

interface PaymentProps {
	location: Location;
}

interface PaymentState {
}

export class Payment extends React.Component<PaymentProps, PaymentState> {
	static initialized = false;

	constructor( props: PaymentProps ) {
		super( props );
		this.plan = props.location.search.slice(6);
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
							<h1>Payment - Paypal</h1>
						</div>

						<div className="column is-4 buttons subscription-group">
						</div>
					</div>
					
				</SectionBody>
			</Layout>
		)
	}

	private plan: string;
}

export default Payment
