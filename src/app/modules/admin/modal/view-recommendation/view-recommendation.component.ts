import {
	ChangeDetectorRef,
	Component,
	HostListener,
	OnInit,
} from '@angular/core'
import { dbwAnimations } from '@global_packages/animations/animation.api'
import { StudentService } from 'app/app-core/services/student.service'
import { combineLatest, take } from 'rxjs'
import { ViewRecommendationModal } from './view-recommendation.service'
import regression from 'regression'

@Component({
	selector: 'view-recommendation',
	templateUrl: './view-recommendation.component.html',
	styleUrls: ['./view-recommendation.component.scss'],
	animations: [...dbwAnimations],
})
export class ViewRecommendationComponent implements OnInit {
	constructor(
		private _cdr: ChangeDetectorRef,
		private _studentService: StudentService,
		private _viewRecommendationModal: ViewRecommendationModal,
	) {}

	@HostListener('document:keydown.escape')
	onEscapePress() {
		this.opened$.next(false)
	}

	opened$ = this._viewRecommendationModal.opened$

	recommendations: any

	ngOnInit(): void {
		const result = regression.linear([
			[90, 95],
			[50, 97],
			[60, 92],
			[90, 91],
		])

		const gradient = result.equation[0]
		const yIntercept = result.equation[1]

		const predictions = result.predict(90)

		let total = 0

		for (let value of predictions) {
			total += value
		}

		const averagePrediction = total / predictions.length

		console.log(averagePrediction)
	}

	ngAfterViewInit(): void {
		combineLatest([
			this._studentService.student$,
			this._viewRecommendationModal.performance$,
		])
			.pipe(take(1))
			.subscribe((results) => {
				const [student, performance] = results

				this._viewRecommendationModal
					.query(
						`?student_id=${student.id}&year_level=${performance.year_level}&semester=${performance.semester}`,
					)
					.subscribe(
						(recommendations) => (this.recommendations = recommendations),
					)
			})

		this._cdr.detectChanges()
	}

	ngOnDestroy(): void {
		this._cdr.detach()
	}
}
