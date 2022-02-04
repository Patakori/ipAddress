import { useEffect, useState } from "react";
import { useContext } from "react";

import { Container } from "./styles"

import { Context } from "../../../hooks/Context";

export function Results(){

    const { results }:any = useContext(Context)

    return(
        <Container>  
            <div>
                <h2>IP ADDRESS</h2>
                <p>{results.ip}</p>
            </div>               
            <div>
                <h2>LOCATION</h2>
                <h3>{results.location?.city}</h3>
                <h4>{results.location?.region}, {results.location?.country}</h4>
            </div>
            <div>
                <h2>TIMEZONE</h2>
                <p>UTC{results.location?.timezone}</p>
            </div>
            <div>
                <h2>ISP</h2>
                <p>{results.isp}</p>  
            </div>
        </Container>

    )
}

