import not from "../not/index.ts"
import toUpperCase from "../toUpperCase/index.ts"
import TIME_ZONES from "./timeZones.ts"

export default function filterTimeZoneOptions(
	exclude: Array<string | number>,
	include: Array<string | number>,
) {
	const exc = exclude.length ? toUpperCase(exclude) : ""
	const inc = include.length ? toUpperCase(include) : ""

	return TIME_ZONES.map((region) => {
		if (
			inc?.includes(region.label.toLocaleUpperCase()) &&
			not(exc?.includes(region.label.toLocaleUpperCase()))
		) {
			return region
		}

		const options = region.options?.filter(({ alpha2, alpha3, numeric }) => {
			return inc || exc
				? inc &&
					(inc?.includes(alpha2 as string) ||
						inc?.includes(alpha3 as string) ||
						inc?.includes(String(numeric))) &&
					not(
						exc &&
							(exc?.includes(alpha2 as string) ||
								exc?.includes(alpha3 as string) ||
								exc?.includes(String(numeric))),
					)
				: true
		})

		return options?.length
			? {
				...region,
				options,
			}
			: ({})
	}).filter((item) => "label" in item)
}
