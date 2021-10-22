import {useEffect, useState} from  'react';
import config from '../config.json'
let env = config.env;
const {baseUrl} = config[env]
const {key} = config

export const useNasaData = () => {
    const today = new Date()
    const isoToday = today.toISOString().split('T')[0]
    const [date, setDate] = useState(isoToday)
    const [picture, setPicture] = useState({})
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState(`${baseUrl}?api_key=${key}&date=${date}`)

    useEffect(() => {
        setLoading(true)
        setUrl(`${baseUrl}?api_key=${key}&date=${date}`)
        fetch(url)
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setPicture(data)
                setLoading(false)
            })
            .catch((e) => {
                console.log("ERROR: ", e)
                setPicture({})
            });

    }, [date, url]);

    return { picture, setDate, date, loading}
}