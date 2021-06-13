
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

const updateUserList = (userList) => container.appendChild(userList)
app.getUsersNames(updateUserList)

// revelador

console.log(operaciones.addNumers(10, 20))
console.log(operaciones.subsNumbers(10, 20))
console.log(operaciones.multNumbers(10, 20))
console.log(operaciones.divNumbers(10, 20))

// singleton

