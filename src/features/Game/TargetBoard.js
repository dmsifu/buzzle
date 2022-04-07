import { useSelector } from 'react-redux'

function TargetBoard() {
  const targetBoard = useSelector(state => state.game.targetBoard)

  return (
    <>
      {targetBoard.map((element)=>(
        element.map((square)=>{
          if(square.color === 'none'){
              return <div className='square' key={square.id} style={{ backgroundColor: square.color, opacity: 0 }}></div>
          }
          else{
              return <div className='square' key={square.id} style={{ backgroundColor: square.color }}></div>
          }
        })
      ))}
    </>
  )
}

export default TargetBoard