import { Route } from '@angular/router'
import { AuthGuard } from 'app/core/auth/guards/auth.guard'
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard'
import { LayoutComponent } from 'app/layout/layout.component'
import { InitialDataResolver } from 'app/app.resolvers'

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
	// Redirect empty path to '/example'
	{ path: '', pathMatch: 'full', redirectTo: 'sign-in' },

	// Redirect signed in user to the '/example'
	//
	// After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
	// path. Below is another redirection for that path to redirect the user to the desired
	// location. This is a small convenience to keep all main routes together here on this file.
	// { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'sign-in' },

	// Auth routes for guests
	{
		path: '',
		component: LayoutComponent,
		data: {
			layout: 'empty',
		},
		children: [
			{
				path: 'confirmation-required',
				loadChildren: () =>
					import(
						'app/modules/auth/confirmation-required/confirmation-required.module'
					).then((m) => m.AuthConfirmationRequiredModule),
			},
			{
				path: 'forgot-password',
				loadChildren: () =>
					import(
						'app/modules/auth/forgot-password/forgot-password.module'
					).then((m) => m.AuthForgotPasswordModule),
			},
			{
				path: 'reset-password',
				loadChildren: () =>
					import('app/modules/auth/reset-password/reset-password.module').then(
						(m) => m.AuthResetPasswordModule,
					),
			},
			{
				path: 'sign-in',
				loadChildren: () =>
					import('app/modules/auth/sign-in/sign-in.module').then(
						(m) => m.AuthSignInModule,
					),
			},
			{
				path: 'sign-up',
				loadChildren: () =>
					import('app/modules/auth/sign-up/sign-up.module').then(
						(m) => m.AuthSignUpModule,
					),
			},
			{
				path: 'privacy-policy',
				loadChildren: () =>
					import('app/modules/admin/privacy-policy/privacy-policy.module').then(
						(module) => module.PrivacyPolicyModule,
					),
			},

			{
				path: 'terms-and-conditions',
				loadChildren: () =>
					import(
						'app/modules/admin/terms-and-conditions/terms-and-conditions.module'
					).then((module) => module.TermsAndConditionsModule),
			},
		],
	},

	// Auth routes for authenticated users
	{
		path: '',
		canActivate: [AuthGuard],
		canActivateChild: [AuthGuard],
		component: LayoutComponent,
		data: {
			layout: 'empty',
		},
		children: [
			{
				path: 'sign-out',
				loadChildren: () =>
					import('app/modules/auth/sign-out/sign-out.module').then(
						(m) => m.AuthSignOutModule,
					),
			},
			{
				path: 'unlock-session',
				loadChildren: () =>
					import('app/modules/auth/unlock-session/unlock-session.module').then(
						(m) => m.AuthUnlockSessionModule,
					),
			},
		],
	},

	// Landing routes
	{
		path: '',
		component: LayoutComponent,
		data: {
			layout: 'empty',
		},
		children: [
			{
				path: 'home',
				loadChildren: () =>
					import('app/modules/landing/home/home.module').then(
						(m) => m.LandingHomeModule,
					),
			},
		],
	},

	// Admin routes
	{
		path: '',
		component: LayoutComponent,
		resolve: {
			initialData: InitialDataResolver,
		},
		children: [
			{
				path: 'dashboard',
				loadChildren: () =>
					import('app/modules/admin/dashboard/dashboard.module').then(
						(module) => module.DashboardModule,
					),
			},
			{
				path: 'survey-results',
				loadChildren: () =>
					import('app/modules/admin/survey-results/survey-results.module').then(
						(module) => module.SurveyResultsModule,
					),
			},
			{
				path: 'answer-a-survey',
				loadChildren: () =>
					import('app/modules/admin/survey-answer/survey-answer.module').then(
						(module) => module.SurveyAnswerModule,
					),
			},
			{
				path: 'account',
				loadChildren: () =>
					import(
						'app/modules/admin/survey-account-information/survey-account-information.module'
					).then((module) => module.SurveyAccountInformationModule),
			},
		],
	},
]
