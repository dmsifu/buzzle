import { nanoid } from "nanoid"
import { useDispatch } from "react-redux"
import { setIsOnLevelSelect, setBoardSize, setNewBoard } from "../Game/gameSlice"

function LevelCard({size, styleName}) {
  const dispatch = useDispatch()

  function levelClicked(){
    dispatch(setIsOnLevelSelect(false))
    dispatch(setBoardSize(size.length*size.length))
    dispatch(setNewBoard())
  }

  return (
    <div className={styleName} onClick={levelClicked}>
        {size.map(()=>{
            return size.map(()=>{
                return <div className='square' key={nanoid()}></div>
            })
        })}
    </div>
  )
}

export default LevelCard