import type { HTMLAttributes } from "astro/types"

export default function mapAttributes(
	attrs: HTMLAttributes<"div">,
	classes: Array<string> = [],
) {
	return Object.assign({}, attrs, {
		class: (attrs.class || "").split(" ").concat(classes).join(" ").trim(),
	})
}
