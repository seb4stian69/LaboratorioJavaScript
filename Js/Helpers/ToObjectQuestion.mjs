import { Question } from "../Classes/Class-Question.mjs";
import {dataQuestions} from './Questions.mjs'

/**
 * @Description Esta funcion que exportamos nos sirve para retornar un nuevo arreglo de preguntas, con la condicion de que cuando se haga el map de este arreglo se transformara cada elemento del mismo en un objeto de tipo Question[] 
 */

export const quizQuestion = dataQuestions.map( question => new Question(question.question, question.options, question.answer, question.categoria) )
