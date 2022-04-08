import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import Board from './Board'
import TargetBoard from './TargetBoard'
import './Game.scss'
import { changeGameText } from './gameSlice'

function Game() {
  const dispatch = useDispatch()
  const score = useSelector(state => state.game.currentGameScore)
  const gameText = useSelector(state=> state.game.gameText)

  useEffect(() => {
    dispatch(changeGameText(score))
  }, [score])
  

  return (
    <div className='game'>
      <div className='game-details'>
        <h2>{gameText}</h2>
        <div className='target-board'>
          <TargetBoard/>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.h2 
            className='currentGameScore'
            key={nanoid()}
            animate={{ scale: [1,1.5,1], transition: {duration: .3} }}
            exit={{ opacity: [1,0], transition: {duration: .1} }}
          > 
            Score: {score}
          </motion.h2>
        </AnimatePresence>
      </div>
        <div className='board'>
          <Board/>
        </div>
    </div>
  )
}

export default Game