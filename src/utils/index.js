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

export function generateBoard(size, score){
    let board = []
    for (let i = 0; i < size; i++) {
        board.push([])
        for (let j = 0; j < size; j++) {
            board[i].push(generateSquare(score)) 
        }
    }

    let randomRowIndex = Math.floor(Math.random()*size)
    let randomColumnIndex = Math.floor(Math.random()*size)

    board[randomRowIndex][randomColumnIndex].id = nanoid()
    board[randomRowIndex][randomColumnIndex].color = 'none'
    board[randomRowIndex][randomColumnIndex].hasBlock = false

    return board;
}

function generateSquare(score){
    let colors = score > 1 ? [darkgrey, blue, watermelon] : [darkgrey, blue]
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
