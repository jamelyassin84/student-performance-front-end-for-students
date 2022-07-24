import { StudentService } from 'app/app-core/services/student.service'
import { Component, OnInit } from '@angular/core'
import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service'
import { StudentPerformance } from 'app/app-core/store/performance/performance.model'
import { take } from 'rxjs'
import { toImplicitRating } from '@global_packages/helpers/helpers'
import { dbwAnimations } from '@global_packages/animations/animation.api'

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
	) {}

	performances: StudentPerformance[] = []

	averagePerformance: number = 0

	student$ = this._studentService.student$

	data: any

	chart = {
		chart: {
			fontFamily: 'inherit',
			foreColor: 'inherit',
			height: '100%',
			type: 'line',
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		colors: ['#FACB1F', '#94A3B8'],
		dataLabels: {
			enabled: true,
			enabledOnSeries: [0],
			background: {
				borderWidth: 0,
			},
		},
		grid: {
			borderColor: 'var(--fuse-border)',
		},
		labels: ['1st Yr-2nd Sem', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		legend: {
			show: false,
		},
		plotOptions: {
			bar: {
				columnWidth: '50%',
			},
		},
		series: [
			{
				name: '1',
				data: [
					{ x: '2nd Yr - 1st Sem', y: [0] },
					{ x: '2nd Yr - 2nd Sem', y: [0] },
					{ x: '3rd Yr - 1st Sem', y: [0] },
					{ x: '3rd Yr - 2nd Sem', y: [0] },
					{ x: '4th Yr - 1st Sem', y: [0] },
					{ x: '4th Yr - 2nd Sem', y: [0] },
				],
			},
		],
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.75,
				},
			},
		},
		stroke: {
			width: [3, 0],
		},
		tooltip: {
			followCursor: true,
			theme: 'dark',
		},
		xaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				color: 'var(--fuse-border)',
			},
			labels: {
				style: {
					colors: 'var(--fuse-text-secondary)',
				},
			},
			tooltip: {
				enabled: false,
			},
		},
		yaxis: {
			labels: {
				offsetX: -16,
				style: {
					colors: 'var(--fuse-text-secondary)',
				},
			},
		},
	}

	SPLIT_VALUE = ' - '

	ngOnInit(): void {
		this.getPerformances()
	}

	identity = (item: any) => item

	getPerformances() {
		this._studentService.student$.pipe(take(1)).subscribe((student) => {
			this._surveyPerformanceService
				.query(`?student_id=${student.id}`)
				.subscribe((performances: StudentPerformance[]) => {
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

					this.averagePerformance = total / performances.length

					this.performances = performances
				})
		})
	}

	toImplicitRating(performance: number) {
		return toImplicitRating(performance)
	}
}
