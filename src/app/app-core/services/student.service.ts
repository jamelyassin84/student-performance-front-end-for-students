import { HttpClient } from '@angular/common/http'
import { BaseService } from './../../../@global_packages/api/base.api'
import { PHPBaseModel } from './../../../@global_packages/models/core.model'
import { Injectable } from '@angular/core'
import { BehaviorSubject, combineLatest, take } from 'rxjs'
import { empty } from '@global_packages/helpers/helpers'

@Injectable({ providedIn: 'root' })
export class StudentService extends BaseService<any> {
	constructor(http: HttpClient) {
		super(http, 'students')

		combineLatest([this.student$, this.user$])
			.pipe(take(1))
			.subscribe((results) => {
				const [student, user] = results

				if (empty(student) || empty(user)) {
					this.student$.next(
						JSON.parse(localStorage.getItem('user')).student || null,
					)

					this.user$.next(JSON.parse(localStorage.getItem('user')) || null)
				}
			})
	}

	student$: BehaviorSubject<Student | null> =
		new BehaviorSubject<Student | null>(null)

	user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)
}

export interface Student extends PHPBaseModel {
	name: string
	sex: string
	phone: string
	department: string
	degree: string
	course: string
	major: string
	address: string
	user_id: string
	id_number: string
}

export interface User extends PHPBaseModel {
	email: string
	type: string
	student: Student
}
