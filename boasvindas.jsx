import React from "react";

function BoasVindas(){
    const nome ="mundo"; //variavel javascript

    return (
        <div>
            <h1>ola, {nome}</h1> /*{} usou uma expressão js no jsx */
            <p>este é o seu primeiro componente funcional em react</p>
        </div>
    );
}

export default BoasVindas;