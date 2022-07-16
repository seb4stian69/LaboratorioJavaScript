import { Question } from "./Class-Question.mjs"

export class Quiz {

    /**
     * @author Sebastian Santis
     * @param {Question[]} questions 
     * @description Clase utilizada para la creacion del objeto quiz
     */

    constructor(questions) {
        this.questions = questions    
        this.questionIndex = 0
        this.score = 0
        this.finish = false
        this.categoria = 0
    }
    
    // Getters & Setters
    setQuestions(question){
        this.questions = question
    }
    getQuestion(){
        return this.questions
    }
    setQuestionIndex(index){
        this.questionIndex = index
    }
    getQuestion(){
        return this.questionIndex
    }
    setScore(score){
        this.score = score
    }
    getScore(){
        return this.score
    }
    setCategoria(values){
        this.categoria = values
    }
    
    /**
     * @description getQuestionIndex() metodo utilizado para retornar una pregunta aleatoria dependiendo de la categoria, esta categoria se actualiza con su setter desde el archivo Views.Quiz.mjs
     * @returns {questionRan} pregunta aleatoria
     */

    getQuestionIndex(){

        let cat = this.categoria

        let filter = this.questions.filter( function (question) {
            
            return question.category == cat;

        });

        let random = Math.floor(Math.random() * filter.length);
        let questionRan = filter[random];
        
        return questionRan

    }
    
    /**
     * 
     * @param {Question[]} question es un valor de tipo question que nos sirve para validar si la pregunta que se pasa como parametro se encuentra en la categoria final (5) en ese caso retornara verdadero, lo cual significa que ha finalizado el juego
     * @returns {boolean} retorna verdadero en dado caso de que se encuentra en la cateogoria 5 el usuario
     */

    isFinish = (question) => {

        return question.category === 5

    }

    /**
     * @param {Question[]} question 
     * @param {String} answer 
     * @returns {boolean} dependiendo si la respuesta que el usuario ha enviado es igual a la variable answer que representa la respuesta correcta dentro de la clase question
     */

    confirm(question,answer){

        if(question.isCorrectAnswer(answer)){
            
            this.score+=1            
            
        }else{
            
            this.finish=true
            return false
            
        }
        
        let send = this.questionIndex+=1

        this.setQuestionIndex(send)
        return true

    }

    /**
     * @Description esta funcion sirve para resetear todos los datos de la clase, y devuelve el objeto con los valores por defecto que controlan el quiz en el sistema
     */

    resetData(){

        this.questionIndex = 0
        this.score = 0
        this.finish = false

    }
 
}