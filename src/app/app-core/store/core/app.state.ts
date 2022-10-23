import { EntityState } from '@ngrx/entity/src/models'
import { ImplicitRating } from 'app/app-core/models/implicit-rating.model'

export interface AppState {
	implicitRatings: EntityState<ImplicitRating>
}
