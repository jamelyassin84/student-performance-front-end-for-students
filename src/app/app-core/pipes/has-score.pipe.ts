import { Pipe, PipeTransform } from '@angular/core'
import { SurveyQuestion } from '../store/questions/questions.model'

@Pipe({
	name: 'has_score',
})
export class HasScorePipe implements PipeTransform {
	transform(results: any, question: SurveyQuestion): boolean {
		let hasScore = false

		for (let result of results) {
			for (let array of result) {
				if (array.score !== 0 && array.question === question.title) {
					hasScore = true

					break
				}
			}
		}

		return hasScore
	}
}
