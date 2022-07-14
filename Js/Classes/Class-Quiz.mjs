
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

    // Metodos accesores    
    getQuestionIndex(){
        return ( this.questions[this.questionIndex] )
    }
    
    isFinish = () => this.questions.length === this.questionIndex

    confirm(answer){

        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            
            this.score+=1            
            
        }else{
            
            this.finish=true
            return false
            
        }
        
        let send = this.questionIndex+=1

        this.setQuestionIndex(send)
        return true

    }

    resetData(questions){

        this.questions = questions    
        this.questionIndex = 0
        this.score = 0
        this.finish = false

        console.log('Limpiar data')

    }
 
}