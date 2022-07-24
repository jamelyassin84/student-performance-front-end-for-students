import { hasData, empty } from '@global_packages/helpers/helpers'
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'
import { SurveyQuestion } from '../store/questions/questions.model'

@Directive({
	selector: '[hasRated]',
})
export class HasRatedDirective {
	constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

	@Input() results: any = []

	@Input() question?: SurveyQuestion

	@Input() rating: number = 0

	ngAfterViewInit(): void {
		if (hasData(this.results) && !empty(this.question)) {
			for (let result of this.results) {
				for (let array of result) {
					if (array.score !== 0 && array.question === this.question.title) {
						if (array.score === this.rating) {
							'bg-yellow-500 pointer-events-none'
								.split(' ')
								.forEach((className: string) => {
									this.renderer.addClass(
										this.hostElement.nativeElement,
										className,
									)
								})
						}
					}
				}
			}
		}
	}
}
