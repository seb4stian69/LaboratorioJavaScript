import { Question } from "./Class-Question.mjs"

let category = 1

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
    

    // Metodos accesores    
    getQuestionIndex(){

        let cat = this.categoria

        let f = this.questions.filter( function (preguntita) {
            
            return preguntita.category == cat;

        });

        let ran = Math.floor(Math.random() * f.length);
        let valorran = f[ran];
        
        return valorran

    }
    
    isFinish = (question) => {

        return question.category === 5

    }

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

    resetData(){

        this.questionIndex = 0
        this.score = 0
        this.finish = false

    }
 
}