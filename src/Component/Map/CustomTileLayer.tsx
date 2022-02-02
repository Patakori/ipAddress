import { memo } from "react";
import { TileLayer } from "react-leaflet";

function CustomTileLayer() {


  return (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

export default memo(CustomTileLayer);