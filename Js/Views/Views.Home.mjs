import ViewsHistory from "./Views.History.mjs"
import ViewsLoguin from "./Views.Loguin.mjs"
import ViewsQuiz from "./Views.Quiz.mjs"

// Creacion de elementos html
const otherDivHome = document.getElementById("otherDiv")
const Container = document.body

const divHome = document.createElement('div')
const buttonOneHome = document.createElement('button')
const buttonTwoHome = document.createElement('button')
const buttonThreeHome = document.createElement('button')

// Funcion para renderizar la vista de la pagina principal
const ViewsHome = (container,display) => {

      // La siguiente sentencia if se ejecuta para revisar si dentro del local storage no se encuentra ningun dato, y asi llenarlo con un valor por defecto, esto con la necesidad de tener un arreglo iniciar el cual usar para luego agregarle nuevos datos con el nombre y el resultado de los participantes

    if(localStorage.length == 0){
        
        let defaultGanador = [
            {
                name: 'Ganador',
                score: 25
            }
        ]
    
        localStorage.setItem("universalSession", JSON.stringify(defaultGanador))

    }

    // Se añaden valores a los elementos iniciados al inicio del archivo
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

// Evento utilizado para renderizar el la vista del quiz

buttonOneHome.addEventListener( 'click' , ()=> {

    divHome.style.display = 'none'
    ViewsQuiz(Container,'flex')

})

// Evento utilizado para renderizar el la vista del loguin

buttonTwoHome.addEventListener( 'click' , ()=> {

    divHome.style.display = 'none'
    ViewsLoguin(otherDivHome,'block')
    
})

// Evento utilizado para renderizar el la vista del historial

buttonThreeHome.addEventListener( 'click' , ()=> {

    divHome.style.display = 'none'
    ViewsHistory(Container,'flex')
    
})

export default ViewsHome