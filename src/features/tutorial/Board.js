import { useDispatch, useSelector } from 'react-redux'
import { moveBlock } from './tutorialSlice'

function Board({ isTargetBoard }) {
  const board = useSelector(state => state.tutorial.board)
  const targetBoard = useSelector(state => state.tutorial.targetBoard)
  const dispatch = useDispatch()

  function mapBoard(board, isTarget){
    if(!isTarget){
      return board.map((element)=>(
          element.map((square)=>{
            if(square.color === 'none'){
                return <div className='square' key={square.id} onClick={()=>dispatch(moveBlock(square.id))} style={{ backgroundColor: square.color, opacity: 0 }}></div>
            }
            else{
                return <div className='square' key={square.id} onClick={()=>dispatch(moveBlock(square.id))} style={{ backgroundColor: square.color }}></div>
            }
        })
      ))
    }
    return board.map((element)=>(
      element.map((square)=>{
        if(square.color === 'none'){
            return <div className='square' key={square.id} style={{ backgroundColor: square.color, opacity: 0 }}></div>
        }
        else{
            return <div className='square' key={square.id} style={{ backgroundColor: square.color }}></div>
        }
    })
  )) 
  }

  return (
    <>
        {isTargetBoard ? mapBoard(targetBoard) : mapBoard(board, isTargetBoard)}
    </>
  )
}

export default Board