//import packages we need to test nav
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

//configure testing enviroment
afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

//check if emoji is visible
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

//check if links are visible
describe('links are visible', () => {
    it('inserts text into the link', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})