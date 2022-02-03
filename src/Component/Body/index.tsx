import { Results } from "./Results";
import { Container, MapContainer } from "./styles";
import { Context } from "../../hooks/Context";

import { useContext } from "react";
import dynamic from "next/dynamic";

const Map = dynamic (() => import('../Map'), {ssr: false})

export function Body(){

    const { results }:any = useContext(Context)

    return(
        <Container>
                <Results />

                <Map location={[results.location?.lat , results.location?.lng]}/>
                
        </Container>
    )
}