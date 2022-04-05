import { createSlice } from "@reduxjs/toolkit";
import { generateBoard, findEmptySpace, findclickedBlock, canMove } from "../../utils/index.js"

let board = generateBoard(3)

export const tutorialSlice = createSlice({
    name: 'tutorial',
    initialState: {
        board: board,
        targetBoard: board,
        score: 0,
        hasTutorialEnded: false
    },
    reducers: {
        moveBlock: (state, action) => {
            let emptySpace = findEmptySpace(state.board)
            let clickedBlock = findclickedBlock(state.board, action.payload)
            let temp = {...state.board[clickedBlock[0]][clickedBlock[1]]}

            if(canMove(emptySpace, clickedBlock)){
                state.board[clickedBlock[0]][clickedBlock[1]] = {...state.board[emptySpace[0]][emptySpace[1]]}
                state.board[emptySpace[0]][emptySpace[1]] =  temp

            }
        },
    }
})

export const { moveBlock } = tutorialSlice.actions

export default tutorialSlice.reducer