import Navbar1 from "../components/navbar"
import React from "react"
import { useState } from "react"
function Search() {
    const popcus = [{
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    },
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    },
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    },
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    },
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    },
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    }
        ,
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    }
        ,
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    }
        ,
    {
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    }
    ]

    return (<div>
        <div className='px-20 shadow-lg'>
            <Navbar1></Navbar1>
        </div>
        <div className="px-50">
            <div className="p-5 flex justify-center gap-5 pt-10">
                <input type="text" placeholder="Search.." className="w-full h-10 border-2 rounded   placeholder:text-1xl font-bold p-5 "></input>
                <button className="w-10 h-10 hover:cursor-pointer">Search</button>
            </div>
            <div className="p-5 w-full  font-bold text-2xl">
                <p>Popular cuisines</p>
                <div>
                    <ul className="flex justify-center">
                        {popcus?.map((cus) => { return (<li key={cus.id}><img className="w-30" src={cus.image}></img></li>) })}
                    </ul>
                </div>
            </div>
        </div>

    </div>)
}
export default Search