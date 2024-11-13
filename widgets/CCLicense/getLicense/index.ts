import type { LicenseAttributes, LicenseData } from "../types.ts"

export default function getLicense({
	byAttribution,
	noDerivatives,
	nonCommercial,
	shareAlike,
}: LicenseAttributes): LicenseData {
	if (!byAttribution) {
		return {
			href: "https://creativecommons.org/publicdomain/zero/1.0/",
			license: "CC0 1.0 Universal Public Domain Dedication",
		}
	}

	const { saHref, saLicense } = noDerivatives
		? {
			saHref: "-nd",
			saLicense: "-NoDerivatives",
		}
		: shareAlike
		? {
			saHref: "-sa",
			saLicense: "-ShareAlike",
		}
		: { saHref: "", saLicense: "" }

	const { ncHref, ncLicense } = nonCommercial
		? {
			ncHref: "-nc",
			ncLicense: "-NonCommercial",
		}
		: { ncHref: "", ncLicense: "" }

	return {
		href: `https://creativecommons.org/licenses/by${ncHref}${saHref}/4.0/`,
		license: `Attribution${ncLicense}${saLicense} 4.0 International License`,
	}
}
