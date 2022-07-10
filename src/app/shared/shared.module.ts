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

const components = [PageHeaderComponent]

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
]

const pipes = []

const directives = []

@NgModule({
	declarations: [...components],
	imports: [...modules],
	exports: [...modules, ...components],
})
export class SharedModule {}
