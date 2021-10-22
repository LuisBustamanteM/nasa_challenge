import React from 'react'
import {Container, FlexContainer} from "./Picture.style";

const PictureComponent = ({title, description, images}) => {

    return (
        <Container>
            <FlexContainer>
                <img src={images.default} alt="Nasa"/>
            </FlexContainer>
            <FlexContainer>
                <h2>{title}</h2>
                <p>{description}</p>
            </FlexContainer>
        </Container>
    )
}


export default PictureComponent