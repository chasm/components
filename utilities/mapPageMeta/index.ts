import type { Meta, Pages } from "../../types.ts";

export default async function mapPageMeta(pages: Pages): Promise<Array<Meta>> {
	return await Promise.all(
		Object.keys(pages).map(async (url) =>
			Object.assign({
				href: url.replace(/^\/src\/pages|\/index.astro$/g, ""),
			}, (await pages[url]?.())?.metadata || {} as Meta)
		),
	);
}
