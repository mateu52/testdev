import React from "react";
import renderer from 'react-test-renderer';
import Button from './Button';

it('renders ok', () => {
    const tree = renderer
        .create(<Button label="Click me" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});                

describe('testing with jest', () => {
    it('should isOK to by true', () => {
        const isOK = true;
        expect(isOK).toBe(true);
    });
    it('should array length to be 2', () => {
        const names = ['Patryk' , 'Ania'];
        expect(names.length).toBe(2);
     });
});

describe('Button component', () => {
    //czy komponent działa
    it('should renders ok'() => {

    })
    //spr czy licznik sie zwiekszy
    it('should increment counter', () => {
        
    })
})
