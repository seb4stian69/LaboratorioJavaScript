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

// Class quiz
let _Quiz = new Quiz(quizQuestion)

/* Logica del quiz */

let contador = 1
let que
let Question
let Options
let Categoria
let Puntos
let Won

/* Export part */ 
const ViewsQuiz = (container, display) => {

    _Quiz.resetData()

    contador = 1

    _Quiz.setCategoria(contador)
    que = _Quiz.getQuestionIndex(contador)
    Question = que.question
    Options = que.option
    Categoria = que.category
    Puntos = _Quiz.getScore()
    Won = false

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

// Funcionalidad del sistema

let vrft

const confirmaR = (res) =>{  

  vrft = _Quiz.confirm(que,res)

  if( vrft ){

    alert('Respuesta correcta')
    
    if (Categoria == 5){
        updateForm(true)
    } else {
        updateForm(false)
    }

  }else{

    alert('Respuesta incorrecta seras enviado a la pagina inicial y podras ver tu historico en la parte de historial')

    updateForm(false)

    let user = {
        name: sessionStorage.getItem('user'),
        score: Puntos
    }

    saveData(user)
    
    divFormQuiz.style.display = 'none'
    ViewsHome(Container, 'flex')

  }

}

const updateForm =(bool)=>{

    if(_Quiz.isFinish(que) && bool){

        contador = 1

      Puntos = _Quiz.getScore()
      
      let user = {
        name: sessionStorage.getItem('user'),
        score: Puntos
      }

      saveData(user)

      alert('Terminaste la prueba, Ganaste! \nPuedes revisar el historial tuyo y de otros en el apartado [Ir al historial] en la pagina principal')
      
      divFormQuiz.style.display = 'none'

      ViewsHome(Container, 'flex')
      updateData()

    }else{

        Puntos = _Quiz.getScore()

        let user = {
            name: sessionStorage.getItem('user'),
            score: Puntos
        }

        if(Categoria == 5){
            saveData(user)
            ViewsHome(Container, 'flex')
            divFormQuiz.style.display = 'none'
            updateData()
        }

        contador++

        _Quiz.setCategoria(contador)
        que = _Quiz.getQuestionIndex(contador)
        Question = que.question
        Options = que.option
        Categoria = que.category

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

    divPorcent.innerHTML = `${Puntos} pts`   

}

const saveData = (user) => {

    let data = JSON.parse(localStorage.getItem("universalSession"))

    data.push(user)
    
    localStorage.setItem('universalSession',JSON.stringify(data))

}

/* Acciones por boton */

buttonExit.addEventListener ('click', ()=>{

    divFormQuiz.style.display = 'none'
    ViewsHome(Container, 'flex')

})

inputOne.addEventListener('click', ()=>{

    confirmaR(Options[0])

})

inputTwo.addEventListener('click', ()=>{

    confirmaR(Options[1])

})

inputThree.addEventListener('click', ()=>{

    confirmaR(Options[2])

})

inputFour.addEventListener('click', ()=>{

    confirmaR(Options[3])

})

export default ViewsQuiz