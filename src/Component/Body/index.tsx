import { Results } from "./Results";
import { Container, MapContainer } from "./styles";
import { Context } from "../../hooks/Context";

import { useContext } from "react";
import dynamic from "next/dynamic";

const Map = dynamic (() => import('../Map'), {ssr: false})

export function Body(){
    const defaultPosition = [ -23.5500666, -46.6332549]

    const { results }:any = useContext(Context)

    return(
        <Container>
                <Results />

                <Map defaultPosition={defaultPosition}/>
                
        </Container>
    )
}