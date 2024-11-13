
export const CALENDAR = {
	BUDDHIST: "buddhist",
	CHINESE: "chinese",
	COPTIC: "coptic",
	DANGI: "dangi",
	ETHIOPIC: "ethiopic",
	GREGORY: "gregory",
	HEBREW: "hebrew",
	INDIAN: "indian",
	ISLAMIC: "islamic",
	ISO8601: "iso8601",
	JAPANESE: "japanese",
	PERSIAN: "persian",
	ROC: "roc",
}

export const DEFAULT_CALENDAR = CALENDAR.ISO8601

export const DEFAULT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
	// weekday: "long",
	year: "numeric",
	month: "short",
	day: "numeric",
	formatMatcher: "basic",
}

export const DEFAULT_LOCALES = ["en-NZ", "en-US", "en-GB", "en-AU"]
