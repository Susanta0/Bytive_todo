import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos= createAsyncThunk('fetchtodos', async ()=>{
    const response= await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const finalResponse= await response.json()
    return finalResponse
    // console.log(finalResponse)
})