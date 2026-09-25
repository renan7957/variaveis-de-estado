import { useState } from 'react';
import './index.scss';

export default function Contador() {

    const [contador, setcontador] = useState(0);

    function mais() {
        setcontador(contador + 1);
        
    }

    function menos() {
        setcontador(contador - 1);
    }
    

    return (


        <div className="pagina-contador">
            <h1>Contador</h1>

            <button onClick={menos}>-</button>

            <h2>{contador}</h2>

            <button onClick={mais}>+</button>

        </div>
    );
}