import { useState, useEffect } from "react";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faStar } from '@fortawesome/free-solid-svg-icons';

function Restcard({ rest }) {
    return (<>
        <div className="w-50 h-60 p-5 flex flex-col gap-2">
            <img className="rounded-xl" src={rest.image} alt={rest.name}></img>
            <p className='text-2xl '>{rest.name}</p>
            <div className="flex gap-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                <p className="font-bold">{rest.rating}</p>
                <p>{rest.deliveryTime}</p>
            </div>
            <p>{rest.cuisine}<br />{rest.location}</p>

        </div>
    </>)
}

export default Restcard;