import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas a GifExpertApp', () => {

    test('debe renderizarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar una lista de categorias', () => {
        const categories = ['lego', 'spartan'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})