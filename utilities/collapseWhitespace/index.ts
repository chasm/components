export default function collapseWhitespace(text = ""): string {
	return text.replace(/\s+/g, " ").trim()
}
