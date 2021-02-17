import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

it('does not show dropdown menu when mounted', () => {
    const { queryByTestId } = render(<Header/>)

    const dropdown = queryByTestId('dropdown');

    expect(dropdown).not.toBeTruthy();
})

it('shows dropdown menu when hamburger is clicked', () => {
    const { getByTestId, container } = render(<Header/>);

    const hamburger = getByTestId('hamburger-button');

    fireEvent.click(hamburger);

    expect(container.textContent).toContain('Dropdown menu');
})