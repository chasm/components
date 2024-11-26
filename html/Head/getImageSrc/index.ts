import type { Image } from "../../../types.ts"

export default function getImageSrc(image = {} as Image): string {
	const {
		host = "",
		filename,
		folder,
		format = "png",
		width = 1200,
	} = image

	return filename && folder
		? `${host}/${folder}/${filename}.${format}?fm=${format}&w=${width}`
		: ""
}
