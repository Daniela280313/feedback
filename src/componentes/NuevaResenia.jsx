import { useState } from "react"
import Rating from "./Rating"

const NuevaResenia = ({addResenia}) => {

    //Estados iniciales para calificacion y texto
    const [rating, setRating] = useState(10)
    const [text, setText] = useState('')

    //Asignar el estado de nota a rating 
    const selectRating = (nota) => { 
        setRating(nota)
     }

     //metodo para añadir nueva reseña
     const controlSumbit = (e) => {
        e.preventDefault();
      //crear un objeto resenia
      let newResenia ={
        rating,
        text
      }
      //añadir la nuva resenia
      addResenia(newResenia)
     }

    return (
        <div className="card">
            <form onSubmit={ controlSumbit }>
                <h2>Como calificarias el curso?</h2>
                    <Rating 
                        selectRating={selectRating}
                    />
                <div className="input-group">

                    <input type="text" placeholder="Escriba aqui su comentario" onChange={(e) => {setText(e.target.value)}}/>
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default NuevaResenia