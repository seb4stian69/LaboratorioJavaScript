import ViewsLoguin from "./Views.Loguin.mjs";

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

// Dentro de div guardamos el elemento html cuyo id es otherDiv, esto con la finalidad de tener una referencia para lograr mostrar en pantalla los datos de nuestras vistas creadas desde js
const div = document.getElementById("otherDiv")

// Llamamos a la funcion ViewsLoguin que recibe 2 parametros, (container,display) , donde le definimos el contenedor donde residira ese elemento generado con la funcion y la visibilidad que tendra en ese instante en que se instancia
ViewsLoguin(div,"block")


