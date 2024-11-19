export default function toTrainCase(str: string): string {
	return str
		.replaceAll(/([A-Z])/g, " $1")
		.toLocaleLowerCase()
		.replaceAll(/[-]+/g, " ")
		.replaceAll(/[^a-z0-9- ]+/g, "")
		.replaceAll(/[ ]+/g, "-")
		.replaceAll(/^[^a-z0-9]+|[^a-z0-9]+$/g, "")
}
