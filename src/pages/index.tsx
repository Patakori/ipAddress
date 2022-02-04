import { Header } from "../Component/Header";
import { Body } from "../Component/Body";
import { Container } from "./styles";
import { GetStaticProps } from "next";

export default function Home() {
  
  return (
    <Container>
      <Header/>
      <Body/>
    </Container>
  )
}