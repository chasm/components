type Options = Array<{
	label: string
	selected?: boolean | undefined
	value?: string | number | undefined
}>

export default function createListOptions(list: Options): string {
	return list.map((item) => `<option value="${item.value}"></option>`).join(
		"\n",
	)
}
