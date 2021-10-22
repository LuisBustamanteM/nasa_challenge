import React from 'react'
import {render, screen, getByRole, act, waitFor, getByText, fireEvent} from '@testing-library/react';
import App from './App';
import mockData from "./mockData.json";
import config from "./config.json";
const env = config.env

const build = () => {
  const {container, debug} = render(<App/>)

  return {
    container,
    debug,
    title: () => getByRole(container, "heading", {level: 1}),
    dateInput: () => getByRole(container, "date"),
    pictureTitle: () => getByRole(container, "heading", {level:2})
  }
}

describe("Displays Picture of the day app", () => {
  it('Calls NASA api and updates current picture and data', async () => {

    const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
            Promise.resolve({ json: () => Promise.resolve(mockData) })
        )

    const {title, dateInput, pictureTitle, debug} = build()
    const today = new Date()
    const isoToday = today.toISOString().split('T')[0]
    const {baseUrl} = config[env]
    const {key} = config
    const url =  `${baseUrl}?api_key=${key}&date=${isoToday}`

    expect(title()).toHaveTextContent("NASA picture of the day!")
    expect(dateInput()).toHaveDisplayValue(isoToday)
    await act( async () => {
      await waitFor(() => {
        expect(pictureTitle()).toHaveTextContent(mockData.title)

        fireEvent.change(dateInput(), {target: { value: isoToday}})
        expect(dateInput()).toHaveDisplayValue(isoToday)

      })
    })

    expect(fetchMock).toHaveBeenCalledWith(url)
  });
})
