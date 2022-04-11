import { AnimatePresence, motion } from 'framer-motion'
import LevelCard from './LevelCard'
import '../../sass/Levels.scss'
import { nanoid } from 'nanoid'

function Levels() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div 
        className="levels" 
        key={nanoid()} 
        animate={{ opacity:  [0,1]}}
        exit={{ opacity: [1,0] }}
      >
          <div className='level'>
              <h2>3x3</h2>
              <LevelCard size={[1,2,3]} styleName={"board3x3"}/>
          </div>
          <div className='level'>
              <h2>4x4</h2>
              <LevelCard size={[1,2,3,4]} styleName={"board4x4"}/>
          </div>
          <div className='level'>
              <h2>5x5</h2>
              <LevelCard size={[1,2,3,4,5]} styleName={"board5x5"}/>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Levels