import { useState } from 'react';
import './index.scss';



export default function Escrever() {

    const [texto, setTexto] = useState('oioioioiioioiio');
    const [novo, setNovo] = useState('');
    const [mudar2, setMudar2] = useState('?');
    const [cor, setCor] = useState('');
    const [check, setCheck] = useState(true);


    function mudar(e) {
        let novotexto = e.target.value;
        setTexto(novotexto);
    }




    function pegartexto(e) {
        let novo = e.target.value;
        setNovo(novo);
    }
    function mudar3() {
        setMudar2(novo);
    }



    function mudarcor(e) {
        let cor = e.target.value;
        setCor(cor);
    }


    function mudar4(e) {
        let novova = e.target.checked;
        setCheck(novova);
    }

    return (


        <div className="pagina-escrever" style={{backgroundColor: cor}}>
            <div className='oi'>
                <h1>{texto}</h1>

                <input type="text" placeholder="Digite algo..." onChange={mudar} />
            </div>
            <hr></hr>



            <div className='oi2'>
                <h1>{mudar2}</h1>
                <input type="text" placeholder="Digite algo..." onChange={pegartexto} />
                <button onClick={mudar3}>Mudar</button>

            </div>


            <div className='oi3'>
                <h1>A cor selecionada é: {cor}</h1>
                <input type="color" onChange={mudarcor} />

            </div>


            <div className='oi4'>
                <h1>Gosta de programar? {check ? 'Sim' : 'Não'}</h1>
                <input type="checkbox" onChange={mudar4} />
            </div>        
        </div>
    );
}