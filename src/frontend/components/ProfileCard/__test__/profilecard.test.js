import React from 'react'
import ReactDOM from 'react-dom'
import {render,cleanup} from '@testing-library/react'

import Profilecard from './../index'

import { useEffect, useState, fireEvent } from "react";
import "./../styles.css";
import firebase from 'firebase/app'


afterEach(cleanup)

it('should take a snapshot', () => {
    const { asFragment } = render(<Profilecard />)
    
    expect(asFragment(<Profilecard />)).toMatchSnapshot()
});

it('should be disabled', () => {
    const { getByTestId } = render(<Profilecard />); 
    expect(getByTestId('experience_btn')).not.toHaveAttribute('disabled')
});

it('Clicking about button', () =>{
    const { getByTestId } = render(<Profilecard />);

    fireEvent.click(getByTestId('about_btn'))

    expect(getByTestId('a')).toBeTruthy();
})

