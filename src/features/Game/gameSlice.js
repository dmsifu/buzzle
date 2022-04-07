import { createSlice } from "@reduxjs/toolkit";
import { generateBoard, randomizeBoard, findEmptySpace, findClickedBlock, canMove } from "../../utils/index.js"

let initialBoard = generateBoard(3)
let initialTargetBoard = randomizeBoard(initialBoard)

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        board: initialBoard,
        targetBoard: initialTargetBoard,
        currentBoardSize: 9,
        score: 0,
    },
    reducers: {
        moveBlock: (state, action) => {
            let emptySpace = findEmptySpace(state.board)
            let clickedBlock = findClickedBlock(state.board, action.payload)
            let temp = state.board[clickedBlock[0]][clickedBlock[1]]

            if(canMove(emptySpace, clickedBlock)){
                state.board[clickedBlock[0]][clickedBlock[1]] = state.board[emptySpace[0]][emptySpace[1]]
                state.board[emptySpace[0]][emptySpace[1]] =  temp

                let correctSquarePlacement = 0
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if(state.board[i][j].color === state.targetBoard[i][j].color){
                            correctSquarePlacement+=1
                        }
                    }
                }
                if(correctSquarePlacement === state.currentBoardSize){
                    state.board = generateBoard(3)
                    state.targetBoard = randomizeBoard(state.board)
                    state.score+=1
                }
            }
        }, 
    }
})

export const { moveBlock, changeBoard } = gameSlice.actions

export default gameSlice.reducer