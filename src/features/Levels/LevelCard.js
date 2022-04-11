import { nanoid } from "nanoid"
import { useDispatch, useSelector } from "react-redux"
import { setIsOnLevelSelect, setBoardSize, setNewBoard } from "../Game/gameSlice"

function LevelCard({size, styleName}) {
  const dispatch = useDispatch()
  const boints = useSelector(state => state.game.totalGlobalScore)

  function levelClicked(){
    if(boints > 6 || styleName==='board3x3'){
      dispatch(setIsOnLevelSelect(false))
      dispatch(setBoardSize(size.length*size.length))
      dispatch(setNewBoard())
    }
  }

  return (
    <div className={boints < 6 && styleName!=='board3x3' ? `${styleName}-locked` : styleName} onClick={levelClicked}>
        {size.map(()=>{
            return size.map(()=>{
                return <div className='square' key={nanoid()}></div>
            })
        })}
    </div>
  )
}

export default LevelCard