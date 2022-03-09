import './App.css';
import Profil from './ProfilComponent/Profil';

function App() {
  return (
    <div className="App">
    <Profil  Bio="Autonome" Profession="apprentis dev"> 
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Strawhat_crew_jolly_roger.svg/1200px-Strawhat_crew_jolly_roger.svg.png'/>
    </Profil>
    </div>
  );
}

export default App;
