import { createSlice } from "@reduxjs/toolkit";
import lists from "../Data";

const initialState = {
    list: lists,
    revealCardText: true,
    modalVisible: false,
    modalTitle: '',
}

const MySlice = createSlice({
    name: 'MySlice',
    initialState,
    reducers: {
        setmodalTitle(state, action){
            state.modalTitle = action.payload
            console.log("🚀 ~ file: MySlice.js:16 ~ setModaltitle ~ action.payload", action.payload)
        },
        setmodalVisible(state, action){
            state.modalVisible = action.payload
            // console.log("🚀 ~ file: MySlice.js:15 ~ setmodalVisible ~ action.payload", action.payload)
        },
        setRevealCardText(state, action){
            state.revealCardText = action.payload
        },
        addPlayer(state, action){
            state.arr = [...state.arr, {pl: state.arr.length + 1 ,id:Math.random(),counter:0}]
        },
        deletePlayer(state, action){
            state.arr = state.arr.filter((item) => item.id != action.payload)
            console.log("🚀 ~ fil: MySlice.js:16 ~ deletePlayer ~ action", action)
        },
        filteredArray(state, action){
            state.list = action?.payload
            console.log("🚀 ~ fil: MySlice.js:16 ~ filteredArray ~ action", action?.payload)
        },
    }
})

export const {addPlayer,deletePlayer,filteredArray,setRevealCardText,setmodalVisible,setmodalTitle} = MySlice.actions
export default MySlice.reducer