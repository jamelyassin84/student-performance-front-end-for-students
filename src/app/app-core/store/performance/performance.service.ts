import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { StudentPerformance } from './performance.model'
import { BaseService } from '../../../../@global_packages/api/base.api'

@Injectable({ providedIn: 'root' })
export class SurveyPerformanceService extends BaseService<any> {
	constructor(_http: HttpClient) {
		super(_http, 'performances')
	}

	current$: BehaviorSubject<StudentPerformance | null> =
		new BehaviorSubject<StudentPerformance | null>(null)
}
