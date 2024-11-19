import type { Dataset } from "../../forms/types.ts"

import toTrainCase from "../toTrainCase/index.ts"

export default function mapDataset(
	dataset: Dataset = {},
	prefix = "data",
): Dataset {
	return Object.keys(dataset).reduce((out, key) => {
		const fullKey = `${prefix}-${toTrainCase(key)}` as string

		if (dataset[key] !== undefined) {
			out[fullKey] = dataset[key]
		}

		return out
	}, {} as Dataset)
}
