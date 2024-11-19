export default function toUpperCase(
	arg: Array<string | number> | string,
): Array<string | number> | string {
	if (Array.isArray(arg)) {
		return arg.map((i) => (typeof i === "string" ? i.toLocaleUpperCase() : i))
	}

	if (typeof arg === "string") {
		return arg.toLocaleUpperCase()
	}

	return arg
}
