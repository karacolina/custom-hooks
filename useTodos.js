import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

    
const init = () => {
  //parse convierte un string a un objeto,
  //va a hacer la evaluacion del objeto, si en el local storage hay algun valor
  return JSON.parse(localStorage.getItem("todos")) || [];
};


export const useTodos = () => {
  
      //estado final
      const [todosState, dispatch] = useReducer(todoReducer, [], init);
    
      useEffect(() => {
        //convierte un objeto a string
        localStorage.setItem("todos", JSON.stringify(todosState));
      }, [todosState]);

      const handleNewTodo = (todo) => {
        console.log(todo);
        //aca esta la accion que necesitamos enviar usando el reducer
        const action = {
          type: "[TODO] Add Todo",
          payload: todo,
        };
    
        //aca despacho la accion
        dispatch(action);
      };
    
      const handleDelete = (id) => {
        console.log(id);
        dispatch({
          type: "[TODO] Remove Todo",
          payload: id,
        });
      };
    
      const handleToggle = (id) => {
        console.log(id);
        dispatch({
          type: "[TODO] Toggle Todo",
          payload: id,
        });
      };
    

    return {
      todosState,
      handleDelete,
      handleToggle,
      handleNewTodo,
      todosCount: todosState.length,
      pendingTodos: todosState.filter( todo => !todo.done ).length
  }
}



