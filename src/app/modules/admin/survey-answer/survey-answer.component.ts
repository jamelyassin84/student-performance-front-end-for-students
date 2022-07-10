import { Component, OnInit } from '@angular/core'
import { SEMESTERS, YEAR_LEVELS } from 'app/app-core/constants/app.constants'
import {
	GRIT_SCALE,
	SELF_EFFICACY,
	SELF_REGULATION_QUESTIONS,
	SurveyForm,
	TIME_MANAGEMENT_QUESTIONS,
} from './survey.form'

@Component({
	selector: 'app-survey-answer',
	templateUrl: './survey-answer.component.html',
	styleUrls: ['./survey-answer.component.scss'],
})
export class SurveyAnswerComponent implements OnInit {
	SEMESTERS = SEMESTERS
	YEAR_LEVELS = YEAR_LEVELS

	GRIT_SCALE = GRIT_SCALE
	// SELF_EFFICACY = SELF_EFFICACY
	TIME_MANAGEMENT_QUESTIONS = TIME_MANAGEMENT_QUESTIONS
	SELF_REGULATION_QUESTIONS = SELF_REGULATION_QUESTIONS

	currentForm: SurveyForms = 'gritScaleIndex'

	gritScaleIndex: number = 0
	gritScaleIndexScore: Score[] = []

	selfEfficacyIndex: number = 0
	selfEfficacyIndexScore: Score[] = []

	timeManageMentIndex: number = 0
	timeManageMentIndexScore: Score[] = []

	selfRegulationIndex: number = 0
	selfRegulationIndexScore: Score[] = []

	constructor() {}

	ngOnInit(): void {}

	setScore(type: SurveyForms, index: number, score: Score) {
		this[`${type}Score`].splice(index, 1, score)
	}

	identity = (item: any) => item

	includesFormIndex(
		type: SurveyForms,
		formIndex: number,
		index: number,
	): boolean {
		const currentScore = this[`${type}Score`][index]

		if (
			currentScore &&
			formIndex === index &&
			formIndex === currentScore.index
		) {
			return true
		}

		return false
	}

	onNext(type: SurveyForms, formType: SurveyForm[]) {
		const index = survey_form_types.findIndex((form) => form === type)

		if (
			type === survey_form_types[survey_form_types.length - 1] &&
			formType.length - 1 === this[`${type}`]
		) {
			alert('Form Submitted')
		}

		if (formType.length - 1 === this[`${type}`]) {
			this.currentForm = survey_form_types[index + 1]

			return
		}

		this[`${type}`]++
	}

	onBack(type: SurveyForms) {
		this[`${type}`]--
	}
}

export const survey_form_types: SurveyForms[] = [
	'gritScaleIndex',
	// 'selfEfficacyIndex',
	'timeManageMentIndex',
	'selfRegulationIndex',
]

export type SurveyForms =
	| 'gritScaleIndex'
	// | 'selfEfficacyIndex'
	| 'timeManageMentIndex'
	| 'selfRegulationIndex'

export interface Score {
	index: number
	rating: number
}
