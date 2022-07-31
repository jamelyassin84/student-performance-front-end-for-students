import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@global_packages/api/base.api'

@Injectable({ providedIn: 'root' })
export class RecordsService extends BaseService<any> {
	constructor(_http: HttpClient) {
		super(_http, 'records')
	}
}
