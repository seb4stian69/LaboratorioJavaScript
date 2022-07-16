
import ViewsHome from "./Views.Home.mjs";

// Creacion de elementos html
const Container = document.body
const div = document.createElement('div')
const buttonExit = document.createElement('button')
const divHH = document.createElement('div')

// Acceso a los datos dentro de la clave universalSession parseados como un json para poder generar un arreglo el cual mapear despues
let data = JSON.parse(localStorage.getItem("universalSession"))

// Funcion para renderizar la vista del historial
const ViewsHistory = (container,display) => {

  // Acceso a los datos dentro de la clave universalSession parseados como un json para poder generar un arreglo el cual mapear despues
  data = JSON.parse(localStorage.getItem("universalSession"))

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
  div.classList.add('home')
  div.id = ('homeHis')
  divHH.classList.add('historyHome')

  buttonExit.classList.add('exitBtnC')
  buttonExit.classList.add('exitH')
  buttonExit.innerHTML = 'Salir'

  div.append(buttonExit)
  
  // map usado para generar un nuevo div por elemento encontrado dentro del arreglo data para mostrar el historial de los usuarios que han realizado el Quiz en ese dispositivo

  data.map( e => {

    const divH = document.createElement('div')
    divH.classList.add('historyFetch')
    divH.id = 'del'

    const pOne = document.createElement('p')
    pOne.textContent = `Username: ${e.name}`

    const pTwo = document.createElement('p')
    pTwo.textContent = `Score: ${e.score}`
    
    divHH.append(divH)
    divH.append(pOne,pTwo)    

  })
  
  div.append(divHH)

  container.append(div)
  div.style.display = display

}

// Evento utilizado para salir de la vista History y entrar a la vista principal o Home

buttonExit.addEventListener('click', ()=> {

  data.map(() => { document.getElementById('del').remove() })

  div.style.display = 'none'
  ViewsHome(Container,"flex")

})

export default ViewsHistory