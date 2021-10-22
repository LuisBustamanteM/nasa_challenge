import React, {useEffect, useState} from  'react';
import config from '../config.json'
let env = config.env;


export const useNasaData = () => {
    const today = new Date()
    const [date, setDate] = useState(today.toISOString().split('T')[0])
    const [picture, setPicture] = useState({})
    const [loading, setLoading] = useState(false)
    const {baseUrl} = config[env]
    const {key} = config

    useEffect(() => {
        let url =  `${baseUrl}?api_key=${key}&date=${date}`
        setLoading(true)

        fetch(url)
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setPicture(data)
            })
            .catch((e) => {
                console.log("ERROR: ", e)
                setPicture({})
            });
            setLoading(false)

    }, [date]);

    return { picture, setDate, date, loading}
}