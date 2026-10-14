import './index.scss'

export default function Cabecalho(props) {
    return (

        <div className='comp-cabecalho'>
            

                <img src='./assets/images/pessoas.png' />
                <h1>{props.titulo ?? "calculadora"}</h1>
           
        </div>

    )
}