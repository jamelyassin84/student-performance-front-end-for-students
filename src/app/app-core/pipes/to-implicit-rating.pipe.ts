import { EntityState } from '@ngrx/entity'
import { TransformEntity } from './../../../@global_packages/helpers/transform-entity'
import { Pipe, PipeTransform } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { map, tap } from 'rxjs'
import { ImplicitRating } from '../models/implicit-rating.model'
import { AppState } from '../store/core/app.state'
import { StateEnum } from '../store/core/store-action.enum'

@Pipe({ name: 'to_implicit_rating' })
export class ToImplicitRatingPipe implements PipeTransform {
	constructor(private _store: Store<AppState>) {
		this._store.pipe(
			select(StateEnum.IMPLICIT_RATING),
			map((x) => new TransformEntity(x).toArray()),
			tap((ratings) => {
				this.ratings = ratings
			}),
		)
	}

	ratings: ImplicitRating[] = []

	transform(rating: number): {
		title: string
		recommendations: string[]
	} {
		const implicitRating = this.ratings.find(
			(implicitRating) => rating >= implicitRating.average,
		)

		if (!implicitRating) {
			return {
				title: '🫠',
				recommendations: [],
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
	}
}
