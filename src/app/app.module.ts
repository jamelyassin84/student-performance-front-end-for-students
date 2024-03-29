import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router'
import { MarkdownModule } from 'ngx-markdown'
import { FuseModule } from '@fuse'
import { FuseConfigModule } from '@fuse/services/config'
import { FuseMockApiModule } from '@fuse/lib/mock-api'
import { CoreModule } from 'app/core/core.module'
import { appConfig } from 'app/core/config/app.config'
import { mockApiServices } from 'app/mock-api'
import { LayoutModule } from 'app/layout/layout.module'
import { AppComponent } from 'app/app.component'
import { appRoutes } from 'app/app.routing'
import { ModalHeaderComponent } from './components/modal-header/modal-header.component'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { EffectsModule } from '@ngrx/effects'
import { SharedModule } from './shared/shared.module'

const routerConfig: ExtraOptions = {
	preloadingStrategy: PreloadAllModules,
	scrollPositionRestoration: 'enabled',
	useHash: true,
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, routerConfig),

		// Fuse, FuseConfig & FuseMockAPI
		FuseModule,
		FuseConfigModule.forRoot(appConfig),
		FuseMockApiModule.forRoot(mockApiServices),

		SharedModule,

		// Core module of your application
		CoreModule,

		// Layout module of your application
		LayoutModule,

		// 3rd party modules that require global configuration via forRoot
		MarkdownModule.forRoot({}),

		StoreModule.forRoot({}, {}),

		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),

		StoreRouterConnectingModule.forRoot(),

		EffectsModule.forRoot([]),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
