
export class Question {

    constructor(question,option,answer,category){

        this.question = question
        this.option = option
        this.answer = answer 
        this.category = category

    }

    getCategory = () =>{
        return this.category
    }

    isCorrectAnswer = (response) => response === this.answer;

}