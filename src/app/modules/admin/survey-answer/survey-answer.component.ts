import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { dbwAnimations } from '@global_packages/animations/animation.api'
import { hasData, toNegativeScore } from '@global_packages/helpers/helpers'
import { SEMESTERS, YEAR_LEVELS } from 'app/app-core/constants/app.constants'
import { SurveyForm } from 'app/app-core/store/form/form.model'
import { SurveyFormService } from 'app/app-core/store/form/form.service'
import { SurveyQuestion } from 'app/app-core/store/questions/questions.model'

@Component({
	selector: 'app-survey-answer',
	templateUrl: './survey-answer.component.html',
	styleUrls: ['./survey-answer.component.scss'],
	animations: [...dbwAnimations],
})
export class SurveyAnswerComponent implements OnInit {
	constructor(
		private _surveyFormService: SurveyFormService,
		private _formBuilder: FormBuilder,
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
	]

	form: FormGroup = this._formBuilder.group({
		year_level: ['1st', [Validators.required]],
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
						score.push({ question: question.title, score: 0 })
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
		const questionIndex = this.forms[formIndex].questions.findIndex(
			(question) => question.id === this.currentQuestion.id,
		)

		if (
			questionIndex === this.currentForm.questions.length - 1 &&
			formIndex === this.forms.length - 1
		) {
			this.showSubmitSurvey = true

			return
		}

		if (questionIndex === this.currentForm.questions.length - 1) {
			this.currentForm = this.forms[formIndex + 1]

			if (hasData(this.forms[formIndex + 1].questions)) {
				this.currentQuestion = this.forms[formIndex + 1].questions[0]
			}

			return
		}

		this.currentQuestion = form.questions[questionIndex + 1]
	}

	setScore(question: SurveyQuestion, index: number) {
		const formIndex = this.forms.findIndex((form) => {
			return form.id.toString() === question.survey_form_id
		})

		const resultIndex = this.results[formIndex].findIndex((result) => {
			return result.question.toString() === question.title.toString()
		})

		if (question.question_value_type === 'positive') {
			this.results[formIndex][resultIndex].score = index + 1
		} else {
			this.results[formIndex][resultIndex].score = toNegativeScore(index + 1)
		}

		console.log(this.results)
	}

	save() {
		alert('Survey Submitted. Please check your performance on survey results.')
	}
}
