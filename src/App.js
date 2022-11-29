//dependencias necesarias
import { useState } from "react";
//data
import Resenias from "./data/Resenias";
//componentes
import Header from "./componentes/Header";
import Resenia from "./componentes/Resenia";
import ReseniaList from "./componentes/ReseniaList";

function App(){

    //crear estado inicial para arreglo de resenias
    const [lista_resenias ,
           setListaResenias  ] = useState(Resenias)

    //metodo para borrar una resenia:
    const deleteResenia = id => {
        window.confirm("estas seguro de borrar la resenia")
    }       

    return (
        <div className="container">
             <ReseniaList
                deleteResenia={deleteResenia}
                listaresenias={lista_resenias}  />
        </div>
        
    )
}
export default App;