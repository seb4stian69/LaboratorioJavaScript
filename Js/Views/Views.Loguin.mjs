import ViewsHome from "./Views.Home.mjs"

const form = document.createElement('form')
const buttonOne = document.createElement('button')
const Container = document.body
const input = document.createElement('input')
const div = document.createElement('div')
const buttonTwo = document.createElement('button')

const ViewsLoguin = (container,display) => { 

    form.classList.add("form")
    
    input.type = 'text'
    input.classList.add("inputText" )
    input.name = "nombre"
    input.placeholder = "Ingresa tu nombre"
    
    div.classList.add('btnBox')
    
    buttonOne.type = 'button'
    buttonOne.classList.add('btnSend')
    buttonOne.innerHTML = 'Send'
    buttonTwo.type = 'reset'
    buttonTwo.classList.add('btnClear')
    buttonTwo.innerHTML = 'Clear'
    
    div.append(buttonOne,buttonTwo)
    form.append(input,div)
    container.append(form)

    form.style.display = display

}

buttonOne.addEventListener('click', ()=> {

    if( ( (input.value).trim() ).length == 0 ){

        input.value = ''
        input.focus()
        alert('Debes proporcionar un nombre para el ingreso')
        
    }else{

        form.style.display = 'none'
        sessionStorage.setItem('user', input.value)
        input.value = ''
        ViewsHome(Container,'flex')

    }

    

})

export default ViewsLoguin