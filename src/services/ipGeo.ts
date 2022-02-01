import axios from "axios";

// ip adress tracker api
const  ipGeo= axios.create({
  baseURL: `https://geo.ipify.org/api/v2/country?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
});

export default ipGeo;