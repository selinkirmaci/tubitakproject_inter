import React,{useState} from "react";
import {GoogleMap,Marker} from "react-google-maps";

export default function Map(props)
{
    //const [selectedPlace,setSelectedPlace] = useState(null);
    return (
        <GoogleMap defaultZoom={18} defaultCenter={{lat:props.lat,lng: props.lng}}>
            <Marker position={{lat:props.lat,lng: props.lng}}>
            </Marker>
        </GoogleMap>
    );
}