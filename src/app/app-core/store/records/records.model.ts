import { SurveyForm } from 'app/app-core/store/form/form.model'
import { SurveyQuestion } from '../questions/questions.model'
import { Student } from './../../services/student.service'
export interface Record {
	survey_form_id: string
	question_id: string
	student_id: string
	year_level: string
	semester: string
	score: number
	student?: Student
	survey_form?: SurveyForm
}
