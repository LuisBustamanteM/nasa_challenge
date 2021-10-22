import React from 'react'
import {render, screen, getByRole, act, waitFor, getByText} from '@testing-library/react';
import App from './App';
import mockData from "./mockData.json";
//import {renderHook, act } from '@testing-library/react-hooks'

/*
* Display Components
*   - Form
*     - DATE
*       - Label for date
*       - Check that date updates and calls the request
*   - Image Content Component
*     - Title
*     - Description
*     - Image
* Test api call
* Test api call with parameter
* */


const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve(mockData)
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

// const mockApi = jest
//     .spyOn(global, 'fetch')
//     .mockImplementation(() =>
//         Promise.resolve({json: () => Promise.resolve(mockData)})
//     )


describe("Displays Picture of the day app", () => {
  const build = async () => {
    const {container, debug} = render(<App/>)

    return {
      container,
      debug,
      title: () => getByRole(container, "heading", {level: 1}),
      description: (text) => getByText(container, text),
    }
  }

  // TODO: Check full integration of the app
  it.skip('Accesses the api and returns a picture object', async () => {
    const {description} = build()

    await act(async () => {
      await waitFor(() => {

        expect(description(mockData.explanation))
      })
    })
  });
})
