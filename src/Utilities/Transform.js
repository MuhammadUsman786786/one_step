export const getFormattedSeconds = (totalSeconds) => {
	// const hours = Math.floor(totalSeconds / 3600)
	// totalSeconds %= 3600
	const minutes = Math.floor(totalSeconds / 60)
	const seconds = totalSeconds % 60
	let formattedTime = ''
	if (minutes > 0) {
		formattedTime = formattedTime + `${ minutes } : `
	}
	formattedTime = formattedTime + `${ seconds }`
	return {
		// hours,
		minutes,
		seconds,
		formattedTime
	}
}
