import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => { //Valida el cambio de valor en el input
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('no debe de postear la informacion con submit', () => { //Valida que no se llame la funcion
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => { //Valida recorrido del componente
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        //1.simular inputChange
        input.simulate('change', { target: { value } });

        //2.simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //3. setCategories debe ser llamado
        expect(setCategories).toHaveBeenCalledTimes(1); //Valida que se halla llamado n veces
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Valida que se halla llamado como una funcion

        //4. el valor del input debe estar en ''
        expect(input.prop('value')).toBe('');
    })
})