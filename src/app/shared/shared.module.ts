import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const components = []

const modules = [CommonModule, FormsModule, ReactiveFormsModule]

const pipes = []

const directives = []

@NgModule({
	imports: [...modules],
	exports: [...modules],
})
export class SharedModule {}
