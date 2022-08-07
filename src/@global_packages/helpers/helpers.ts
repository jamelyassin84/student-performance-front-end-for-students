export const slugify = (text: string) => {
	return text
		.toString() // Cast to string
		.toLowerCase() // Convert the string to lowercase letters
		.normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
		.trim() // Remove whitespace from both sides of a string
		.replace(/\s+/g, '_') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '_') // Replace multiple - with single -
}

export const slugToSentence = (slug: string) => {
	return slug.split('_').join(' ')
}

export function toCardExpiry(digits: string) {
	const expiry = digits.split('')

	return { month: expiry[0] + expiry[1], year: '20' + expiry[2] + expiry[3] }
}

export function empty(value: any): boolean {
	if (!value || value === '' || value === null || value === undefined) {
		return true
	}

	return false
}

export function hasData(value: any[]): boolean {
	if (value.length !== 0) {
		return true
	}

	return false
}

export function tOTime(value: number | string): string {
	if (value.toString().charAt(0) === '0' && value.toString().length === 2) {
		return value.toString()
	}

	if (
		value.toString().split(':')[1] &&
		value.toString().split(':')[1].length === 3
	) {
		return (value < 10 ? '0' : '') + value.toString().slice(0, -1)
	}

	return ((value < 10 ? '0' : '') + value).toString()
}

export function toTwelve(time: any): any {
	if (empty(time)) {
		return ''
	}

	let hour = time.split(':')[0]

	let min = time.split(':')[1]

	if (empty(min) || empty(hour)) {
		return ''
	}

	let part = hour > 12 ? 'pm' : 'am'

	if (parseInt(hour) === 0) hour = 12

	min = (min + '').length === 1 ? `0${min}` : min

	hour = hour > 12 ? hour - 12 : hour

	hour = (hour + '').length === 1 ? `0${hour}` : hour

	return `${hour}:${min} ${part}`
}

export function toFixedTwo(value: number): string {
	return (value < 10 ? '0' : '') + value
}

export function toSentenceCase(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export function toNegativeScore(score: number): number {
	if (score === 5) {
		return 1
	}

	if (score === 4) {
		return 2
	}

	if (score === 2) {
		return 4
	}

	if (score === 1) {
		return 5
	}

	return score
}

export function toImplicitRating(rating: number): {
	title: string
	recommendations: string[]
} {
	if (rating >= 95) {
		return {
			title: 'Excellent',
			recommendations: [
				'Keep it doing what you’re doing!',
				'Make sure you eat, sleep, and exercise regularly!',
			],
		}
	}

	if (rating >= 90) {
		return {
			title: 'Amazing',
			recommendations: [
				'Review your notes a little more ',
				'Organize school work ',
			],
		}
	}

	if (rating >= 85) {
		return {
			title: 'Great!Keep up the pace!',
			recommendations: [
				'Review more frequently before tests',
				'Focus on organization',
			],
		}
	}

	if (rating >= 80) {
		return {
			title: 'Youre doing good!Theres always room for improvement!',
			recommendations: [
				'Focus on key points of the subject',
				'Be punctual on attendance & assignments',
				'Manage time wisely',
			],
		}
	}

	if (rating >= 75) {
		return {
			title:
				'Nice job!Youre doing a fair job at your work.Lets aim even higher!',
			recommendations: [
				'Review your notes more',
				'Try a new learning strategy',
				'Dont procrastinate',
			],
		}
	}

	if (rating >= 70) {
		return {
			title: 'Not bad!Theres still a lot of room to imrove!',
			recommendations: [
				'Have a study session with your classmates ',
				'Change study space',
				'Attend class punctually',
				'Do homework regularly',
			],
		}
	}

	if (rating >= 65) {
		return {
			title: 'Keep trying! Lets work harder!',
			recommendations: [
				'Ask your teacher for guidance',
				'Make flashcards or rewrite notes for the topics youre struggling with',
				'Do not procrastinate with homework ',
			],
		}
	}

	if (rating <= 60 || rating >= 60) {
		return {
			title: 'Dont give up Hang in there,champ!',
			recommendations: [
				'Talk to your teacher & ask for guidance',
				'Pay attention & sit at the front',
				'Manage your time better',
				'take & review your notes',
			],
		}
	}
}

export function toNotNan(value: number): number {
	if (value === NaN) {
		return 0
	}

	return value
}
