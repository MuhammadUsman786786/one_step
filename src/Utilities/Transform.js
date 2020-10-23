export const getFormattedSeconds = (totalSeconds) => {
	let unit = ''
	if (totalSeconds >= 0 && totalSeconds < 60) {
		unit = 'sec'
	} else if (totalSeconds < 3600) {
		unit = 'min'
	} else {
		unit = 'hr'
	}
	const hours = Math.floor(totalSeconds / 3600)
	totalSeconds %= 3600
	const minutes = Math.floor(totalSeconds / 60)
	const seconds = totalSeconds % 60
	let formattedTime = ''
	if(hours>0){
		formattedTime = formattedTime + `${ hours } : `
	}
	if (minutes > 0) {
		formattedTime = formattedTime + `${ minutes } : `
	}
	formattedTime = formattedTime + `${ seconds }`
	return {
		hours,
		minutes,
		seconds,
		formattedTime,
		unit
	}
}
