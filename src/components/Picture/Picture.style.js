import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  @media screen and (max-width: 800px){
    display: block;
  }
`
export const FlexContainer = styled.div`
  margin: 0;
  width: 50%;
  padding: 24px;
  box-sizing: border-box;
  img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 10px 10px black;
  } 
  
  @media screen and (max-width: 800px){
    width: 100%;
  }
`