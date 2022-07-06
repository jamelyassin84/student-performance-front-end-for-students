import { NgModule } from '@angular/core'
import { SurveyAccountInformationComponent } from './survey-account-information.component'
import { SharedModule } from 'app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [SurveyAccountInformationComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: SurveyAccountInformationComponent,
			},
		]),
	],
})
export class SurveyAccountInformationModule {}
