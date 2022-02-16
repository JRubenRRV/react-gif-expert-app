import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('pruebas en GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/hola.jpg';
    
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
        expect(wrapper).toMatchSnapshot()
    })
})