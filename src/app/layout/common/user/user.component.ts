import { StudentService } from './../../../app-core/services/student.service'
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewEncapsulation,
} from '@angular/core'
import { Router } from '@angular/router'
import { BooleanInput } from '@angular/cdk/coercion'
import { Subject, takeUntil } from 'rxjs'
import { User } from 'app/core/user/user.types'
import { UserService } from 'app/core/user/user.service'

@Component({
	selector: 'user',
	templateUrl: './user.component.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	exportAs: 'user',
})
export class UserComponent implements OnInit, OnDestroy {
	/* eslint-disable @typescript-eslint/naming-convention */
	static ngAcceptInputType_showAvatar: BooleanInput
	/* eslint-enable @typescript-eslint/naming-convention */

	@Input() showAvatar: boolean = true
	user: User

	private _unsubscribeAll: Subject<any> = new Subject<any>()

	constructor(
		private _changeDetectorRef: ChangeDetectorRef,
		private _router: Router,
		private _userService: UserService,
		private _studentService: StudentService,
	) {}

	user$ = this._studentService.user$

	ngOnInit(): void {
		this._userService.user$
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe((user: User) => {
				this.user = user

				this._changeDetectorRef.markForCheck()
			})
	}

	ngOnDestroy(): void {
		this._unsubscribeAll.next(null)
		this._unsubscribeAll.complete()
	}

	updateUserStatus(status: string): void {
		if (!this.user) {
			return
		}

		this._userService
			.update({
				...this.user,
				status,
			})
			.subscribe()
	}

	signOut(): void {
		this._router.navigate(['/sign-out'])
	}
}
