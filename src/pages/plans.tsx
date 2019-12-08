import * as React from "react"
import {Layout, SectionBody} from "../components/layout"
import { SEO } from "../components/seo"
import { PlansGrid } from "../templates/plans-grid"

export const Plans: React.FC = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<SectionBody>

				<PlansGrid />

			</SectionBody>
		</Layout>
	)
}

export default Plans
