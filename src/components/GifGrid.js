import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    useEffect(() => { //Sirve para que se ejecute el codigo indicado solo una vez cuando se carga el componente
        getGifs(category).then(imgs => setimages(imgs));
    }, [category]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map(img => 
                        <GifGridItem key={ img.id } { ...img }/>
                    )
                }
            </div>
        </>
    )
}
