import { useSelector, useDispatch } from 'react-redux'
import './Tutorial.scss'
import { moveBlock } from './tutorialSlice'

function Tutorial() {

    const board = useSelector(state => state.tutorial.board)
    const dispatch = useDispatch()

  return (
    <section className='tutorial'>
      
      <div className='board'>
          {board.map((element)=>(
            element.map((square)=>{
              if(square.color === 'none'){
                return <div className='square' key={square.id} onClick={()=>dispatch(moveBlock(square.id))} style={{ backgroundColor: square.color, opacity: 0 }}></div>
              }
              else{
                return <div className='square' key={square.id} onClick={()=>dispatch(moveBlock(square.id))} style={{ backgroundColor: square.color }}></div>
              }
            })
          ))}
      </div>
    </section>
  )
}

export default Tutorial