import React from 'react'
import {SearchBarContainer, Label, DatePicker, DatePickerContainer } from "./SearchBar.style";

const SearchBarComponent = ({date, setDate}) => {

    const display = ({target}) => {
        setDate(target.value)
    }

    const today = new Date()
    const isoToday = today.toISOString().split('T')[0]

    return(
        <SearchBarContainer>
            <DatePickerContainer>
                <Label htmlFor="picture-date">Search By Date</Label>
                <DatePicker type="date"
                       id="picture-date"
                       role={"date"}
                       value={date}
                       max={isoToday}
                       onChange={(e) => display(e)}/>
            </DatePickerContainer>
        </SearchBarContainer>
    )
}

export default SearchBarComponent