import { memo, useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';


import L from 'leaflet'
import CustomTileLayer from './CustomTileLayer';
import { Context } from '../../hooks/Context';

const Map = ({location}) => {

//responsavel pelo mapa ir até o ip selecionado

const [map, setMap] = useState(null)

  function handleSetView(){
    if(map && location) {
      map.flyTo(location, 12, {
        duration: 4
      })
    }
  }

  useEffect(()=> handleSetView(), [location])

//Função responsavel por ao clicar na tela, localizar sua localização

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const {getInitialData}:any = useContext(Context)
    const map = useMapEvents({
      click() {
        getInitialData()      
      },    
    })

    return position === null ? null : (
      <Marker position={position}> 
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  //inserir um icone svg

  const iconReact = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>'

  const svgURL = "data:image/svg+xml;base64," + btoa(iconReact)

  const markerIcon = new L.Icon({
    iconUrl: svgURL,
    iconSize: [46, 56],
    iconAnchor: [35, 80],
    popupAnchor: [-10, -80]
  })

  return (
    <MapContainer
      center={location}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%', zIndex:10}}
      whenCreated={map=>setMap(map)}
    >

      <CustomTileLayer />
      <Marker position={location} icon={markerIcon}>
        <Popup>
          Ip wanted is from here.
        </Popup>
      </Marker>
      <LocationMarker />

    </MapContainer>
  )
}

export default memo(Map);