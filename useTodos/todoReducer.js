export const todoReducer = (initialState = [], action) => {

    console.log("console action:", action );

    //Casos de uso de las acciones
    switch (action.type) {
        case "[TODO] Add Todo":
            //nos traemos el estado anterior O arreglo anterior, porque no podemos mutar nuestro
            return [...initialState, action.payload ] 
            //cuando no esta listo aun  throw new Error("action.type Action1 no esta implementada aun");
        case "[TODO] Remove Todo":
            //retorno el estado inicial menos el id selecionado, usando filter
            return initialState.filter( (todo) => todo.id !== action.payload )
        case "[TODO] Toggle Todo":
            return initialState.map( (todo) => {
                if( todo.id === action.payload) { //el id es igual al que le envio en el payload
                    return {
                        ...todo,
                        done: !todo.done //le cambio el done
                    }
                } return todo; //sino retorna el todo
            } )
    default:
        return initialState; //por defecto retorna ele stado inicial
    }

}

