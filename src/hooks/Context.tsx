import { latLng } from 'leaflet'
import { createContext, ReactNode, useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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

        try {
            if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {

                const response = await fetch (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`);
                const data = await response.json();
                setResults(data);
                setIpAddress('')           
            }

        } catch (err){
            toast.error("An error occurred while searching for this IP or domain! Please try again.")
        }

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