
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";




function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer texto="Aca van los items" />
      <h2 className="text-center mt-5">Alumno Nicolas Pereyra</h2>

    </div>
  );
}

export default App;
