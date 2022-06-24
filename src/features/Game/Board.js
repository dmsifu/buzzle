import { useDispatch, useSelector } from 'react-redux'
import { moveBlock } from './gameSlice'
import { AnimatePresence, motion } from 'framer-motion'

function Board() {
  const dispatch = useDispatch()
  const board = useSelector(state => state.game.board)

  function squareClicked(e, id){
    dispatch(moveBlock(id))
  }

  return (
    <AnimatePresence>
      {board.map((element)=>(
        element.map((square,i)=>{
          if(square.color === 'none'){
              return <div className='square' key={square.id} style={{ backgroundColor: square.color, opacity: 0 }}></div>
          }
          else{
              return(
                  <motion.div 
                    className='square' 
                    key={square.id} 
                    onClick={(e)=>squareClicked(e,square.id)} 
                    style={{ backgroundColor: square.color }}
                    animate={{ opacity: [0,1], transition: {delay: i/5}}}
                    whileHover={{ border: '2px rgb(255, 255, 255) solid'}}
                  >
                  </motion.div>
              )
          }
        })
      ))}
    </AnimatePresence>
  )
}

export default Board