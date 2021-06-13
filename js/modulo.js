(function () {
    const getUsersNames = (callback) => {

        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((jsonObj) => {
                const usersList = filterUserName(jsonObj)
                callback(createUserList(usersList))
            })
    }
    const filterUserName = (listOfUsers) => {
        return listOfUsers.map((value, index, array) => {
            return value.name
        })
    }

    const createUserList = (usersList) => {
        const orderedList = document.createElement('ol')
        usersList.forEach((item) => {
            const itemList = document.createElement('li')
            itemList.textContent = item
            orderedList.appendChild(itemList)
        })
        return orderedList
    }


    window.app = {
        getUsersNames: (callback) => {
            getUsersNames(callback)
        }
    }
})()

/*
1- Modulo (exportara en window) -> Esta funcion autoinvocada realizara una peticion ajax a JSONplaceholder pidiendo todos
los usuarios. Exportara una funcion llamada geUsersNames() -> que devolvera un array con todos los nombres que se recibieron
Se debe intentar de que no se puede ver el funcionamiento interno de getUsersNames()
 */