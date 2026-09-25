import { useState } from 'react';
import './index.scss';



export default function Escrever() {

    const [texto, setTexto] = useState('oioioioiioioiio');

    function mudar(e) {
        let novotexto = e.target.value;
        setTexto(novotexto);
    }


    const[mudar2, setMudar2] = useState('oi');
    
    function mudartexto(e) {
        let novotexto2 = e.target.value;
        setMudar2(novotexto2);
    }

    return (


        <div className="pagina-escrever">
            <section>
                <h1>{texto}</h1>

                <input type="text" placeholder="Digite algo..." onChange={mudar} />
            </section>

            <hr></hr>

            <section>
                <h1>{mudar2}</h1>

                <select onChange={mudartexto}>
                    <option>Opção 1</option>
                    <option>Opção 2</option>
                    <option>Opção 3</option>
                </select>

            </section>
        </div>
    );
}