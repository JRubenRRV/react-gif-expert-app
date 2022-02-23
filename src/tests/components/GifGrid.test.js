import React from 'react';
import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas al componente GifGrid', () => {

    const category = 'Doom';

    test('el componente debe renderizarse correctamente', () => { //Valida que se renderize el componente sin datos

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => { //Valida que se renderize el componente con datos

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/lol/what.jpg',
            title: 'fldsmdfr'
        },
        {
            id: '123',
            url: 'https://localhost/lol/what.jpg',
            title: 'fldsmdfr'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length); //Valida que el componente se pinte segun el numero de gifs indicados
        
    })
})