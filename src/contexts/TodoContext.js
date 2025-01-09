import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},  //for add paragraph
    updateTodo: (id, todo) => {}, //update paragraph
    deleteTodo: (id) => {},   //remove paragraph
    toggleComplete: (id) => {}  //check paragraph
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider