import { useSelector } from "react-redux";
import Navbar from "./features/Nav/Navbar";
import Game from "./features/Game/Game";
import Levels from "./features/Levels/Levels";
import './sass/App.scss'

function App() {

  const isOnLevelSelect = useSelector(state => state.game.isOnLevelSelect)

  return (
    <div className="app">
      <Navbar/>
      {!isOnLevelSelect && <Game/> }
      {isOnLevelSelect && <Levels/>}
    </div>
  );
}



export default App;
