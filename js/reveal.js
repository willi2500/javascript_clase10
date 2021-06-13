/*
2- Revelador (exporta en variable global) -> Esta funcion autoinvocada exportara una coleccion de funcionalidades
matematicas (suma, resta multiplicacion division) en un objeto llamado operaciones.
 */


const operaciones = (function () {

    const addNumers = (x, y) => {
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
        addNumers: (x, y) => addNumers(x, y),
        subsNumbers: (x,y) => subsNumbers(x,y),
        multNumbers: (x,y) => multNumbers(x,y),
        divNumbers: (x,y) => divNumbers(x,y),

    }
})()