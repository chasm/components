const re = /[?!.]$/

export default function setAltText(text?: string): string {
	if (!text) {
		return ""
	}

	return re.test(text) ? text : `${text}.`
}
