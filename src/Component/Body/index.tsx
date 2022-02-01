import { Results } from "./Results";
import { Container } from "./styles";
import L from "leaflet"

export function Body(){

    return(
        <Container>
            <div>
                <Results />
            </div>
        </Container>
    )
}