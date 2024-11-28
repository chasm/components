import type { AstroPage, Meta } from "../../types.ts"

export default function mapPageMeta(pages: Array<AstroPage>): Array<Meta> {
	return pages.map((page) =>
		Object.assign({
			href: page.url,
		}, page.metadata || {})
	)
}
