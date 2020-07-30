import React, { useState, useEffect } from 'react';
import PinCard from "../pinCard/pinCard.view";
import styles from "./listPins.module.css";

const ListPins = () => {

    const [pins, setPins] = useState([]);

    useEffect(() => {
        const url = 'http://localhost/api/pins';
        const options = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch(url, options)
            .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                    console.log("List pins saved");
                    setPins(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);


    return (
        <div className={styles.__contenedor}>
            {pins && pins.map(pin => {
                return (
                    <PinCard
                        note={pin.note}
                        mediaUrl={pin.media_url}
                        key={pin.id}
                    />
                );
            })}
        </div>
    );
};

export default ListPins;