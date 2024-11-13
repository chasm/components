import type { AstroInstance } from "astro";

export type Anchor = {
	class?: string | undefined;
	href: string;
	full?: string | undefined;
	label?: string | undefined;
	page?: string | undefined;
	rel?: string | undefined;
};

export interface AstroPage extends AstroInstance {
	metadata: PageMetadata;
}

export type Card = {
	blurb?: string | undefined
	img?: {
		alt?: string | undefined
		filename: string
		folder: string
	} | undefined
	link: {
		href?: string
		label?: string | undefined
		useMoreLink?: boolean | undefined
	}
	title?: string | undefined
}

export type PageMetadata = {
	card?: Card | undefined
	children?: Array<string> | undefined;
	description?: string | undefined;
	href?: string;
	id?: string | undefined;
	label?: string;
	publishedOn?: string | undefined;
	subtitle?: string | undefined
	tags?: Array<string> | undefined;
	timeToRead?: number | undefined;
	title: string;
	updatedOn?: string | undefined;
};
