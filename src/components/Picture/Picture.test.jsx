import React from 'react'
import { render, getByRole, getByText } from '@testing-library/react'
import Picture from './Picture.component'
import mockData from "../../mockData.json"

describe("Displays Picture of the day app", () => {
    const build = () => {
        const {container, debug} = render(<Picture description={mockData.explanation} title={mockData.title} images={{hd: mockData.hdurl, default: mockData.url}}/>)

        return {
            container,
            debug,
            title: () => getByRole(container, "heading"),
            description: (text) => getByText(container, text),
            image: () => getByRole(container, "img")
        }
    }

    test('Displays all <Picture/> elements', () => {
        const {title, description, image} = build()

        expect(title()).toHaveTextContent(mockData.title)
        expect(description(mockData.explanation)).toHaveTextContent(mockData.explanation)
        expect(image().src).toBe(mockData.url)
    });
})
