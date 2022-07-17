import { StudentService } from 'app/app-core/services/student.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	constructor(private _studentService: StudentService) {}

	student$ = this._studentService.student$

	data: any

	chart = {
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
					{ x: '1st Yr - 1st Sem', y: [95] },
					{ x: '1st Yr - 2nd Sem', y: [80] },
					{ x: '2nd Yr - 1st Sem', y: [42] },
					{ x: '2nd Yr - 2nd Sem', y: [31] },
					{ x: '3rd Yr - 1st Sem', y: [45] },
					{ x: '3rd Yr - 2nd Sem', y: [56] },
					{ x: '4th Yr - 1st Sem', y: [78] },
					{ x: '4th Yr - 2nd Sem', y: [78] },
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

	ngOnInit(): void {}
}
