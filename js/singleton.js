/*
3- Singleton (exporta en variable global) -> esta funcion autoinvocada contendra una funcion constructora de
empleado con las propiedades nombre, apellido, edad, fechaCreacion. En caso de que ya hubiera una instancia devolver
el objeto previmente instanciado
*/
(function () {

    let instance;

    function empleado() {

        if (instance === undefined) {
            this.nombre = "Jorge"
            this.apellido = "Perez"
            this.edad = 35
            this.fechaCreacion = Date().slice(4,24)
            instance = this
        }
        return instance

    }

    window.Empleado = empleado
})()
