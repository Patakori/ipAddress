import { useEffect, useState } from "react";
import { useContext } from "react";

import { Container } from "./styles"

import { Context } from "../../../hooks/Context";

export function Results(){

    const { results }:any = useContext(Context)

    return(
        <Container>                 
            <h2>IP ADDRESS</h2>
            <p>{results.ip}</p>
            <h2>LOCATION</h2>
            <p>{results.location?.region}, {results.location?.country}</p>
            <h2>TIMEZONE</h2>
            <p>UTC{results.location?.timezone}</p>
            <h2>ISP</h2>
            <p>{results.isp}</p>  
        </Container>



//<h2>LOCATION</h2>
//<p>{`${results.data.location.region}, ${results.data.location.country}`}</p>
//<h2>TIMEZONE</h2>
//<p>UTC-{results.data.location.timezone}</p>

    //<h2>LOCATION</h2>
    //<p>{`${results.location.region}, ${results.location.country}`}</p>
    //<h2>TIMEZONE</h2>
    //<p>UTC-{results.location.timezone}</p>
    )
}



                       

//export const getStaticProps: GetStaticProps = async () => {
//          const response = await fetch (`https://geo.ipify.org/api/v2/country?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
//          const data = await response.json();
//          
//          const results = {
//            ip: data.ip,
//            location:{
//              country: data.location.country,
//              city: data.location.region,
//            }, 
//            timezone: data.location.timezone,
//            isp: data.isp
//          }
//
//  return {
//      props: {
//        results
//      }
//  }
//}

