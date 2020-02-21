import React from 'react';
import { useState, useEffect } from 'react';

function Conversor (props) {
    const [ currency , setCurrency ] = useState(Number);
    const [ baseCurrency , setBaseCurrency ] = useState(4.19);
    const [ result , setResult ] = useState(Number);

    async function handleCalc () {
        setResult( currency * baseCurrency );
    }


    return(
        <div className="conversor">
                <h2>{props.moedaA} para {props.moedaB}</h2>
                <input 
                    name='currency'
                    type="text"
                    onChange={ e => setCurrency(e.target.value) }
                    />
                    <button onClick={handleCalc}>
                        Converter
                    </button>

                <h2>Resultado: {result} {baseCurrency} {currency}</h2>
        </div>
    )
}

export default Conversor;

