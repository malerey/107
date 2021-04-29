import './App.css'
// import Button from './components/Button'
import Tarjeta from './components/Tarjeta'
import Contacto from './components/Contacto'

function App() {
  return (
    <div className="App">
      {/* <Button /> */}
      <Tarjeta nombre="Sol"/>
      <Contacto />
    </div>
  );
}

export default App;


