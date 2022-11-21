import { NgModule } from '@angular/core'
import { TermsAndConditionsComponent } from './terms-and-conditions.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'app/shared/shared.module'

@NgModule({
	declarations: [TermsAndConditionsComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: TermsAndConditionsComponent,
			},
		]),
	],
})
export class TermsAndConditionsModule {}
