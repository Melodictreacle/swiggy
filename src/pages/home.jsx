import { useState } from 'react'
import '../App.css'
import Restcard from '../components/rest_card'
import Navbar1 from '../components/navbar'
function Home() {
    const mockRestaurants = [
        {
            id: 1,
            name: "Burger King",
            cuisine: ["Burgers,", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp",
            location: "Newtown",
        },
        {
            id: 2,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        },
        {
            id: 3,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        }, {
            id: 4,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        }, {
            id: 5,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        }, {
            id: 6,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        }, {
            id: 7,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        }, {
            id: 8,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        },
        {
            id: 9,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        }, {
            id: 10,
            name: "Burger King",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp", location: "Newtown",
        },
    ]
    const food = [{
        id: 1,
        name: "Biriyani",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }, {
        id: 2,
        name: "chowmein",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png"
    }]
    function foodclick(food_name) {

    }
    return (
        <div>
            <div className='px-20 shadow-lg'>
                <Navbar1></Navbar1>
            </div>
            < div className='px-50 pt-5 pb-10'>
                <div>
                    <p className='text-2xl'>User, what's on your mind?</p>
                    <div className='overflow-x-scroll'>
                        <ul className='h-40 w-300 flex gap-5 justify-center'>
                            {food?.map((f) => { return <button onClick={foodclick(f.name)} className='w-30xl object-cover transition-transform duration-300 hover:scale-95'><li key={f.name}><img src={f.image}></img></li></button> })}
                        </ul>
                    </div>

                </div>
                <div>
                    <p className='text-2xl'>Restaurants with online food delivery in Kolkata</p>
                    <ul className='flex gap-3 flex-wrap justify-center'>
                        {mockRestaurants?.map((mr) => { return <><li key={mr.id}><Restcard rest={mr}></Restcard></li></> })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home