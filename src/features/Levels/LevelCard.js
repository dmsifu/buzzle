import { nanoid } from "nanoid"

function LevelCard({size}) {
  return (
    <div className="board">
        {size.map(()=>{
            return size.map(()=>{
                return <div className='square' key={nanoid()}></div>
            })
        })}
    </div>
  )
}

export default LevelCard