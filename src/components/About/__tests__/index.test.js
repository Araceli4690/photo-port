import React from 'react';

//retrieve functions from react testing library
import { render, cleanup } from '@testing-library/react';

//import extend-expect lib from the jest-dom package
import '@testing-library/jest-dom/extend-expect';

//import component that we will be testing
import About from '..';

//configure testing enviroment by adding a utility function to keep things clean
//ensures that after each test we won't have any leftover memory data
afterEach(cleanup);

//describe function to declare component we're testing
describe('About component', () => {
    //render first About test
    it('renders', () => {
        render(<About />);
    });

    //render second About test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})