import { Component, OnInit } from '@angular/core'
import { SEMESTERS, YEAR_LEVELS } from 'app/app-core/constants/app.constants'

@Component({
	selector: 'app-survey-results',
	templateUrl: './survey-results.component.html',
	styleUrls: ['./survey-results.component.scss'],
})
export class SurveyResultsComponent implements OnInit {
	SEMESTERS = SEMESTERS
	YEAR_LEVELS = YEAR_LEVELS

	constructor() {}

	ngOnInit(): void {}

	identity = (item: any) => item
}
