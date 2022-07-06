import { COURSES } from './../../../app-core/constants/app.constants'
import { Component, OnInit } from '@angular/core'
import { DEGREES, DEPARTMENTS } from 'app/app-core/constants/app.constants'

@Component({
	selector: 'app-survey-account-information',
	templateUrl: './survey-account-information.component.html',
	styleUrls: ['./survey-account-information.component.scss'],
})
export class SurveyAccountInformationComponent implements OnInit {
	constructor() {}

	DEPARTMENTS = DEPARTMENTS

	COURSES = COURSES

	DEGREES = DEGREES

	ngOnInit(): void {}

	identity = (item: any) => item
}
