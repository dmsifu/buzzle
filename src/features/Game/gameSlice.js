import { createSlice } from "@reduxjs/toolkit";
import { generateBoard, randomizeBoard, findEmptySpace, findClickedBlock, canMove } from "../../utils/index.js"

let initialBoard = generateBoard(3)
let initialTargetBoard = randomizeBoard(initialBoard)

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        board: initialBoard,
        targetBoard: initialTargetBoard,
        gameText: "Can you match the boards?",
        boardStyle: "board3x3",
        targetBoardStyle: "target-board3x3",
        currentBoardSize: 9,
        currentGameScore: 0,
        totalGlobalScore: 0,
        isOnLevelSelect: false
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
                for (let i = 0; i < Math.sqrt(state.currentBoardSize); i++) {
                    for (let j = 0; j < Math.sqrt(state.currentBoardSize); j++) {
                        if(state.board[i][j].color === state.targetBoard[i][j].color){
                            correctSquarePlacement+=1
                        }
                    }
                }
                if(correctSquarePlacement === state.currentBoardSize){
                    state.board = generateBoard(Math.sqrt(state.currentBoardSize), state.currentGameScore)
                    state.targetBoard = randomizeBoard(state.board)
                    state.currentGameScore+=1
                    state.totalGlobalScore+=1
                }
            }
        },
        changeGameText: (state, action) =>{
            if(state.totalGlobalScore < 7) {
                switch (action.payload) {
                    case 1:
                        state.gameText = "Nice!"
                        break;
                    case 2:
                        state.gameText = "Score 7 boints for a reward :)"
                        break;
                    case 3:
                        state.gameText = "Red seems like a neat color"
                        break;
                    case 5:
                        state.gameText = "7 is a lucky number!"
                        break;
                    case 7:
                        state.gameText = "New levels unlocked!"
                        break;
                    default:
                        state.gameText = "Can you match the boards?"
                        break;
                }
            }
            else{ 
                state.gameText = "Can you match the boards?"
            }
        },
        setIsOnLevelSelect: (state, action) =>{
            state.isOnLevelSelect = action.payload
        },
        setBoardSize: (state, action) => {
            state.currentBoardSize = action.payload
        },
        setNewBoard: (state) => {
            let size = Math.sqrt(state.currentBoardSize)
            state.board = generateBoard(size)
            state.targetBoard = randomizeBoard(state.board)
            state.boardStyle = `board${size}x${size}`
            state.targetBoardStyle = `target-board${size}x${size}`
            state.currentGameScore = 0
        },
        setTotalGlobalScore: (state, action) => {
            state.totalGlobalScore = action.payload
        }
    }
})

export const { moveBlock, changeGameText, setIsOnLevelSelect, setBoardSize, setNewBoard, setTotalGlobalScore } = gameSlice.actions

export default gameSlice.reducer