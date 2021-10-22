import React, {useState} from 'react'
import SearchBar from "./SearchBar.component";
import { render, getByText, getByRole, fireEvent } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import {renderHook, act } from '@testing-library/react-hooks'

import {useNasaData} from '../../Hooks/hooks'
import mockData from "../../mockData.json";

const build = async () => {
    const {result} = renderHook(() => useNasaData())
    const {container, debug} = render(<SearchBar date={result.current.date} setDate={result.current.setDate} />)

    return {
        container,
        debug,
        dateInput: () =>getByRole(container, "date"),
        result
    }
}

describe('Testing SearchBar', () => {

    it('Renders a date input and updates passed state', async () => {

        const {dateInput, result} = await build()
        const today = new Date()

        act( () => {
            fireEvent.change(dateInput(), {target: { value: today.toISOString().split('T')[0] }})
            expect(dateInput()).toHaveDisplayValue(today.toISOString().split('T')[0])
        })

        expect(result.current.date).toBe(today.toISOString().split('T')[0])

    });
});