export type CcSvgProps = {
	fill: string
	license?: string | undefined | null
	size: string
	stroke: string
}

export type LicenseAttributes = {
	byAttribution?: boolean | undefined | null
	noDerivatives?: boolean | undefined | null
	nonCommercial?: boolean | undefined | null
	shareAlike?: boolean | undefined | null
}

export type LicenseData = {
	href: string
	license: string
}
