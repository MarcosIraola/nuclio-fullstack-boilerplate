import React from 'react';
import './Button.css';

const Button = (props) => {
    const { value, color, click} = props;

    const styleColor = {
        backgroundColor: color,
    }

    return(
        <input type={"button"} style={styleColor} onClick={click}>
            {value}
        </input>
    );
};

export default Button;