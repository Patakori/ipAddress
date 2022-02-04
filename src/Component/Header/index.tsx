
import { useState } from "react"
import { useContext } from "react";

import { Container } from "./styles"
import {FiChevronRight} from "react-icons/fi"

import { Context } from "../../hooks/Context";

export function Header(){
    
    const { ipAddress, setIpAddress, handleSubmit}:any = useContext(Context) 

    return(
        <Container>
            <h1>IP Address Tracker</h1>
            <div>
                <input placeholder="Search for any IP address" type="text" value={ipAddress} onChange={e => setIpAddress(e.target.value)}/>
                <button >
                    <FiChevronRight onClick={handleSubmit} color="white" fontSize={30}/>
                </button>
            </div>
        </Container>
    )
}

//onClick={handleSubmit}