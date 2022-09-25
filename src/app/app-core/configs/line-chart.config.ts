export const LINE_CHART_CONFIG = {
	chart: {
		fontFamily: 'inherit',
		foreColor: 'inherit',
		height: '100%',
		type: 'line',
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
	},
	colors: ['#FACB1F', '#94A3B8'],
	dataLabels: {
		enabled: true,
		enabledOnSeries: [0],
		background: {
			borderWidth: 0,
		},
	},
	grid: {
		borderColor: 'var(--fuse-border)',
	},
	labels: ['1st Yr-2nd Sem', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	legend: {
		show: false,
	},
	plotOptions: {
		bar: {
			columnWidth: '50%',
		},
	},
	series: [
		{
			name: '1',
			data: [
				{ x: '2nd Yr - 1st Sem', y: [0] },
				{ x: '2nd Yr - 2nd Sem', y: [0] },
				{ x: '3rd Yr - 1st Sem', y: [0] },
				{ x: '3rd Yr - 2nd Sem', y: [0] },
				{ x: '4th Yr - 1st Sem', y: [0] },
				{ x: '4th Yr - 2nd Sem', y: [0] },
			],
		},
	],
	states: {
		hover: {
			filter: {
				type: 'darken',
				value: 0.75,
			},
		},
	},
	stroke: {
		width: [3, 0],
	},
	tooltip: {
		followCursor: true,
		theme: 'dark',
	},
	xaxis: {
		axisBorder: {
			show: false,
		},
		axisTicks: {
			color: 'var(--fuse-border)',
		},
		labels: {
			style: {
				colors: 'var(--fuse-text-secondary)',
			},
		},
		tooltip: {
			enabled: false,
		},
	},
	yaxis: {
		labels: {
			offsetX: -16,
			style: {
				colors: 'var(--fuse-text-secondary)',
			},
		},
	},
}
