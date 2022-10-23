import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	Resolve,
	RouterStateSnapshot,
} from '@angular/router'
import { forkJoin, Observable, of, tap } from 'rxjs'
import { MessagesService } from 'app/layout/common/messages/messages.service'
import { NavigationService } from 'app/core/navigation/navigation.service'
import { NotificationsService } from 'app/layout/common/notifications/notifications.service'
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service'
import { ShortcutsService } from 'app/layout/common/shortcuts/shortcuts.service'
import { UserService } from 'app/core/user/user.service'
import { AppState } from './app-core/store/core/app.state'
import { Store } from '@ngrx/store'
import { StoreAction } from './app-core/store/core/action.enum'
import { ImplicitRatingService } from './app-core/store/ngrx/implicit-rating/implicit-rating.service'

@Injectable({
	providedIn: 'root',
})
export class InitialDataResolver implements Resolve<any> {
	constructor(
		private _messagesService: MessagesService,
		private _navigationService: NavigationService,
		private _notificationsService: NotificationsService,
		private _quickChatService: QuickChatService,
		private _shortcutsService: ShortcutsService,
		private _userService: UserService,
	) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<any> {
		return forkJoin([
			this._userService.get(),
			this._navigationService.get(),
			this._messagesService.getAll(),
			this._quickChatService.getChats(),
			this._shortcutsService.getAll(),
			this._notificationsService.getAll(),
		])
	}
}
