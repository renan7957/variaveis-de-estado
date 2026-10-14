import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';

export default function Calculadora() {

    const [num1, setnum1] = useState("");
    const [num2, setnum2] = useState("");
    const [resp, setresp] = useState("");

    function somar() {
        let soma = Number(num1) + Number(num2);
        setresp(soma);
    }

    function subtrair() {
        let sub = Number(num1) - Number(num2);
        setresp(sub);
    }

    function multiplicar() {
        let mult = Number(num1) * Number(num2);
        setresp(mult);
    }

    function divisao() {
        let div = Number(num1) / Number(num2);
        setresp(div);
    }

    return (

        <div className='pagina-calculadora'>
                <Cabecalho titulo = "calculadoraaa"/>
            <section className='section'>


                <div className='a'>                    <h2>Calculadora</h2>

                    <div className='inputs'>
                        <input type="text" value={num1} onChange={(e) => setnum1(e.target.value)} />
                        <input type="text" value={num2} onChange={(e) => setnum2(e.target.value)} />

                        <div className='igual'>= {resp} </div>

                        


                        <div className='botoes'>
                            <button onClick={somar}>Somar</button>
                            <button onClick={subtrair}>Subtrair</button>
                            <button onClick={multiplicar}>Multiplicar</button>
                            <button onClick={divisao}>Divisão</button>
                        </div>
                    </div>



                </div>
            </section>


        </div>


    );
}