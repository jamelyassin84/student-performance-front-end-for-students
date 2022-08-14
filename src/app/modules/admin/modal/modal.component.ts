import { Component, OnInit } from '@angular/core'
import { dbwAnimations } from '@global_packages/animations/animation.api'
import { ViewRecommendationModal } from './view-recommendation/view-recommendation.service'

@Component({
	selector: 'modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	animations: [...dbwAnimations],
})
export class ModalComponent implements OnInit {
	constructor(private _viewRecommendationModal: ViewRecommendationModal) {}

	_viewRecommendationModalOpened$ = this._viewRecommendationModal.opened$

	ngOnInit(): void {}
}
