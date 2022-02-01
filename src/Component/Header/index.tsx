
import { useState } from "react"
import { useContext } from "react";

import { Container } from "./styles"
import {FiChevronRight} from "react-icons/fi"

import { Context } from "../../hooks/Context";

export function Header(){
    
    const { ipAdress, setIpAdress, handleSubmit}:any = useContext(Context) 

    return(
        <Container>
            <h1>IP Address Tracker</h1>
            <div>
                <input type="text" value={ipAdress} onChange={e => setIpAdress(e.target.value)}/>
                <button onClick={handleSubmit}>
                    <FiChevronRight color="white" fontSize={30}/>
                </button>
            </div>
        </Container>
    )
}