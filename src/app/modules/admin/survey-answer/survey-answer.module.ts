import { NgModule } from '@angular/core'
import { SurveyAnswerComponent } from './survey-answer.component'
import { SharedModule } from 'app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [SurveyAnswerComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: SurveyAnswerComponent,
			},
		]),
	],
})
export class SurveyAnswerModule {}
