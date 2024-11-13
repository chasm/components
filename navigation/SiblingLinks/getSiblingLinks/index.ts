export type SibLinks = {
	next: string | undefined
	prev: string | undefined
}

export default function getSiblingLinks(
	parentPath: string,
	path: string,
	children = [] as Array<string>,
): SibLinks {
	const page = path.split("/").at(-1) || ""
	const index = children.indexOf(page)
	const next = index < children.length - 1
		? `${parentPath}/${children.at(index + 1)}`
		: undefined
	const prev = index > 0 ? `${parentPath}/${children.at(index - 1)}` : undefined

	return {
		next,
		prev,
	}
}
