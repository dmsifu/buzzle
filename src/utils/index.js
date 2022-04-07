import { nanoid } from "nanoid"

const blue = '#375396'
const watermelon = '#de045b'
const darkgrey = '#332f33'

export function randomizeBoard(oldBoard){
    let size = oldBoard.length 
    let board = JSON.parse(JSON.stringify(oldBoard))

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let randomRowIndex = Math.floor(Math.random()*size)
            let randomColumnIndex = Math.floor(Math.random()*size)
            let temp = {id: board[i][j].id, color: board[i][j].color, hasBlock: board[i][j].hasBlock}

            board[i][j].id = board[randomRowIndex][randomColumnIndex].id
            board[i][j].color = board[randomRowIndex][randomColumnIndex].color
            board[i][j].hasBlock = board[randomRowIndex][randomColumnIndex].hasBlock   

            board[randomRowIndex][randomColumnIndex].id = temp.id
            board[randomRowIndex][randomColumnIndex].color = temp.color
            board[randomRowIndex][randomColumnIndex].hasBlock  = temp.hasBlock
        }
    }
    return board
}

export function generateBoard(size){
    let board = []

    switch (size) {
        case 3:
            for (let i = 0; i < 3; i++) {
                board.push([generateSquare(),generateSquare(),generateSquare()])
            }
            break;
        case 4:
            for (let i = 0; i < 4; i++) {
                board.push([generateSquare(),generateSquare(),generateSquare(),generateSquare()])
            }
            break;
        case 5:
            for (let i = 0; i < 5; i++) {
                board.push([generateSquare(),generateSquare(),generateSquare(),generateSquare(),generateSquare()])
            }
            break;
    
        default:
            for (let i = 0; i < 3; i++) {
                board.push([generateSquare(),generateSquare(),generateSquare()])
            }
            break;
    }

    let randomRowIndex = Math.floor(Math.random()*size)
    let randomColumnIndex = Math.floor(Math.random()*size)

    board[randomRowIndex][randomColumnIndex].id = nanoid()
    board[randomRowIndex][randomColumnIndex].color = 'none'
    board[randomRowIndex][randomColumnIndex].hasBlock = false

    return board;
}

function generateSquare(){
    let colors = [darkgrey, blue]
    return {
        id: nanoid(),
        color: colors[Math.floor(Math.random()*colors.length)],
        hasBlock: true
    }
}

export function findEmptySpace(currentBoard){
    for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard.length; j++) {
            if(currentBoard[i][j].hasBlock === false){
                return [i,j]
            }
        }
    }
}

export function findClickedBlock(currentBoard, id){
    for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard.length; j++) {
            if(currentBoard[i][j].id === id){
                return [i,j]
            }
        }
    }
}

//computes the distance between block/empty space and if its 1 then they are adjacent 
export function canMove(emptySpaceLocation, blockLocation){
    if( Math.abs(emptySpaceLocation[0] - blockLocation[0]) + Math.abs(emptySpaceLocation[1] - blockLocation[1]) === 1){
        return true
    }
    return false
}
