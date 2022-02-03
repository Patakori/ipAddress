import { latLng } from 'leaflet'
import { createContext, ReactNode, useState, useEffect } from 'react'

interface ContextProvider {
    children: ReactNode
}

export interface ResultsProps {
    ip:string;
    location:{
        region: string;
        country: string;
        city: string;
        timezone: string;
        lat: number;
        lng:number;
    };
    isp: string;
}

const initialState : ResultsProps= {
    ip:'',
    location:{
        region: '',
        country: '',
        city:'',
        timezone: '',
        lat: -23.5500666,
        lng: -46.6332549,
    },
    isp: ''
}

export const Context= createContext({})

export function ContextProvider({children}: ContextProvider){

const [results, setResults] = useState <ResultsProps>(initialState)
const [ipAddress, setIpAddress] = useState('')

    async function getInitialData () {
        const response = await fetch (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=`);
        const data = await response.json();        
        setResults(data);

    }

    async function handleSubmit(){
        const response = await fetch (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`);
        const data = await response.json();
        setResults(data);
        setIpAddress('')

    } 

    useEffect(()=>{
        getInitialData() 
    }, [])

    return(
        <Context.Provider value={{
            getInitialData:getInitialData,
            handleSubmit: handleSubmit,
            ipAddress,
            setIpAddress,
            results,
            setResults
        }}>

            {children}

        </Context.Provider>
    )


}