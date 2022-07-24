import { StudentPerformance } from './../../../app-core/store/performance/performance.model'
import { Component, OnInit } from '@angular/core'
import { SEMESTERS, YEAR_LEVELS } from 'app/app-core/constants/app.constants'
import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service'
import { StudentService } from 'app/app-core/services/student.service'
import { take } from 'rxjs'
import { toImplicitRating } from '@global_packages/helpers/helpers'

@Component({
	selector: 'app-survey-results',
	templateUrl: './survey-results.component.html',
	styleUrls: ['./survey-results.component.scss'],
})
export class SurveyResultsComponent implements OnInit {
	constructor(
		private _studentService: StudentService,
		private _surveyPerformanceService: SurveyPerformanceService,
	) {}

	performances: StudentPerformance[] = []

	ngOnInit(): void {
		this.getPerformances()
	}

	identity = (item: any) => item

	getPerformances() {
		this._studentService.student$.pipe(take(1)).subscribe((student) => {
			this._surveyPerformanceService
				.query(`?student_id=${student.id}`)
				.subscribe((performances) => {
					this.performances = performances
				})
		})
	}

	toImplicitRating(performance: number) {
		return toImplicitRating(performance)
	}
}
