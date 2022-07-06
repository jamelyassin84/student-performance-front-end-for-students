import { NgModule } from '@angular/core'
import { SurveyResultsComponent } from './survey-results.component'
import { SharedModule } from 'app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [SurveyResultsComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: SurveyResultsComponent,
			},
		]),
	],
})
export class SurveyResultsModule {}
