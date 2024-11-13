export default function getPaths(path: string): Array<string> {
	return path.split("/").reduce(
		(out, segment) => {
			if (segment) {
				out.push(out.at(-1) ? `${out.at(-1)}/${segment}` : `/${segment}`)
			}

			return out
		},
		[] as Array<string>,
	)
}
