import LevelCard from './LevelCard'
import '../../sass/Levels.scss'

function Levels() {
  return (
    <div className="levels">
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
    </div>
  )
}

export default Levels