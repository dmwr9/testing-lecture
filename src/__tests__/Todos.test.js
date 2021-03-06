import React from 'react';
import axios from 'axios';
import Todos from '../components/todos';
import { render, act } from '@testing-library/react';

it('Renders todos', async () => {
    let component

    jest
        .spyOn(axios, 'get')
        .mockImplementation(() => {
         return Promise.resolve({ data: [{id: 1, title: 'test title'}]})
    })

    await act( async () => {
        const {container} = render(<Todos/>);
        component = container
    })

    expect(component.textContent).toContain('test title')
})