import { useState } from 'react'
import "./Card.css"
import { CiLocationOn } from "react-icons/ci";


export default function Card(props){
    return (
        <div className="travel_card">
        <div className='break'></div>
        <img src={props.img}/>
        <div className='location_info'> <CiLocationOn className="location_icon" /> <span>{props.location}</span> <a href={props.google_maps_url}>View on Google Maps</a></div>
        <h1>{props.title}</h1>
        <h3>{props.start_date} - {props.end_date}</h3>
        <p>{props.description}</p>
        <hr/>
        </div>
    )
}