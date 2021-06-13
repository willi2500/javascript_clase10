/*
Ejercicio: Generar un HTML  que incorpore 4 archivos js. Cada uno trabajara con un patron de diseno diferente. El cuarto
archivo se llamara main.js

1- Modulo (exportara en window) -> Esta funcion autoinvocada realizara una peticion ajax a JSONplaceholder pidiendo todos
los usuarios. Exportara una funcion llamada geUsersNames() -> que devolvera un array con todos los nombres que se recibieron
Se debe intentar de que no se puede ver el funcionamiento interno de getUsersNames()


2- Revelador (exporta en variable global) -> Esta funcion autoinvocada exportara una coleccion de funcionalidades
matematicas (suma, resta multiplicacion division) en un objeto llamado operaciones.

3- Singleton (exporta en variable global) -> esta funcion autoinvocada contendra una funcion constructora de
empleado con las propiedades nombre, apellido, edad, fechaCreacion. En caso de que ya hubiera una instancia devolver
el objeto previmente instanciado
*/


const container = document.querySelector(".container")


// se carga la lista del patron modulo

const updateUserList = (userList) => {
    const moduloTitle = document.createElement("h2")
    moduloTitle.textContent = "PATRON MODULO"
    container.appendChild(moduloTitle)
    container.appendChild(userList)
}
app.getUsersNames(updateUserList)

// revelador

const updateOperaciones = () => {
    const operations =
        [operaciones.addNumbers, operaciones.subsNumbers,
            operaciones.multNumbers, operaciones.divNumbers]

    const x = 20;
    const y = 10;

    const operacionesContainer = document.createElement("div")
    operacionesContainer.classList.add("operaciones")

    operations.forEach(oper => {
        const result = document.createElement("p")
        result.textContent = `operacion ${oper.name} de ${x} y ${y} resultado: ${oper(x, y)}`
        operacionesContainer.appendChild(result)
    })

    const revealTitle = document.createElement("h2")
    revealTitle.textContent = "PATRON REVELADOR"
    container.appendChild(revealTitle)
    container.appendChild(operacionesContainer)
}

updateOperaciones()

// singleton


const empleadoPlantilla = (empleado, empleadoNumero) => {
    const containerEmpleado = document.createElement("div")
    containerEmpleado.classList.add("empleado-container")
    const empTitulo = document.createElement("h2")
    empTitulo.textContent = empleadoNumero
    containerEmpleado.appendChild(empTitulo)
    for (property in empleado) {

        if (empleado.hasOwnProperty(property)) {
            const prop = document.createElement("p")
            prop.textContent = `${property}: ${empleado[property]}`
            containerEmpleado.appendChild(prop)
        }
    }
    return containerEmpleado
}

const empleado1 = new Empleado()
const empleado2 = new Empleado()

const empleadosContainer = document.createElement("div")
empleadosContainer.classList.add("empleados-container")
const singletonTitle = document.createElement("h2")
singletonTitle.textContent = "PATRON SINGLETON"
container.appendChild(singletonTitle)
empleadosContainer.appendChild(empleadoPlantilla(empleado1, "empleado1"))
empleadosContainer.appendChild(empleadoPlantilla(empleado2, "empleado2"))


container.appendChild(empleadosContainer)


