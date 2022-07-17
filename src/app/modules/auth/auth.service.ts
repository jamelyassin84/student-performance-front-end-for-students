import { HttpClient } from '@angular/common/http'
import { BaseService } from '../../../@global_packages/api/base.api'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class RegisterAPI extends BaseService<any> {
	constructor(_http: HttpClient) {
		super(_http, 'auth/register')
	}
}

@Injectable({ providedIn: 'root' })
export class LoginAPI extends BaseService<any> {
	constructor(_http: HttpClient) {
		super(_http, 'auth/login')
	}
}
