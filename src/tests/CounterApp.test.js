import React from 'react';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    });

    test('Debe incrementar en 1 al dar click en el boton +1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('Debe restar en 1 al dar click en el boton -1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('Debe resetear al valor por defecto al apretar el boton reset', () => {

        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });
    
});
