import type { Options } from "../../forms/types.ts"

export default function createWeekOptions(
	weeks?: Array<number>,
): Options {
	return (weeks || new Array(53).fill(0).map((_, i) => i + 1)).map((value) => ({
		label: `W${String(value).padStart(2, "0")}`,
		value,
	}))
}
