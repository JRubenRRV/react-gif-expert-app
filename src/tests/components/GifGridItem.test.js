import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('pruebas en GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/hola.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    
    test('debe de mostrar el componente correctamente', () => { //Valida que el componente se renderize correctamente
        expect(wrapper).toMatchSnapshot()
    })

    test('debe tener un parrafo con el title', () => { //Valida que el texto sea correcto
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url y alt', () => { //Valida que las propiedades sean correctas
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe tener animate__fadeIn', () => { //Valida que el elemento contenga la clase
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})