import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import './Navbar.scss'

function Navbar() {

  const globalScore = useSelector(state => state.game.totalGlobalScore)

  return (
    <ul className="navbar">
        <li></li>
        <h1>Buzzle</h1>
        <motion.li 
          animate={globalScore === 7 ? {scale:[1,1.5,1], rotate: [10,-10,10,-10, 0], transition: {duration:2}} : {scale: 1}}
        >
          Level Select
        </motion.li>
    </ul>
  )
}

export default Navbar