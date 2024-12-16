import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./action";
const todosSlice= createSlice({
    name:"todos",
    initialState:{
        todos:[],
        status:"idle",
        error:null,
    },
    reducers:{
        editTodo: (state, action) => {
            const { id, title, completed } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
                todo.completed = completed;
            }
        },
        addTodo: (state, action) => {
            const newTodo = {
                id: state.todos.length + 1, // Assign a new unique ID
                ...action.payload,
            };
            state.todos.push(newTodo);
        },
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchTodos.pending, (state)=>{
            state.status="loading"
        })
        .addCase(fetchTodos.fulfilled, (state, action)=>{
            state.status="succeeded"
            state.todos= action.payload
        })
        .addCase(fetchTodos.rejected,(state, action)=>{
            state.status="failed"
            state.error= action.error.message
        })
    }
})
export const { editTodo, addTodo } = todosSlice.actions;
export default todosSlice.reducer