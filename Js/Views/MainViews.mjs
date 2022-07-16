import ViewsLoguin from "./Views.Loguin.mjs";

if(localStorage.length == 0){
        
    let defaultGanador = [
        {
            name: 'Ganador',
            score: 25
        }
    ]

    localStorage.setItem("universalSession", JSON.stringify(defaultGanador))

}

const div = document.getElementById("otherDiv")
ViewsLoguin(div,"block")


