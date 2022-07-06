import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'page-header',
	templateUrl: './page-header.component.html',
	styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
	constructor() {}

	@Input() pageTitle!: string

	@Input() subtitle!: string

	@Input() icon!: string

	ngOnInit(): void {}
}
