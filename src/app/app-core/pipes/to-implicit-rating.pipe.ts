import { EntityState } from '@ngrx/entity'
import { TransformEntity } from './../../../@global_packages/helpers/transform-entity'
import { Pipe, PipeTransform } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { map, Observable, of, tap } from 'rxjs'
import { ImplicitRating } from '../models/implicit-rating.model'
import { AppState } from '../store/core/app.state'
import { StateEnum } from '../store/core/store-action.enum'

@Pipe({ name: 'to_implicit_rating' })
export class ToImplicitRatingPipe implements PipeTransform {
	constructor(private _store: Store<AppState>) {
		this.ratings$ = this._store.pipe(
			select(StateEnum.IMPLICIT_RATING),
			map((x) => new TransformEntity(x).toArray()),
		)
	}

	ratings$: Observable<ImplicitRating[]> = of([])

	transform(rating: number): Observable<{
		title: string
		recommendations: string[]
	}> {
		return this.ratings$.pipe(
			map((ratings) => {
				if (ratings.length === 0) {
					return {
						title: 'No Recommendations yet..',
						recommendations: [],
					}
				}

				const implicitRating = ratings.find(
					(implicitRating) => rating >= implicitRating.average,
				)

				if (!implicitRating) {
					return {
						title: ratings[ratings.length - 1].title,
						recommendations: [
							...ratings[ratings.length - 1].recommendations.map(
								(recommendation) => recommendation.title,
							),
						],
					}
				}

				return {
					title: implicitRating.title,
					recommendations: [
						...implicitRating.recommendations.map(
							(recommendation) => recommendation.title,
						),
					],
				}
			}),
		)
	}
}
