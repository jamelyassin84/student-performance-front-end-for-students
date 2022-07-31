import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {
	Course,
	COURSES,
	Degree,
	DEPARTMENTS1,
} from './../../../app-core/constants/app.constants'
import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { DEGREES, DEPARTMENTS } from 'app/app-core/constants/app.constants'
import { Subject, takeUntil } from 'rxjs'
import { StudentService } from 'app/app-core/services/student.service'

@Component({
	selector: 'app-survey-account-information',
	templateUrl: './survey-account-information.component.html',
	styleUrls: ['./survey-account-information.component.scss'],
})
export class SurveyAccountInformationComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private _studentService: StudentService,
		private _cdr: ChangeDetectorRef,
	) {}

	unsubscribe$: Subject<any> = new Subject()

	user$ = this._studentService.user$

	form: FormGroup = this._formBuilder.group({
		id: [''],
		name: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		id_number: ['', Validators.required],
		sex: ['Male'],
		phone: ['', Validators.required],
		department: [DEPARTMENTS[0], Validators.required],
		degree: ['', Validators.required],
		course: ['', Validators.required],
		major: [''],
		address: ['', Validators.required],
	})

	DEPARTMENTS = DEPARTMENTS1

	DEGREES: Degree[] = []

	COURSES: Course[] = []

	MAJORS: string[] = []

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.user$.pipe(takeUntil(this.unsubscribe$)).subscribe((user) => {
			this.form.setValue({
				id: user.id,
				name: user.student.name,
				email: user.email,
				id_number: '',
				sex: user.student.sex,
				phone: user.student.phone,
				department: user.student.department,
				degree: user.student.degree,
				major: user.student.major,
				address: user.student.address,
				course: user.student.course,
			})
		})

		this._cdr.detectChanges()
	}

	onDepartmentChange(data: string) {
		this.COURSES = []
		this.MAJORS = []
		this.form.get('course')?.setValue('')
		this.form.get('major')?.setValue('')
		this.form.get('degree')?.setValue('')

		this.DEGREES = DEPARTMENTS1.find(
			(department) => department.name === data,
		).degrees
	}

	onDegreeChange(data: string) {
		this.COURSES = []
		this.MAJORS = []
		this.form.get('course')?.setValue('')
		this.form.get('major')?.setValue('')

		this.COURSES = this.DEGREES.find((degree) => degree.name === data).courses
	}

	onCourseChange(data: string) {
		this.MAJORS = []
		this.form.get('major')?.setValue('')

		this.MAJORS = this.COURSES.find((course) => course.name === data).majors
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(null)

		this.unsubscribe$.complete()

		this._cdr.detach()
	}

	identity = (item: any) => item

	update() {
		if (this.form.invalid) {
			return
		}

		this.form.disable()

		this._studentService.update(this.form.value.id, this.form.value).subscribe({
			next: (user) => {
				localStorage.setItem('user', JSON.stringify(user))

				this.user$.next(user)

				this._studentService.student$.next(user.student)

				alert('Information Updated')

				this.form.enable()
			},
			error: (err) => {
				alert('Error Updating Information')

				this.form.enable()
			},
		})
	}
}
