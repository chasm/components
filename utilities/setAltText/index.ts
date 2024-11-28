import collapseWhitespace from "../collapseWhitespace/index.ts"

const re = /[?!.]$/

export default function setAltText(text?: string): string {
	if (!text) {
		return ""
	}

	const alt = collapseWhitespace(re.test(text) ? text : `${text}.`)

	if (alt.length > 150) {
		console.error(
			collapseWhitespace(`
				WARNING: alt text length of ${alt.length} characters exceeds 150 character
				limit by ${alt.length - 150} characters.
			`),
			alt,
		)
	}

	return alt
}
