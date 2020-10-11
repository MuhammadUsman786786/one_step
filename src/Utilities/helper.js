
import moment from 'moment'

export const getFormatTime = (seconds = null) => {
  if (!seconds) {
    return `0:00`
  }

  if (seconds < 60) {
    return `0:${seconds || '00'} <sub class='sub_style'>sec</sub>`
  }

  const duration = moment.duration(seconds, 's')
  const secs = duration.seconds()
  const mins = duration.minutes()

  if (seconds < 3600) {
    return `${mins || '0'}:${secs || '00'} <sub class='sub_style'>min</sub>`
  }

  const hours = duration.hours()

  return `${hours || '0'}:${mins || '00'}:${secs || '00'} <sub class='sub_style'>hr</sub>`
}