
import ViewsHome from "./Views.Home.mjs";

const Container = document.body
const div = document.createElement('div')
const buttonExit = document.createElement('button')
const divHH = document.createElement('div')

let data = JSON.parse(localStorage.getItem("universalSession"))

const ViewsHistory = (container,display) => {

  data = JSON.parse(localStorage.getItem("universalSession"))

  if(localStorage.length == 0){
        
    let defaultGanador = [
        {
            name: 'Ganador',
            score: 25
        }
    ]

    localStorage.setItem("universalSession", JSON.stringify(defaultGanador))

}

  div.classList.add('home')
  div.id = ('homeHis')
  divHH.classList.add('historyHome')

  buttonExit.classList.add('exitBtnC')
  buttonExit.classList.add('exitH')
  buttonExit.innerHTML = 'Salir'

  div.append(buttonExit)
  
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

buttonExit.addEventListener('click', ()=> {

  data.map(() => { document.getElementById('del').remove() })

  div.style.display = 'none'
  ViewsHome(Container,"flex")

})

export default ViewsHistory