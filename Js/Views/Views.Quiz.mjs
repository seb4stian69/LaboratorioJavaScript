import ViewsHome from "./Views.Home.mjs"
import { quizQuestion } from "../Helpers/ToObjectQuestion.mjs"
import { Quiz } from "../Classes/Class-Quiz.mjs"

/* Parte visual */ 
const Container = document.body

//Br
const br = document.createElement('br')
const brOne = document.createElement('br')
const brTwo = document.createElement('br')

// Contenedores principales
const divFormQuiz = document.createElement('div')
divFormQuiz.classList.add('formQuiz')

const divContent = document.createElement('div')
divContent.classList.add('content')

// Contenedor quiz
const divQuiz = document.createElement('div')
divQuiz.classList.add('Quiz')

const divPFQ = document.createElement('div')
divPFQ.classList.add('preguntaFQ')

const textareaQuestion = document.createElement('textarea')
textareaQuestion.classList.add('textPreguntaFQ')
textareaQuestion.readOnly = true

const divCajaRespuestaFQ = document.createElement('div')
divCajaRespuestaFQ.classList.add('cajaRespuestasFQ')

const inputOne = document.createElement('input')
inputOne.classList.add('radioBtn')
inputOne.id = ('radioBtn1')
inputOne.type = 'button'

const labelOne = document.createElement('label')

const inputTwo = document.createElement('input')
inputTwo.classList.add('radioBtn')
inputTwo.id = ('radioBtn2')
inputTwo.type = 'button'

const labelTwo = document.createElement('label')

const inputThree = document.createElement('input')
inputThree.classList.add('radioBtn')
inputThree.id = ('radioBtn3')
inputThree.type = 'button'

const labelThree = document.createElement('label')

const inputFour = document.createElement('input')
inputFour.classList.add('radioBtn')
inputFour.id = ('radioBtn4')
inputFour.type = 'button'

const labelFour = document.createElement('label')

const divBtnBox = document.createElement('div')
divBtnBox.classList.add('btnBox')

const buttonExit = document.createElement('button')
buttonExit.classList.add('exitBtnC')
buttonExit.innerHTML = ('Exit')
    
// Contenedor question
const divQuestion = document.createElement('div')
divQuestion.classList.add('question')

const divPorcent = document.createElement('div')
divPorcent.classList.add('porcent')
divPorcent.innerHTML = `${0} pts`   

// Class quiz
let _Quiz = new Quiz(quizQuestion)

/* Export part */ 
const ViewsQuiz = (container, display) => {

    updateData()

    divCajaRespuestaFQ.append(inputOne,labelOne,br,inputTwo,labelTwo,brOne,inputThree,labelThree,brTwo,inputFour,labelFour)
    divBtnBox.append(buttonExit)
    divQuiz.append(divPFQ,textareaQuestion,divCajaRespuestaFQ,divBtnBox)
    divQuestion.append(divPorcent)
    divContent.append(divQuiz,divQuestion)
    divFormQuiz.append(divContent)

    // SubDisplay
    container.append(divFormQuiz)
    // Display
    divFormQuiz.style.display = display

}

/* Logica del quiz */

let contador = 0
let Question = _Quiz.getQuestionIndex().question
let Options = _Quiz.getQuestionIndex().option
let Categoria = _Quiz.getQuestionIndex().category
let Puntos = _Quiz.getScore()
let Won = false

let vrft

const confirmaR = (res) =>{  

  vrft = _Quiz.confirm(res)

  if( vrft ){

    alert('Respuesta correcta')
    console.log(res)
    updateForm()
    
  }else{

    console.log(res)
    alert('Respuesta incorrecta seras enviado a la pagina inicial y podras ver tu historico en la parte de historial')
    updateForm()

    divFormQuiz.style.display = 'none'
    ViewsHome(Container, 'flex')

    // const _user = new user(Username, Puntos, false)
    // createHist(_user) -> Cambiar metodo a jsMethod

  }

}

const updateForm =()=>{

    if(_Quiz.isFinish()){

        console.log('en true')

      Puntos = _Quiz.getScore()
      Won = true
      
      // const _user = new user(Username, 25, true) -> Cambiar metodo a jsMethod
      // setUser( _user ) -> Cambiar metodo a jsMethod
      // createHist(_user) -> Cambiar metodo a jsMethod

      alert('Terminaste la prueba ... ¡Has ganado! ... \Puedes revisar el historial tuyo y de otros en el apartado [Ir al historial] en la pagina principal')
      
      divFormQuiz.style.display = 'none'
      ViewsHome(Container, 'flex')
      updateData()

    }else{

        console.log('en false')

        contador++

        Question = _Quiz.getQuestionIndex().question
        Options = _Quiz.getQuestionIndex().option
        Categoria = _Quiz.getQuestionIndex().category
        Puntos = _Quiz.getScore()

        updateData()
        _Quiz.setQuestionIndex(contador)

    }
    
}

const updateData = () => {

    divPFQ.innerHTML = `Categoria: ${Categoria}`

    textareaQuestion.value = Question
    
    inputOne.value = Options[0]
    labelOne.innerHTML = `  ${Options[0]}`
    inputTwo.value = Options[1]
    labelTwo.innerHTML = `  ${Options[1]}`
    inputThree.value = Options[2]
    labelThree.innerHTML = `    ${Options[2]}`
    inputFour.value = Options[3]
    labelFour.innerHTML = `     ${Options[3]}`

}

/* Acciones por boton */

buttonExit.addEventListener ('click', ()=>{

    divFormQuiz.style.display = 'none'
    ViewsHome(Container, 'flex')

})

inputOne.addEventListener('click', ()=>{

    console.log(inputOne.value)
    confirmaR(Options[0])

})

inputTwo.addEventListener('click', ()=>{

    console.log(inputTwo.value)
    confirmaR(Options[1])

})

inputThree.addEventListener('click', ()=>{

    console.log(inputThree.value)
    confirmaR(Options[2])

})

inputFour.addEventListener('click', ()=>{

    console.log(inputFour.value)
    confirmaR(Options[3])

})

export default ViewsQuiz