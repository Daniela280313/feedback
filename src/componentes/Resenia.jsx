import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'


const Resenia = ( { resenia, deleteResenia } ) => {


    return (
        <div className="card">
            <div className="num-display">
                { resenia.rating }
            </div>
            <div className="text-display">
                { resenia.text }
            </div>
            <button onClick={()=>deleteResenia(resenia.id) } className='close'>
             <FaTimes />
            </button>
    
        </div>
    )
}

export default Resenia