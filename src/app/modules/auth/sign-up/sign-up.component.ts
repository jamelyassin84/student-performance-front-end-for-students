import { LoginAPI, RegisterAPI } from './../auth.service'
import {
	Course,
	Degree,
	DEGREES,
	DEPARTMENTS1,
} from './../../../app-core/constants/app.constants'
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { fuseAnimations } from '@fuse/animations'
import { FuseAlertType } from '@fuse/components/alert'
import { COURSES, DEPARTMENTS } from 'app/app-core/constants/app.constants'

@Component({
	selector: 'auth-sign-up',
	templateUrl: './sign-up.component.html',
	encapsulation: ViewEncapsulation.None,
	animations: fuseAnimations,
})
export class AuthSignUpComponent implements OnInit {
	@ViewChild('signUpNgForm') signUpNgForm: NgForm

	alert: { type: FuseAlertType; message: string } = {
		type: 'success',
		message: '',
	}
	signUpForm: FormGroup
	showAlert: boolean = false

	DEPARTMENTS = DEPARTMENTS1

	DEGREES: Degree[] = []

	COURSES: Course[] = []

	MAJORS: string[] = []

	constructor(
		private _formBuilder: FormBuilder,
		private _router: Router,
		private _loginAPI: LoginAPI,
		private _registerAPI: RegisterAPI,
	) {}

	ngOnInit(): void {
		this.signUpForm = this._formBuilder.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			confirm_password: ['', Validators.required],
			sex: ['Male'],
			phone: ['', Validators.required],
			department: [DEPARTMENTS[0], Validators.required],
			degree: ['', Validators.required],
			course: ['', Validators.required],
			major: [''],
			address: ['', Validators.required],
			agreements: ['', Validators.requiredTrue],
		})
	}

	onDepartmentChange(data: string) {
		this.COURSES = []
		this.MAJORS = []
		this.signUpForm.get('course')?.setValue('')
		this.signUpForm.get('major')?.setValue('')
		this.signUpForm.get('degree')?.setValue('')

		this.DEGREES = DEPARTMENTS1.find(
			(department) => department.name === data,
		).degrees
	}

	onDegreeChange(data: string) {
		this.COURSES = []
		this.MAJORS = []
		this.signUpForm.get('course')?.setValue('')
		this.signUpForm.get('major')?.setValue('')

		this.COURSES = this.DEGREES.find((degree) => degree.name === data).courses
	}

	onCourseChange(data: string) {
		this.MAJORS = []
		this.signUpForm.get('major')?.setValue('')

		this.MAJORS = this.COURSES.find((course) => course.name === data).majors

		console.log(data, this.MAJORS)
	}

	identity = (item: any) => item

	signUp(): void {
		if (
			this.signUpForm.invalid ||
			this.signUpForm.get('password')?.value !==
				this.signUpForm.get('confirm_password')?.value
		) {
			this.alert = {
				type: 'error',
				message:
					'Form is invalid or password and confirm password does not match.',
			}

			this.showAlert = true

			return
		}

		this.signUpForm.disable()

		this.showAlert = false

		this._registerAPI.post(this.signUpForm.value).subscribe({
			next: (data) => {
				localStorage.setItem('access_token', data.token.plainTextToken)

				localStorage.setItem('user', data.token.user)

				this._router.navigate(['/dashboard'])
			},
			error: (err) => {
				this.signUpForm.enable()

				this.alert = {
					type: 'error',
					message: err.error,
				}

				this.showAlert = true
			},
		})
	}
}
