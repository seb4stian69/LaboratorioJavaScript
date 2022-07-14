import { Question } from "../Classes/Class-Question.mjs";
import {dataQuestions} from './Questions.mjs'

// Transforma en un objeto mi arreglo ubicado en la ruta Helpers/questions
export const quizQuestion = dataQuestions.map( question => new Question(question.question, question.options, question.answer, question.categoria) )
