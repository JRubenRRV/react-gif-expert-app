import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([])

    useEffect(() => { //Sirve para que se ejecute el codigo indicado solo una vez cuando se carga el componente
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=Redbullracing&api_key=9BvLBMTU3CUzTbRLcfRs0X6QC4Jbw7sk';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return  {
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setimages(gifs);
    }

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
