import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'get_percentage' })
export class GetPercentagePipe implements PipeTransform {
	transform(partialValue: number, totalValue: number): number {
		if (partialValue) {
			return (100 * partialValue) / totalValue
		}
	}
}
