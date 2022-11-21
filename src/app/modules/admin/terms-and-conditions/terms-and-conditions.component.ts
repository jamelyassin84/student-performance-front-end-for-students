import { dbwAnimations } from '@global_packages/animations/animation.api'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'terms-and-conditions',
	templateUrl: './terms-and-conditions.component.html',
	styleUrls: ['./terms-and-conditions.component.scss'],
	animations: [...dbwAnimations],
})
export class TermsAndConditionsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
