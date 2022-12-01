import { useState } from "react";
import Resenia from "./componentes/Resenia";
import Resenias from "./data/Resenias"
import ReseniaList from "./componentes/ReseniaList";
import NuevaResenia from "./componentes/NuevaResenia";

function App(){

  //Estado inicial resenias
  const [lista_resenias, setListaResenias] = useState(Resenias)

  //metodo para añadir una resenia al arreglo
  const addResenia = (newResenia) => {

  //asignar id a la reseña
  newResenia.id =lista_resenias.length + 1
  console.log(newResenia)
  //añadir reseña al arreglo
  setListaResenias( [newResenia , ...lista_resenias] )
  }

  //Metodo para eliminar una reseña
  const deleteResenia = (id) => {
    if(window.confirm('Esta seguro de borrar la reseña?')){
      //Utilizar filter: filtrar las resenias que tengan id diferente al ingresado
      setListaResenias( lista_resenias.filter((resenia) => resenia.id !== id ) )
    }
  }

    return (
        <div className="container">
          <NuevaResenia  addResenia={addResenia} />
            <ReseniaList 
              deleteResenia = {deleteResenia}
              lista_resenias = {lista_resenias} 
            />
        </div>
        
    )
}
export default App;