import React, { Component } from 'react';

function Conversor (moedaA, moedaB) {



    return(
        <div className="conversor">
            <h2>{moedaA} para {moedaB}</h2>
            <input type="text"></input>
            <input type="button" value="Converter"></input>
            <h2>Valor convertido</h2>
        </div>
    )
}

export default Conversor;

