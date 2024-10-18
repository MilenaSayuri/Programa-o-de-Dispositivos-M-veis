import React from "react";

const LembreteLista = () => {
    const lembretesFicticios = [
        "Preparar aula de programação",
        "Fazer feira",
        "Preparar marmitas"
    ]
    return(
        <ul className="list-group">
        {lembretesFicticios.map((lembrete, index) => (
            <li key={index} className="list-group-item">{lembrete}</li>
        ))}
        </ul>
    )
}

export default LembreteLista