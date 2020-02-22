import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"

type Plan = ( 'explorer' | 'globetrotter' )

interface PaymentProps {
	location: Location;
}

interface PaymentState {
	validCoupon: boolean
	couponCode: string
}

export class Payment extends React.Component<PaymentProps, PaymentState> {
	static initialized = false;

	constructor( props: PaymentProps ) {
		super( props );
		this.plan = props.location.search.slice(6) as any;
		this.state = {
			couponCode: '',
			validCoupon: false
		}
	}

	render() {
		const { couponCode, validCoupon } = this.state

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
							<h2>Pay annual subscription</h2>
							<small>Saves 2 months</small>
							{ this.planPaymentScheme( this.plan, 'anual' ) }
						</div>

						<div className="column is-4 buttons subscription-group">
							<h2>Pay monthly subscription</h2>
							<small></small>
							{ this.planPaymentScheme( this.plan, 'monthly' ) }
						</div>
					</div>
					{ !validCoupon &&
						<div>
							<h3>Apply discount coupon</h3>
							<input type="text" value={ couponCode } 
								onChange={ event => this.setState({
									couponCode: event.target.value
								})}
							/>
							<button onClick={ ()=>this.validateCoupon() }>Validate</button>
						</div>
					}
				</SectionBody>
			</Layout>
		)
	}

	private planPaymentScheme( plan: Plan, period: 'monthly' | 'anual') {
		const { couponCode, validCoupon } = this.state
		const periodName = period === 'anual'? 'year':'month'

		return (
			<React.Fragment>
				{ validCoupon &&
					<div>
						<small>
							<p>
								Pay €{ plans[ plan ][ period ].coupon.totalPrice } the first { periodName }
							</p>
							<p>
								After the first { periodName } you will pay €{ plans[ plan ][ period ].net.totalPrice }&nbsp; 
							</p>				
							Saves €{ 
								plans[ plan ][ period ].net.totalPrice - plans[ plan ][ period ].coupon.totalPrice 
							} from coupon { couponCode }
						</small>
						{ this.paypalButton( plans[ plan ][ period ].coupon.paypalCode )}
					</div>								
				}

				{ !validCoupon &&
					<div>
						<p>Pay €{ plans[ plan ][ period ].net.totalPrice }</p>				
						{ this.paypalButton( plans[ plan ][ period ].net.paypalCode )}
					</div>
				}
			</React.Fragment>
		)
	}

	private validateCoupon() {
		const { couponCode } = this.state 
		
		const daysPortion = couponCode.slice( 4 )
		const reversedDaysFrom20200101 = daysPortion.split('').reverse().join('')
		const daysFrom20200101 = Number( reversedDaysFrom20200101 )
		const couponStartDate = new Date( '2020-01-01' ).getTime() + 86400000 * daysFrom20200101 
		const couponExpireDate = couponStartDate + 86400000 * 32 //days in a month + 1extra day
		
		const valid = couponExpireDate >= Date.now() && couponStartDate < Date.now()

		console.log( valid, couponCode, new Date( couponExpireDate ), daysFrom20200101, new Date( couponStartDate ) )
		
		if ( !valid ) alert( 'Coupon not valid' )

		this.setState({
			validCoupon: valid
		})
	}

	private paypalButton( id: string ) {																						//cSpell: disable
		return (
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick"/>																	
				<input type="hidden" name="hosted_button_id" value={ id }/>
				<input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_subscribeCC_LG.gif" name="submit" alt="PayPal – The safer, easier way to pay online!"/>
				<img alt="" src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif" width="1" height="1"/>
			</form>
		)																																							//cSpell: enable
	}

	private plan: Plan;
}

const plans = {
	explorer: {
		anual: {
			net: {
				paypalCode: 'ZPRGXVXEP53GW',																														//cSpell: disable-line
				totalPrice: 359.64
			},
			coupon: {
				paypalCode: 'YP34M42RDSAK4',																														//cSpell: disable-line
				totalPrice: 287.71
			}
		},
		monthly: {
			net: {
				paypalCode: '744YTAJKJPKDL',																														//cSpell: disable-line
				totalPrice: 35.96
			},
			coupon: {
				paypalCode: 'PXLD86GJJXM8C',																														//cSpell: disable-line
				totalPrice: 28.77
			}
		}
	},
	globetrotter: {
		anual: {
			net: {
				paypalCode: 'B5GM82D24SXT4',																														//cSpell: disable-line
				totalPrice: 2387.88
			},
			coupon: {
				paypalCode: 'Q8BUL836RGWCG',																														//cSpell: disable-line
				totalPrice: 1910.30
			}
		},
		monthly: {
			net: {
				paypalCode: 'W3RSWEVL57HXW',																														//cSpell: disable-line
				totalPrice: 238.79
			},
			coupon: {
				paypalCode: 'WPPXAB9BHZQAW',																														//cSpell: disable-line
				totalPrice: 191.03
			}
		}
	}
}


export default Payment
