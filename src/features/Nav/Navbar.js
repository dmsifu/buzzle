import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOnLevelSelect } from '../Game/gameSlice'
import '../../sass/Navbar.scss'

function Navbar() {
  const dispatch = useDispatch()
  const globalScore = useSelector(state => state.game.totalGlobalScore)

  return (
    <ul className="navbar">
        <motion.li className='boints'>
          {`Total Boints: ${globalScore}`}
        </motion.li>
        <h1 className='buzzle'>Buzzle</h1>
        <motion.li 
          className='level-select'
          animate={globalScore === 7 ? {scale:[1,1.5,1], rotate: [0,10,-10,10,-10, 0], transition: {duration:1.5}} : {scale: 1, rotate: 0}}
          onClick={()=>dispatch(setIsOnLevelSelect(true))}
          whileHover={{scale: 1.1}}
        >
          Level Select
        </motion.li>
    </ul>
  )
}

export default Navbar