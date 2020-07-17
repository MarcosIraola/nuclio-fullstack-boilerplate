import React from 'react';
import './Calculadora.css';

const Calculadora = () => {

    return (
        <div className="app">

            <div className={"contenedor"}>

                <h1>CALCULADORA</h1>
                <div className="screen2">
                    <input type={"text"} className={"screen"} />
                </div>

                <div className="numeros">
                    {/*<Button value={1} color={'gray'} click={} >1</Button>*/}
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className="op">+</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className="op">-</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="op">*</button>
                    <button className="op">CE</button>
                    <button>0</button>
                    <button className="igual">=</button>
                    <button className="op">/</button>
                </div>
            </div>
        </div>
    );
};

export default Calculadora;