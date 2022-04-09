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
  const gameText = useSelector(state=> state.game.gameText)

  useEffect(() => {
    dispatch(changeGameText(score))
  }, [dispatch, score])
  

  return (
    <div className='game'>
      <div className='game-details'>
        <motion.h2 
          key={nanoid()}
          animate={{ opacity: [0,.5,1], y: [-10,0], transition: { duration: .3 } }}
        >
          {gameText}
        </motion.h2>
        <div className='target-board'>
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
        <div className='board'>
          <Board/>
        </div>
    </div>
  )
}

export default Game