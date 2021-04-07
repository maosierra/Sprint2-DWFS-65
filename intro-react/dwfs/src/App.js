import NavBar from "./NavBar";

function App() {
  let miNombre = 'Mauricio';

  return (
    <div className="App">
      <NavBar />
      <h1>Hola desde react {miNombre}</h1>
    </div>
  );
}

export default App;
