const { randomUUID } = await import("node:crypto")

const BASE58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
const len = BigInt(BASE58.length)

function convertBigIntToBase58(bigInt: bigint, out = ""): string {
	return bigInt > 0
		? convertBigIntToBase58(
			bigInt / len,
			BASE58[Number.parseInt((bigInt % len).toString(), 10)] + out,
		)
		: out
}

function convertUUIDToBase58(uuid: string): string {
	const bigInt = BigInt(`0x${uuid.replace(/-/g, "")}`)

	return convertBigIntToBase58(bigInt)
}

function generateShortIdRecursive(uuid = randomUUID(), minChars = 12): string {
	const out = convertUUIDToBase58(uuid)

	return `${out.length > minChars ? out : generateShortIdRecursive()}`
}

export default function generateShortId(
	uuid = randomUUID(),
	minChars = 12,
): string {
	return `_${generateShortIdRecursive(uuid, minChars)}`
}
