import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrivacyPolicyComponent } from './privacy-policy.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'app/shared/shared.module'

@NgModule({
	declarations: [PrivacyPolicyComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: PrivacyPolicyComponent,
			},
		]),
	],
})
export class PrivacyPolicyModule {}
