import { nanoid } from "nanoid"

//hardcode 2x2 for tutorial purposes :)
export function create2x2(){
    return [
            [{id: nanoid(), color: '#375396', hasBlock: true}, {id: nanoid(), color: 'none', hasBlock: false}],
            [{id: nanoid(), color: 'grey', hasBlock: true}, {id: nanoid(), color: '#21a793', hasBlock: true}]
        ]
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

export function findCurrentBlock(currentBoard, id){
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
    if( (Math.abs(emptySpaceLocation[0]) - Math.abs(blockLocation[1])) + (Math.abs(emptySpaceLocation[1]) - Math.abs(blockLocation[0]))){
        return true
    }
    return false
}