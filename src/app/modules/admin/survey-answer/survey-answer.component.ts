import { GuidanceRequestService } from './../../../app-core/store/guidance-request/guidance-request.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { dbwAnimations } from '@global_packages/animations/animation.api'
import {
	hasData,
	toImplicitRating,
	toNegativeScore,
} from '@global_packages/helpers/helpers'
import { SEMESTERS, YEAR_LEVELS } from 'app/app-core/constants/app.constants'
import { SurveyForm } from 'app/app-core/store/form/form.model'
import { SurveyFormService } from 'app/app-core/store/form/form.service'
import { SurveyQuestion } from 'app/app-core/store/questions/questions.model'
import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service'
import { StudentService } from 'app/app-core/services/student.service'
import { combineLatest, take } from 'rxjs'
import { Record } from 'app/app-core/store/records/records.model'
import { RecordsService } from 'app/app-core/store/records/records.service'
import { ScrollService } from '@global_packages/services/scroll.service'

@Component({
	selector: 'app-survey-answer',
	templateUrl: './survey-answer.component.html',
	styleUrls: ['./survey-answer.component.scss'],
	animations: [...dbwAnimations],
})
export class SurveyAnswerComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private _scrollService: ScrollService,
		private _recordsService: RecordsService,
		private _studentService: StudentService,
		private _surveyFormService: SurveyFormService,
		private _surveyPerformanceService: SurveyPerformanceService,
	) {}

	SEMESTERS = SEMESTERS

	YEAR_LEVELS = YEAR_LEVELS

	forms: SurveyForm[] = []

	currentForm?: SurveyForm

	currentQuestion?: SurveyQuestion

	ratings: string[] = [
		'Very much like me',
		'Mostly like me',
		'Somewhat like me',
		'Not much like me',
		'Not like me at all',
	].reverse()

	form: FormGroup = this._formBuilder.group({
		year_level: ['2nd', [Validators.required]],
		semester: ['1st', [Validators.required]],
		performance: [0, [Validators.required]],
	})

	showSubmitSurvey = false

	results: any = []

	ngOnInit(): void {
		this.getForms()
	}

	getForms() {
		this._surveyFormService.get().subscribe((forms: SurveyForm[]) => {
			if (hasData(forms)) {
				this.forms = forms

				this.currentForm = forms[0]

				this.results = []

				forms.forEach((form) => {
					let score = []

					form.questions.forEach((question) => {
						score.push({
							question: question.id,
							score: 0,
							survey_form_id: question.survey_form_id,
						})
					})

					this.results.push(score)
				})

				if (this.currentForm && hasData(forms[0].questions)) {
					this.currentQuestion = forms[0].questions[0]
				}
			}
		})
	}

	identity = (item: any) => item

	onNext(formIndex: number, form: SurveyForm) {
		if (formIndex === this.forms.length - 1) {
			this.showSubmitSurvey = true

			return
		}

		this.currentForm = this.forms[formIndex + 1]

		this._scrollService.scrollToTop()
	}

	setScore(question: SurveyQuestion, index: number) {
		const formIndex = this.forms.findIndex((form) => {
			return form.id.toString() === question.survey_form_id
		})

		const resultIndex = this.results[formIndex].findIndex((result) => {
			return result.question.toString() === question.id.toString()
		})

		if (question.question_value_type === 'positive') {
			this.results[formIndex][resultIndex].score = (index + 1) * 20
		} else {
			this.results[formIndex][resultIndex].score =
				toNegativeScore(index + 1) * 20
		}
	}

	save() {
		this._studentService.student$.pipe(take(1)).subscribe((student) => {
			let records: Record[] = []

			let performances = []

			let performance = 0

			for (let result of this.results) {
				let averageFormPerformance = 0

				let score = 9

				for (let array of result as {
					question: string
					score: number
					survey_form_id: string
				}[]) {
					const { year_level, semester } = this.form.value

					records.push({
						question_id: array.question,
						score: array.score,
						survey_form_id: array.survey_form_id,
						year_level: year_level,
						semester: semester,
						student_id: student.id,
					})

					score += array.score
				}

				averageFormPerformance = score / result.length

				performances.push(averageFormPerformance)
			}

			let formRating = 0

			performances.forEach((rating) => {
				formRating += rating
			})

			performance = formRating / this.results.length

			this.form.get('performance').setValue(performance)

			combineLatest([
				this._surveyPerformanceService.post({
					...this.form.value,
					student_id: student.id,
					gpa: 0,
				}),

				this._recordsService.post({ data: records }),
			])
				.pipe(take(1))
				.subscribe((results) => {
					const [performance, records] = results

					if (performance && records) {
						alert(
							`Survey Submitted. Keep track of your scores in survey results.`,
						)

						location.reload()
					}
				})
		})
	}

	hasFormAnswered(form: SurveyForm): boolean {
		for (let result of this.results) {
			for (let array of result) {
				for (let question of form.questions) {
					if (array.score === 0 && question.id === array.question) {
						return false
					}
				}
			}
		}

		return true
	}

	hasAnswered(question: SurveyQuestion): boolean {
		let hasScore = false

		for (let result of this.results) {
			for (let array of result) {
				if (array.score !== 0 && array.question === question.id) {
					hasScore = true

					break
				}
			}
		}

		return hasScore
	}

	hasRated(question: SurveyQuestion, rating: number): boolean {
		let hasRated = false

		let index =
			question.question_value_type === 'negative'
				? toNegativeScore(rating) * 20
				: rating * 20

		for (let result of this.results) {
			for (let array of result) {
				if (array.score !== 0 && array.question === question.title) {
					if (array.score === index) {
						hasRated = true
					}
				}
			}
		}

		return hasRated
	}
}
