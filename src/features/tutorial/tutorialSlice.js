import { createSlice } from "@reduxjs/toolkit";
import { create2x2, findEmptySpace, findCurrentBlock, canMove } from "../../utils/index.js"

export const tutorialSlice = createSlice({
    name: 'tutorial',
    initialState: {
        board: create2x2(),
        hasTutorialEnded: false
    },
    reducers: {
        moveBlock: (state, action) => {
            let emptySpace = findEmptySpace(state.board)
            let currentBlock = findCurrentBlock(state.board, action.payload)
            let temp = {...state.board[currentBlock[0]][currentBlock[1]]}

            if(canMove(emptySpace, currentBlock)){
                state.board[currentBlock[0]][currentBlock[1]] = {...state.board[emptySpace[0]][emptySpace[1]]}
                state.board[emptySpace[0]][emptySpace[1]] =  temp
            }
        }   
    }
})

export const { moveBlock } = tutorialSlice.actions

export default tutorialSlice.reducer