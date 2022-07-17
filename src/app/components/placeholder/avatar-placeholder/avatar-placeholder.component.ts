import { Component, Input, OnInit } from '@angular/core'
import { Student } from 'app/app-core/services/student.service'

@Component({
	selector: 'avatar-placeholder',
	templateUrl: './avatar-placeholder.component.html',
	styleUrls: ['./avatar-placeholder.component.scss'],
})
export class AvatarPlaceholderComponent implements OnInit {
	constructor() {}

	@Input() student?: Student

	ngOnInit(): void {}
}
