import { useDispatch, useSelector } from 'react-redux'
import { moveBlock } from './gameSlice'

function Board() {
  const dispatch = useDispatch()
  const board = useSelector(state => state.game.board)

  function squareClicked(e, id){
    dispatch(moveBlock(id))
    let squareLocation = e.target.getBoundingClientRect()
  }

  return (
    <>
      {board.map((element)=>(
        element.map((square)=>{
          if(square.color === 'none'){
              return <div className='square' key={square.id} style={{ backgroundColor: square.color, opacity: 0 }}></div>
          }
          else{
              return <div className='square' key={square.id} onClick={(e)=>squareClicked(e,square.id)} style={{ backgroundColor: square.color }}></div>
          }
        })
      ))}
    </>
  )
}

export default Board