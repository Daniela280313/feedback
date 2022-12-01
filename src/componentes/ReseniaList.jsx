import Resenia from "./Resenia"

const ReseniaList = ({lista_resenias , deleteResenia})=>{
    return(
        <div className="feedback-list">Lista de resenias 
        {/*recorrer el arreglo de reseñas*/}
        { lista_resenias.map((resenia)=>(
            <Resenia
            deleteResenia={deleteResenia}
            key={resenia.id}
            resenia = {resenia} 
            />
        )) }
        </div>
    )
}


export default ReseniaList