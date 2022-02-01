import { createContext, ReactNode, useState, useEffect } from 'react'

interface ContextProvider {
    children: ReactNode
}

export interface ResultsProps {
    ip:string;
    location:{
        region: string;
        country: string;
        timezone: string;
    };
    isp: string;
}

const initialState : ResultsProps= {
    ip:'',
    location:{
        region: '',
        country: '',
        timezone: '',
    },
    isp: ''
}

export const Context= createContext({})

export function ContextProvider({children}: ContextProvider){

const [results, setResults] = useState <ResultsProps>(initialState)
const [ipAdress, setIpAdress] = useState('')
    
    useEffect(()=>{
        const getInitialData = async () => {
            const response = await fetch (`https://geo.ipify.org/api/v2/country?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=`);
            const data = await response.json();        
            setResults(data); 

        }
        getInitialData() 
        
    }, [])

    

    async function handleSubmit(){
        const response = await fetch (`https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAdress}`);
        const data = await response.json();
        setResults(data)
    } 

    return(
        <Context.Provider value={{
            handleSubmit: handleSubmit,
            ipAdress,
            setIpAdress,
            results,
            setResults
        }}>

            {children}

        </Context.Provider>
    )


}