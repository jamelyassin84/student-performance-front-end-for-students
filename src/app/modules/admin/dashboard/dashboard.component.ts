import { StudentService } from 'app/app-core/services/student.service'
import { Component, OnInit } from '@angular/core'
import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service'
import { StudentPerformance } from 'app/app-core/store/performance/performance.model'
import { take } from 'rxjs'
import { toImplicitRating, toNotNan } from '@global_packages/helpers/helpers'
import { dbwAnimations } from '@global_packages/animations/animation.api'
import { RecordsService } from 'app/app-core/store/records/records.service'
import { Record } from 'app/app-core/store/records/records.model'
import { PIE_CHART_CONFIG } from 'app/app-core/configs/pie-chart.config'
import { LINE_CHART_CONFIG } from 'app/app-core/configs/line-chart.config'

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	animations: [...dbwAnimations],
})
export class DashboardComponent implements OnInit {
	constructor(
		private _studentService: StudentService,
		private _surveyPerformanceService: SurveyPerformanceService,
		private _recordsService: RecordsService,
	) {}

	performances: StudentPerformance[] = []

	averagePerformance: number = 0

	student$ = this._studentService.student$

	data: any

	chart = { ...LINE_CHART_CONFIG }

	pie = { ...PIE_CHART_CONFIG }

	SPLIT_VALUE = ' - '

	ngOnInit(): void {
		this.getPerformances()
		this.getRecords()
	}

	identity = (item: any) => item

	getRecords() {
		this._studentService.student$.pipe(take(1)).subscribe((student) => {
			this._recordsService
				.findOne(student.id)
				.subscribe((records: Record[]) => {
					let semester = records[0].semester

					let year_level = records[0].year_level

					let labels = []

					let series = []

					records.forEach((record) => {
						let total = 0

						const latestRecord = records.filter(
							(latestRecord) =>
								latestRecord.semester === semester &&
								latestRecord.year_level === year_level,
						).length

						if (
							record.semester === semester &&
							record.year_level === year_level
						) {
							total += record.score
							if (!labels.includes(record.survey_form.description)) {
								labels.push(`${record.survey_form.description}`)

								series.push(total / latestRecord)

								return
							}

							const index = labels.findIndex(
								(label) => label === record.survey_form.description,
							)

							if (index >= 0) {
								series[index] = series[index] + total / latestRecord
							}
						}
					})

					this.pie.labels = [...labels]

					this.pie.series = [...series].filter((value, index) => index <= 3)
				})
		})
	}

	getPerformances() {
		this._studentService.student$.pipe(take(1)).subscribe((student) => {
			this._surveyPerformanceService
				.query(`?student_id=${student.id}`)
				.subscribe((performances: StudentPerformance[]) => {
					console.log(performances)
					let total = 0

					performances.forEach((performance) => {
						this.chart.series[0].data.forEach((dataset, datasetIndex) => {
							if (
								`${performance.year_level} Yr${this.SPLIT_VALUE}${performance.semester} Sem` ===
								dataset.x
							) {
								this.chart.series[0].data[datasetIndex].y = [
									performance.performance,
								]
							}
						})

						total += performance.performance
					})
					if (performances.length !== 0) {
						this.averagePerformance = total / performances.length

						this.performances = performances
					}
				})
		})
	}

	toImplicitRating(performance: number) {
		return toImplicitRating(performance)
	}
}
