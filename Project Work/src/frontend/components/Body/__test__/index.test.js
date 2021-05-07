import React from 'react'
import ReactDOM from 'react-dom'
import {render,cleanup, fireEvent} from '@testing-library/react'

import Body from './../index'

import { useEffect, useState} from "react";
import firebase from 'firebase/app'

afterEach(cleanup)

it('should indicate to go to website', () => {
    const { getByTestId } = render(<Body />); 
    expect(getByTestId('go_to_btn')).toHaveTextContent("Go to the Website");
});

it('btn should be clicked',() => {
    const { getByTestId } = render(<Body />); 
    fireEvent.click(getByTestId('go_to_btn'))
    expect(window.location.href).toEqual('http://localhost/')

});








