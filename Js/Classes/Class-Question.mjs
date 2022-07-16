
/**
 * @param {question} -> Pregunta del objeto Question
 * @param {option} -> Arreglo de respuestas
 * @param {answer} -> Respuesta correcta
 * @param {category} -> Categoria de la pregunta
 */

export class Question {

    constructor(question,option,answer,category){

        this.question = question
        this.option = option
        this.answer = answer 
        this.category = category

    }

    /**
     * @returns {this.category} Getter realizado para obtener la categoria actual de la pregunta
     */

    getCategory = () =>{
        return this.category
    }

    /**
     * @param {String} response 
     * @returns {boolean}  Metodo que devuelve un valor booleano dependiendo si el parametro respuesta es igual a la respuesta correcta 
     */

    isCorrectAnswer = (response) => response === this.answer;

}