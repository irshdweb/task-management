import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: action.payload.task.id,
                name: action.payload.task.name,
                description: action.payload.task.description,
                date: action.payload.task.date
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        searchTask: (state, action)=>{
            console.log(action.payload.id.length)
            if(action.payload.id.length === 0){
                return state
            }
            else{
                return state.filter((user) => user.name.toLowerCase().includes(action.payload.id.toLowerCase()))
            }
        }
    }
});

export const {addTask, deleteTask, searchTask} = tasksSlice.actions;

export default tasksSlice.reducer;