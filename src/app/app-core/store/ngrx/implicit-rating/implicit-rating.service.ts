import { ImplicitRatingAPI } from 'app/app-core/http/api/implicit-rating.api'
import { empty } from '@global_packages/helpers/helpers'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { ImplicitRating } from 'app/app-core/models/implicit-rating.model'

@Injectable({
	providedIn: 'root',
})
export class ImplicitRatingService {
	constructor(private _implicitRatingAPI: ImplicitRatingAPI) {}

	get(): Observable<ImplicitRating[]> {
		return this._implicitRatingAPI.get()
	}

	upsert(rating: ImplicitRating): Observable<ImplicitRating> {
		if (!empty(rating.id)) {
			return this._implicitRatingAPI.update(rating.id, rating)
		}
		return this._implicitRatingAPI.post(rating)
	}

	remove(id: string): Observable<void> {
		return this._implicitRatingAPI.remove(id)
	}
}
