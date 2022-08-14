import { StopPropagation } from './../../@global_packages/directives/stop.propagation.directive'
import { HttpClientModule } from '@angular/common/http'
import { FuseAlertModule } from './../../@fuse/components/alert/alert.module'
import { FuseCardModule } from './../../@fuse/components/card/card.module'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PageHeaderComponent } from 'app/components/page-header/page-header.component'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { NgApexchartsModule } from 'ng-apexcharts'
import { HasDataPipe } from '@global_packages/pipes/has-data.pipe'
import { EmptyPipe } from '@global_packages/pipes/empty-pipe'
import { InitialsPipe } from '@global_packages/pipes/initials.pipe'
import { AvatarPlaceholderComponent } from 'app/components/placeholder/avatar-placeholder/avatar-placeholder.component'
import { AnimateJsDirective } from '@global_packages/directives/animate.js.directive'
import { HasScorePipe } from 'app/app-core/pipes/has-score.pipe'
import { HasRatedDirective } from 'app/app-core/directives/has-rated.directive'
import { MatRadioModule } from '@angular/material/radio'
import { ModalComponent } from 'app/modules/admin/modal/modal.component'
import { ViewRecommendationComponent } from 'app/modules/admin/modal/view-recommendation/view-recommendation.component'
import { ModalHeaderComponent } from 'app/components/modal-header/modal-header.component'
import { GetPercentagePipe } from 'app/app-core/pipes/to_percentage.pipe'

const components = [
	ModalComponent,
	PageHeaderComponent,
	ModalHeaderComponent,
	AvatarPlaceholderComponent,
	ViewRecommendationComponent,
]

const modules = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatIconModule,
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatProgressSpinnerModule,
	FuseCardModule,
	FuseAlertModule,
	MatSelectModule,
	NgApexchartsModule,
	HttpClientModule,
	MatRadioModule,
]

const pipes = [
	HasDataPipe,
	EmptyPipe,
	InitialsPipe,
	HasScorePipe,
	GetPercentagePipe,
]

const directives = [AnimateJsDirective, HasRatedDirective, StopPropagation]

@NgModule({
	declarations: [...components, ...pipes, ...directives],
	imports: [...modules],
	exports: [...modules, ...components, ...pipes, ...directives],
})
export class SharedModule {}
