
import ViewsHome from "./Views.Home.mjs";

const Container = document.body
const div = document.createElement('div')
const buttonExit = document.createElement('button')
const divHH = document.createElement('div')

const ViewsHistory = (container,display) => {

  div.classList.add('home')
  div.id = ('homeHis')
  divHH.classList.add('historyHome')

  buttonExit.classList.add('exitBtnC')
  buttonExit.classList.add('exitH')
  buttonExit.innerHTML = 'Salir'

  div.append(buttonExit)
  
  dataTest.map( e => {

    const divH = document.createElement('div')
    divH.classList.add('historyFetch')
    divH.id = 'del'

    const pOne = document.createElement('p')
    pOne.textContent = `Username: ${e.user}`

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

  dataTest.map(() => { document.getElementById('del').remove() })

  div.style.display = 'none'
  ViewsHome(Container,"flex")

})

const dataTest = [

  {
    user: "Prueba",
    score: 1
  },
  {
    user: "Prueba",
    score: 2
  },
  {
    user: "Prueba",
    score: 3
  },
  {
    user: "Prueba",
    score: 4
  },
  {
    user: "Prueba",
    score: 5
  },
  {
    user: "Prueba",
    score: 6
  },
  {
    user: "Prueba",
    score: 7
  },
  {
    user: "Prueba",
    score: 8
  },
  {
    user: "Prueba",
    score: 9
  },
  {
    user: "Prueba",
    score: 10
  }
]

export default ViewsHistory