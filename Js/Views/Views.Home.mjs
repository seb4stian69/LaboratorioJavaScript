import ViewsHistory from "./Views.History.mjs"
import ViewsLoguin from "./Views.Loguin.mjs"
import ViewsQuiz from "./Views.Quiz.mjs"

const otherDivHome = document.getElementById("otherDiv")
const Container = document.body

const divHome = document.createElement('div')
const buttonOneHome = document.createElement('button')
const buttonTwoHome = document.createElement('button')
const buttonThreeHome = document.createElement('button')

const ViewsHome = (container,display) => {

    if(localStorage.length == 0){
        
        let defaultGanador = [
            {
                name: 'Ganador',
                score: 25
            }
        ]
    
        localStorage.setItem("universalSession", JSON.stringify(defaultGanador))

    }

    divHome.classList.add('home')

    buttonOneHome.classList.add('start')
    buttonOneHome.innerHTML = 'Start Quiz'

    buttonTwoHome.classList.add('exitBtnD')
    buttonTwoHome.innerHTML = 'Exit'

    buttonThreeHome.classList.add('history')
    buttonThreeHome.innerHTML = 'Ir al historial'

    divHome.append(buttonOneHome,buttonTwoHome,buttonThreeHome)
    container.append(divHome)

    divHome.style.display = display

}

buttonOneHome.addEventListener( 'click' , ()=> {

    divHome.style.display = 'none'
    ViewsQuiz(Container,'flex')

})

buttonTwoHome.addEventListener( 'click' , ()=> {

    divHome.style.display = 'none'
    ViewsLoguin(otherDivHome,'block')
    
})

buttonThreeHome.addEventListener( 'click' , ()=> {

    divHome.style.display = 'none'
    ViewsHistory(Container,'flex')
    
})

export default ViewsHome