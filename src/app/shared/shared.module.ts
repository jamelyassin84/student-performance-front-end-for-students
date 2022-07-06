import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PageHeaderComponent } from 'app/components/page-header/page-header.component'

const components = [PageHeaderComponent]

const modules = [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule]

const pipes = []

const directives = []

@NgModule({
	declarations: [...components],
	imports: [...modules],
	exports: [...modules, ...components],
})
export class SharedModule {}
