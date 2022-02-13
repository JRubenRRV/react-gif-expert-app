import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['Redbull', 'Merceds', 'Ferrari', 'Mclaren'];
    const [categories, setCategories] = useState(['Redbull', 'Merceds', 'Ferrari', 'Mclaren']);

    const handleAdd = () => {
        // setCategories([...categories, 'Alpine']);
        setCategories(cats => [...categories, 'Alpine']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>
        </>
    )
}
