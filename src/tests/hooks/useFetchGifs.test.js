import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas al hook useFetchGifs', () => {
    test('debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Lego'));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe retornar un arreglo de imgs y loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Lego'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    })
})