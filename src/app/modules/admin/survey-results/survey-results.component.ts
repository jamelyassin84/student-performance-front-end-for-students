import { StudentPerformance } from './../../../app-core/store/performance/performance.model'
import { Component, OnInit } from '@angular/core'
import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service'
import { StudentService } from 'app/app-core/services/student.service'
import { take } from 'rxjs'
import { toImplicitRating } from '@global_packages/helpers/helpers'
import { GuidanceRequestService } from 'app/app-core/store/guidance-request/guidance-request.service'
import { ViewRecommendationModal } from '../modal/view-recommendation/view-recommendation.service'

@Component({
	selector: 'app-survey-results',
	templateUrl: './survey-results.component.html',
	styleUrls: ['./survey-results.component.scss'],
})
export class SurveyResultsComponent implements OnInit {
	constructor(
		private _studentService: StudentService,
		private _guidanceRequestService: GuidanceRequestService,
		private _viewRecommendationModal: ViewRecommendationModal,
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

	requestGuidanceConsultation(performance: StudentPerformance) {
		this._studentService.student$.pipe(take(1)).subscribe((student) => {
			this._guidanceRequestService
				.post({ ...performance, student_id: student.id, has_requested: true })
				.subscribe(() => {
					alert('You have an appointment for guidance consultation')

					const index = this.performances.findIndex(
						(oldPerformance) => performance.id === oldPerformance.id,
					)

					if (index >= 0) {
						this.performances[index] = { ...performance, has_requested: true }
					}
				})
		})
	}

	toImplicitRating(performance: number) {
		return toImplicitRating(performance)
	}

	viewRecommendation(performance: StudentPerformance) {
		this._viewRecommendationModal.opened$.next(true)

		this._viewRecommendationModal.performance$.next(performance)
	}
}
