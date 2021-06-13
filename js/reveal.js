/*
2- Revelador (exporta en variable global) -> Esta funcion autoinvocada exportara una coleccion de funcionalidades
matematicas (suma, resta multiplicacion division) en un objeto llamado operaciones.
 */


const operaciones = (function () {

    const addNumbers = (x, y) => {
        return x + y
    }

    const subsNumbers = (x, y) => {
        return x - y
    }

    const multNumbers = (x, y) => {
        return x * y
    }

    const divNumbers = (x, y) => {
        return x / y
    }



    return {
        addNumbers: (x, y) => addNumbers(x, y),
        subsNumbers: (x,y) => subsNumbers(x,y),
        multNumbers: (x,y) => multNumbers(x,y),
        divNumbers: (x,y) => divNumbers(x,y),

    }
})()