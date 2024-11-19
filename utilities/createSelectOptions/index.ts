import type { Options } from "../../forms/types.ts"

export default function createSelectOptions(
	list: Options,
	selected?: string | number | undefined | null,
): string {
	return list
		.map((item) =>
			item.options
				? `<optgroup label="${item.label || item.value}">${
					createSelectOptions(
						item.options,
						selected,
					)
				}</optgroup>`
				: `<option value="${item.value}"${
					String(item.value) === String(selected) ? " selected" : ""
				}>${item.label || item.value}</option>`
		)
		.join("\n")
}
