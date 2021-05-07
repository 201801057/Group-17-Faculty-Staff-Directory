import React from 'react';
import {Item} from 'react-bootstrap/Breadcrumb'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './../components/Login.js'
import {render , cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import {getElementById} from "@testing-library/dom"

/*describe("login" ,()=>{
    test("validate function shoud pass on correct input",()=>{
        const text = 'text@test.com'
        expect(validateInput(text).toBe(true));
    })
})*/

let wrapper;
afterEach(cleanup);
test('username check',()=>{
 wrapper = shallow(<Login/>);
 wrapper.find('Form').simulate('change', {target: {name: 'email', value: 'Saurabh@gmail.com'}});
 expect(wrapper.state('email')).toEqual('Saurabh@gmail.com');
})

test('password check',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('Form').simulate('change', {target: {name: 'password', value: 'Saurabh@1234'}});
    expect(wrapper.state('email')).toEqual('Saurabh@1234');
   })


