import { useState } from "react"

const Rating = ({ selectRating }) => {

    //estados inicieales de la calificacion
    const[ notaElegida, setNotaElegida ] = useState(10)

    //metodo para cambiar la nota
    const cambiarNota = (e) =>  {
        //console.log(e.currentTarget.value)
        setNotaElegida(+e.currentTarget.value)
        selectRating(+e.currentTarget.value)
    }

    return (
        <ul className="rating">
            { [ 1,2,3,4,5,6,7,8,9,10 ].map((numero)=>(
                <li key={numero}>
                    <input type="radio" 
                    id={ `num${numero}` } 
                    name="rating" 
                    value={numero}
                    onChange={ cambiarNota }
                    checked = { notaElegida === numero  }
                    />
                    <label htmlFor={ `num${numero}` }> {numero} </label>
                </li>
            )) }    
        </ul>
    )
}

export default Rating