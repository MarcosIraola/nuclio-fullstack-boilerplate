import React from 'react';

const Modal = ({handleClose, show, children }) =>{

    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div>
            <section className='modal-main'>
                {children}
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    );
}

export default Modal;