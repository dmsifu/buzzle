import { useDispatch, useSelector } from "react-redux";
import { setTotalGlobalScore } from "./features/Game/gameSlice"
import Navbar from "./features/Nav/Navbar";
import Game from "./features/Game/Game";
import Levels from "./features/Levels/Levels";

function App() {
  const dispatch = useDispatch()
  const boints = Number(localStorage.getItem('boints'))
  dispatch(setTotalGlobalScore(boints))

  const isOnLevelSelect = useSelector(state => state.game.isOnLevelSelect)

  return (
    <div>
      <Navbar/>
      {!isOnLevelSelect && <Game/> }
      {isOnLevelSelect && <Levels/>}
    </div>
  );
}



export default App;
