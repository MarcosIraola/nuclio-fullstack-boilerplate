import React from 'react';
import styles from './participaSP.module.css'

const Participa = () => {

    return (
        <div className={styles.__contenedor}>
            <span className={styles.__titulo}>PARTICIPA EN LA PRÓXIMA EDICION</span>

            <div className={styles.__contenido}>
                <div className={styles.__info}>
                    <span>TE ESTAMOS BUSCANDO</span>
                    <p><br/>Lorem ipsum dolor sit amet consectetur <br/><br/> adipiscing elit aliquam eget nullam <br/><br/> pellentesque aliquam curabitur cociis.</p>
                </div>

                <div className={styles.__formulario}>
                    <span className={styles.__tituloFrom}>Si deseas participar</span>
                    <span className={styles.__tituloFrom}>REGISTRATE AQUI</span>

                    <label htmlFor="nombre">
                        <input id="nombre" type="text" className={styles.__form__relleno} placeholder='NOMBRE' />
                    </label>
                    <label htmlFor="email">
                        <input id="email" type="text" className={styles.__form__relleno} placeholder='EMAIL' />
                    </label>
                    <label htmlFor="password">
                        <input id="password" type="password" className={styles.__form__relleno} placeholder='CONTRASEÑA' />
                    </label>
                    <label htmlFor="confirmPassword">
                        <input id="confirmPassword" type="password" className={styles.__form__relleno} placeholder='REPITE LA CONTRASEÑA' />
                    </label>

                    <span className={styles.__boton}>ENVIAR</span>

                </div>
            </div>
        </div>
    );
}

export default Participa;