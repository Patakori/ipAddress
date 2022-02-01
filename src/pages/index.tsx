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
//          console.log(data)
//
//  return {
//      props: {
//        results
//      }
//  }
//}