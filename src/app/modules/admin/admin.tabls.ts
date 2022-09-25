import { FuseNavigationItem } from '@fuse/components/navigation'

export const adminNavigation: FuseNavigationItem[] = [
	{
		id: 'dashboard',
		title: 'Dashboard',
		type: 'basic',
		icon: 'dashboard',
		link: '/dashboard',
	},

	{
		id: 'answer-a-survey',
		title: 'Answer a Survey',
		type: 'basic',
		icon: 'mat_outline:drive_file_rename_outline',
		link: '/answer-a-survey',
	},
	{
		id: 'survey-results',
		title: 'Survey Results',
		type: 'basic',
		icon: 'insights',
		link: '/survey-results',
	},
	{
		id: 'account',
		title: 'Account Information',
		type: 'basic',
		icon: 'account_circle',
		link: '/account',
	},
]
