import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { fuseAnimations } from '@fuse/animations'
import { FuseAlertType } from '@fuse/components/alert'
import { AuthService } from 'app/core/auth/auth.service'
import { LoginAPI } from '../auth.service'

@Component({
	selector: 'auth-sign-in',
	templateUrl: './sign-in.component.html',
	encapsulation: ViewEncapsulation.None,
	animations: fuseAnimations,
})
export class AuthSignInComponent implements OnInit {
	@ViewChild('signInNgForm') signInNgForm: NgForm

	alert: { type: FuseAlertType; message: string } = {
		type: 'success',
		message: '',
	}
	signInForm: FormGroup
	showAlert: boolean = false

	constructor(
		private _formBuilder: FormBuilder,
		private _router: Router,
		private _loginAPI: LoginAPI,
	) {}

	ngOnInit(): void {
		this.signInForm = this._formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		})
	}

	signIn(): void {
		if (this.signInForm.invalid) {
			return
		}

		this.signInForm.disable()

		this.showAlert = false

		this._loginAPI.post(this.signInForm.value).subscribe({
			next: (data) => {
				localStorage.setItem('access_token', data.token.plainTextToken)

				localStorage.setItem('user', data.token.user)

				this._router.navigate(['/dashboard'])
			},
			error: (err) => {
				this.signInForm.enable()

				this.alert = {
					type: 'error',
					message: err.error,
				}

				this.showAlert = true
			},
		})
	}
}
