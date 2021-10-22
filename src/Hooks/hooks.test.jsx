import React, {useState} from 'react'
import { waitFor } from '@testing-library/react'
import {renderHook, act } from '@testing-library/react-hooks'
import mockData from '../mockData.json'
import {useNasaData} from "./hooks"
import config from '../config.json'
let env = config.env;

// Mocking fetch manually
// const unmockedFetch = global.fetch
//
// beforeAll(() => {
//     global.fetch = () =>
//         Promise.resolve({
//             json: () => Promise.resolve(mockData)
//         })
// })
//
// afterAll(() => {
//     global.fetch = unmockedFetch
// })
// // #####

describe("Testing Custom Hooks mocking fetch", () => {
    it("Returns video data from a mock api", async() => {

        const fetchMock = jest
            .spyOn(global, 'fetch')
            .mockImplementation(() =>
                Promise.resolve({ json: () => Promise.resolve(mockData) })
            )

        const {baseUrl} = config[env]
        const {key} = config
        const today = new Date()
        const isoToday = today.toISOString().split('T')[0]
        let url =  `${baseUrl}?api_key=${key}&date=${isoToday}`

        const { result } = renderHook(() => useNasaData())

        await act(async () => {
            await waitFor(() => {
                expect(result.current.picture).toMatchObject(mockData)
            })
        })

        expect(fetchMock).toHaveBeenCalledWith(url)
    })

})