import { useSelector, useDispatch } from 'react-redux'
import './Tutorial.scss'

function Tutorial() {

    const board = useSelector(state => state.tutorial.board)
    const dispatch = useDispatch()

  return (
    <section className='tutorial'>
        <div className='board'>
            {board.map((square)=>(
                <div className='square' key={square.id} style={{ backgroundColor: square.color }}></div>
            ))}
        </div>
    </section>
  )
}

export default Tutorial