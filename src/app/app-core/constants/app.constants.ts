export const SEMESTERS = ['1st', '2nd', '3rd']

export const YEAR_LEVELS = ['1st', '2nd', '3rd', '4th', '5th']

export const DEGREES = [
	'Bachelor of Arts',
	'Bachelor of Science in Agriculture',
	'Bachelor of Science in Agricultural and Biosystems Engineering',
	'Bachelor of Science in Environmental Management',
	'Bachelor of Science in Accountancy',
	'Bachelor of Science in Advertising',
	'Bachelor of Science in Computer Science',
	'Bachelor of Science in Digital Media and Interactive Arts',
	'Bachelor of Science in Information Technology',
]

export const DEPARTMENTS = [
	'CCS',
	'CBA',
	'CHM',
	'CN',
	'CE',
	'CAS',
	'CARES',
	'CMLS',
	'CP',
	'CL',
	'CM',
	'CT',
]

export const COURSES = [
	'Computer Science',
	'Information Technology',
	'Digital Media and Interactive Arts',
	'Library and Information Science',
	'Communication',
	'English Language Studies',
	'Political Science',
	'Biology',
	'Biology with specialization in Microbiology',
	'Chemistry',
	'Psychology',
	'Social Work',
	'Major in Political Science and Public Administration',
	'Major in Mathematics',
]

export const DEPARTMENTS1 = [
	{
		name: 'College of Arts and Sciences', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Arts', // Name of Degree
				courses: [
					{
						name: 'Communication', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'English Language Studies', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Political Science', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: '', // Name of Course
						majors: ['Political Science and Public Administration'], // Array of Majors
					},
				],
			},
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Biology', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Biology with specialization in Microbiology', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Chemistry', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Psychology', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Social Work', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: '', // Name of Course
						majors: [' Mathematics'], // Array of Majors
					},
				],
			},
		],

	},
	{
		name: 'College of Computer Studies', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Computer Science', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Digital Media and Interactive Arts', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Information Technology', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: ' Library and Information Science', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Nursing', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Nursing', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Business and Accountancy', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Accountancy', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Advertising', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Business Administration major in', // Name of Course
						majors: ['Business Management','Financial Management','Marketing Management','Entrepreneurship','Management Accounting'], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Education', // Name of Deapartment
		degrees: [
			{
				name: 'Bachelor of ', // Name of Degree
				courses: [
					{
						name: 'Early Childhood Education', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Elementary Education', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Physical Education', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Secondary Education, majors in: ', // Name of Course
						majors: ['English','Filipino','Mathematics','Science','Special Needs Education','Bachelor in Sports Match Analysis'], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Engineering', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Chemical Engineering', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Civil Engineering', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Electrical Engineering', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Electronics Engineering', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Mechanical Engineering', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Packaging Engineering', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Software Engineering', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Hospitality Management', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Hospitality Management', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Tourism Management', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Medical Laboratory', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Medical Laboratory Sciences', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Pharmacy', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Pharmacy', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Medicine', // Name of Department
		degrees: [
			{
				name: 'Bachelor of Science', // Name of Degree
				courses: [
					{
						name: 'Health, Fitness and Lifestyle Management', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Respiratory Therapy', // Name of Course
						majors: [], // Array of Majors
					},
					{
						name: 'Doctor of Medicine', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	},
	{
		name: 'College of Theology', // Name of Department
		degrees: [
			{
				name: 'Bachelor of ', // Name of Degree
				courses: [
					{
						name: 'Theology', // Name of Course
						majors: [], // Array of Majors
					},
				]
			}
		]
	}
];

export const DEGREES1 = [
	{
		name: 'Bachelor of Arts', // Name of Degree
		departments: [
			{
				name: 'CAS', // Name of Department
				courses: [
					'English Language Studies',
					'Political Science',
					'Biology',
					'Biology with specialization in Microbiology',
					'Chemistry',
					'Psychology',
					'Social Work',
				],
			},
			{
				name: 'CBA',
				courses: [
					'English Language Studies',
					'Political Science',
					'Biology',
					'Biology with specialization in Microbiology',
					'Chemistry',
					'Psychology',
					'Social Work',
				],
			},
		],
	},
]
