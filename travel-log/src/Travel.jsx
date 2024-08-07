import { useState } from 'react'
import { BiWorld } from "react-icons/bi";
import "./Travel.css"
import Card from "./Card.jsx"
import Data from "./Data.js"

export default function Travel(){
    const cards = Data.map(item => {
        return <Card key={item.id} {...item} />
    })
    return (
        <div>
        <nav><div className='centered_items'><BiWorld size={25} className='world_icon' /> <span>My Travel Journal</span></div></nav>
        {cards}
        </div>
    )
}