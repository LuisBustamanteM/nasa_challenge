import React from 'react'
import Picture from "./components/Picture"
import SearchBar from "./components/SearchBar"
import {useNasaData} from './Hooks/hooks'
import {AppComponent, Title} from './app.style'

function App() {
    const { picture, setDate, date, loading} = useNasaData()

    return (
        <AppComponent>
            <Title>NASA picture of the day!</Title>
            <SearchBar setDate={setDate} date={date}/>
            { !loading
                ? <Picture title={picture.title}
                           description={picture.explanation}
                           images={{default: picture.url}}/>
                : <div><h2>LOADING</h2></div>
            }
        </AppComponent>
    )
}

export default App;
