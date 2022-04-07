import { useSelector } from 'react-redux'
import Board from './Board'
import TargetBoard from './TargetBoard'
import './Game.scss'

function Game() {  
  const score = useSelector(state => state.game.score)

  return (
    <div className='tutorial'>
      <div className='game-details'>
        <h2>Match this target board</h2>
        <div className='target-board'>
          <TargetBoard/>
        </div>
        <h2>Score: {score}</h2>
      </div>
      <div className='board'>
        <Board/>
      </div>
    </div>
  )
}

export default Game