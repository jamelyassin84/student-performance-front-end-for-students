import { BaseService } from '@global_packages/api/base.api'
import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { StudentPerformance } from 'app/app-core/store/performance/performance.model'

@Injectable({ providedIn: 'root' })
export class ViewRecommendationModal extends BaseService<any> {
	constructor(http: HttpClient) {
		super(http, 'recommendations')
	}

	opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

	performance$: BehaviorSubject<StudentPerformance | null> =
		new BehaviorSubject<StudentPerformance | null>(null)
}
