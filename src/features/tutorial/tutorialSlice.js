import { createSlice } from "@reduxjs/toolkit";

export const tutorialSlice = createSlice({
    name: 'tutorial',
    initialState: {
        board: [
            {
                id: 1,
                hasBlock:true,
                color: 'red'
            },
            {
                id: 2,
                hasBlock:false,
                color: 'white'
            },
            {
                id: 3,
                hasBlock:true,
                color: 'grey'
            },
            {
                id: 4,
                hasBlock:true,
                color: 'blue'
            }
        ],
        hasTutorialEnded: false
    },
    reducers: {
    }

})

//export const { moveBlock } = tutorialSlice.actions
    
export default tutorialSlice.reducer