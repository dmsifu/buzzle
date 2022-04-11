import { useSelector, useDispatch } from 'react-redux'
import { changeGameText } from './gameSlice'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'
import Board from './Board'
import TargetBoard from './TargetBoard'
import '../../sass/Game.scss'

function Game() {
  const dispatch = useDispatch()
  const score = useSelector(state => state.game.currentGameScore)
  const boints = useSelector( state => state.game.totalGlobalScore)
  const gameText = useSelector(state=> state.game.gameText)
  const boardStyle = useSelector(state => state.game.boardStyle)
  const targetBoardStyle = useSelector(state => state.game.targetBoardStyle)

  useEffect(() => {
    dispatch(changeGameText(score))
    localStorage.setItem('boints', boints)
  }, [dispatch, score])
  
  return (
    <motion.div 
      className='game'
      key={nanoid()}
      animate={{ opacity: [0,1], y: [-100,0] }}
    >
      <div className='game-details'>
        <motion.h2 
          key={nanoid()}
          animate={{ opacity: [0,.5,1], y: [-10,0], transition: { duration: .3 } }}
        >
          {gameText}
        </motion.h2>
        <div className={targetBoardStyle}>
          <TargetBoard/>
        </div>
          <motion.h2 
            className='currentGameScore'
            key={nanoid()}
            animate={{ scale: [1,1.5,1], opacity: [0,1], transition: {duration: .3} }}
          > 
            Score: {score}
          </motion.h2>
      </div>
        <div className={boardStyle}>
          <Board/>
        </div>
    </motion.div>
  )
}

export default Game