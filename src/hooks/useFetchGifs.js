import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category)  => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { //Sirve para que se ejecute el codigo indicado solo cuando cambia el segundo parametro
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);

    return state;
}