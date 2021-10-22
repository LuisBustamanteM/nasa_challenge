import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

export const DatePickerContainer = styled.div`
  margin: 0 auto;
`;
export const Label = styled.label`
  margin: 0;
  padding: 24px;
  box-sizing: border-box;
`

export const DatePicker = styled.input`
  background: transparent;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px #b5595e;
  :focus{
    border: none;
  }
`