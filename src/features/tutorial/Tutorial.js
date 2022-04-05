import Board from './Board'
import './Tutorial.scss'

function Tutorial() {  

  return (
    <div className='tutorial'>
      <div className='game-details'>
        <h2>Match this target board</h2>
        <div className='target-board'>
          <Board isTargetBoard={true}/>
        </div>
        <h2>Score</h2>
      </div>
      <div className='board'>
        <Board isTargetBoard={false} />
      </div>
    </div>
  )
}

export default Tutorial